const { Console } = require("@woowacourse/mission-utils");

const Error = (errorMessage) => {
  Console.print(errorMessage);
};

module.exports = Error;
