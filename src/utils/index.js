function throwErrorIf(condition, message) {
  if (condition) throw Error(message);
}

export { throwErrorIf };
