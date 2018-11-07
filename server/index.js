const express = require('express');
const session = require('express-session');
const http = require('http');
const auth = require('http-auth');
const appRootPath = require('app-root-path');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const apiRoutes = require('./api');
const authRoutes = require('./routes/auth');

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
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/redirect"
  }, (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
    //    User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //      return done(err, user);
    //    });
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    done(null, {id});
});

app.use(express.static(appRootPath.resolve('./dist')));

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => {
    res.sendFile(appRootPath.resolve('dist/index.html'));
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);