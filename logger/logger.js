const logger = require('winston');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true,
});
logger.add(logger.transports.File, { filename: 'log.txt' });
logger.level = 'debug';
