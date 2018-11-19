// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import config from '../webpack.config.dev';
import serverRoutes from '../server/routes'

const bundler = webpack(config);

function runExpressServer() {
  const app = express();

  app.use((req, res, next) => {
    if (req.url.startsWith('/auth') || req.url.startsWith('/api')){
      serverRoutes(req, res, next);
    } else {
      next();
    }
  });
  app.use(historyApiFallback());
  app.use(webpackDevMiddleware(bundler, {
    // Dev middleware can't access config, so we provide publicPath
    publicPath: config.output.publicPath,

    // These settings suppress noisy webpack output so only errors are displayed to the console.
    noInfo: true,
    quiet: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },

    // for other settings see
    // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
  }));
  app.use(webpackHotMiddleware(bundler));
  app.listen(3000);
}

// Run Browsersync and use middleware for Hot Module Replacement
function runBrowserSyncServer(){
  browserSync({
    port: 3000,
    ui: {
      port: 3001
    },
    server: {
      baseDir: 'src',
  
      middleware: [
        historyApiFallback(),
  
        webpackDevMiddleware(bundler, {
          // Dev middleware can't access config, so we provide publicPath
          publicPath: config.output.publicPath,
  
          // These settings suppress noisy webpack output so only errors are displayed to the console.
          noInfo: true,
          quiet: false,
          stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
          },
  
          // for other settings see
          // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
        }),
  
        // bundler should be the same as above
        webpackHotMiddleware(bundler),
        serverRoutes
      ]
    },
  
    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
      'src/*.html'
    ]
  });
}

runExpressServer();
