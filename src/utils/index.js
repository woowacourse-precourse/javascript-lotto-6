export const throwErrorIf = function (condition, message) {
  if (condition) throw Error(message);
};
