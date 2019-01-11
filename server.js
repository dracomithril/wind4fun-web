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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`app server started ${port}`);
});
