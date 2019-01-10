'use strict';
const indeedScraper = require('./lib/scraper.js');

module.exports.query = function(queryObject, options){
  return indeedScraper.query(queryObject, options);
}

module.exports.getDescription = indeedScraper.getDescription;
