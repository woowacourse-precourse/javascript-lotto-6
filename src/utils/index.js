export const deepFreeze = (object) => {
  for (let key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      deepFreeze(object[key]);
    }
  }
  return Object.freeze(object);
};
