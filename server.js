const express = require('express');
const serveStatic = require('serve-static');
const winston = require('winston');
const { join } = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});
const app = express();
app.use(serveStatic(join(__dirname, 'build')));
const storybook = express();
storybook.use(serveStatic(join(__dirname, 'storybook-static')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`app server started ${port}`);
});
storybook.listen(9009, () => {
  logger.info('storybook server started');
});