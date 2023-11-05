import REGEXS from '../../constants/regex.js';

const isValidType = input => {
  return REGEXS.rNumber.test(input);
};

export default isValidType;
