import REGEXS from '../../constants/regex.js';

const isValidType = input => {
  return REGEXS.rNumber.test(Number(input));
};

export default isValidType;
