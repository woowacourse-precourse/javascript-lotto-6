function deepFreeze(object) {
  var propNames = Object.getOwnPropertyNames(object);

  for (let name of propNames) {
    let value = object[name];

    object[name] =
      value && typeof value === "object" ? deepFreeze(value) : value;
  }

  return Object.freeze(object);
}

export const LOTTO_CONSTANT = {
  SIZE: 6,
  MAX_RANGE: 45,
  MIN_RANGE: 1,
};
