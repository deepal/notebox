// This file configures the development web server
// which supports hot reloading and synchronized testing.

import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import opn from 'opn';
import config from '../webpack.config.dev';
import serverRoutes from '../server/routes'

const bundler = webpack(config);

const DEV_SERVER_PORT = 3000

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
  app.listen(DEV_SERVER_PORT, () => {
    console.log('Dev server started!');    //eslint-disable-line
    opn(`http://localhost:${DEV_SERVER_PORT}`)
  });
}

runExpressServer();
