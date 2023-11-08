const EMPTY_STRING = /^\s*$/;
const POSITIVE_INTEGER = /^[1-9]\d*$/;
const COMMA_SEPARATED_NUMBERS = /^\d+(,\d+)*$/;

const REGEXP = Object.freeze({
  EMPTY_STRING,
  POSITIVE_INTEGER,
  COMMA_SEPARATED_NUMBERS,
});

export default REGEXP;
