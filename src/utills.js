export function validateUnit(unit, price) {
  if (price % unit !== 0) throw new InputError('');
}
export function stringToNumber(text) {
  return Number(text);
}

export default { stringToNumber };
