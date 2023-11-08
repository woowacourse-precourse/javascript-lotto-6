import paramType from '../lib/paramType/src/paramType.js';

const roundNumber = (
  number,
  decimals = 1,
  _0 = paramType(number, 'number'),
  _1 = paramType(decimals, 'number'),
) => {
  return number.toFixed(decimals);
};

export default roundNumber;
