const moment = require("moment");

/**
 * @param {string} username
 * @param {string} text
 */

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

module.exports = formatMessage;
