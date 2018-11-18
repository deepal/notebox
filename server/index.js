require('dotenv').config();
const express = require('express');
const session = require('express-session');
const http = require('http');
const auth = require('http-auth');
const appRootPath = require('app-root-path');
const passport = require('passport');
const { promisify } = require('util');
const requestFn = require('request');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const apiRoutes = require('./api');
const authRoutes = require('./routes/auth');
const request = promisify(requestFn);

const basicAuth = auth.basic({
    realm: "deepal.io"
}, (username, password, cb) => cb (username == 'deepal' && password == 'vishi'));

const app = express();
app.use(session({
    name: 'NBOX_SESSION',
    secret: '1234',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: false
    }
}));
app.use(auth.connect(basicAuth));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/redirect"
  }, (accessToken, refreshToken, profile, done) => {
      /**
       * Once Google OAuth authentication is successful, send retrieved google profile to
       * the backend to create a local user record. Then call passport callback 'done' with
       * the user details returned from the backend
       */
      request({
          method: 'POST',
          url: 'http://localhost:9999/auth/login/google',
          body: {
              googleProfile: profile
          },
          json: true
      }).then((resp) => {
            return done(null, resp.body.data.user);
      }).catch((err) => {
          return done(err);
      });
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    request({
        method: 'GET',
        url: `http://localhost:9999/auth/user/${id}`,
        json: true
    })
    .then((resp) => {
        done(null, resp.body.data.user);
    })
});

app.use(express.static(appRootPath.resolve('./dist')));

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(appRootPath.resolve('dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);