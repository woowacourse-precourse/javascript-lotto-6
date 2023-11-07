const EMPTY_STRING = /^\s*$/;
const INTERGER = /^[^0]\d*/;
const COMMA_SEPARATED_NUMBERS = /^\d+(,\d+)*$/;

const REGEXP = Object.freeze({
  EMPTY_STRING,
  INTERGER,
  COMMA_SEPARATED_NUMBERS,
});

export default REGEXP;
