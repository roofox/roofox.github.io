const dateFNS = require("date-fns");
const esLocale = require("date-fns/locale/es");
const util = require("util");

function setFilters(eleventyConfig) {
  eleventyConfig.addFilter("dump", (config) => util.inspect(config));

  eleventyConfig.addFilter("formatDate", function (value) {
    return dateFNS.format(dateFNS.parseISO(value), "MMMM d, yyyy", {
      locale: esLocale,
    });
  });
}

module.exports = setFilters;
