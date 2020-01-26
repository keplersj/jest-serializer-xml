const isXML = require("is-xml");
const formatXML = require("xml-formatter");

module.exports = {
  test: isXML,
  print: value => formatXML(value)
};
