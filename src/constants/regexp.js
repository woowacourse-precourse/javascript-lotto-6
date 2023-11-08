const NUMERIC_COMMA_EXPRESSION = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;

export const REGEX_OBJECT = Object.freeze({ NUMERIC_COMMA_EXPRESSION });

export { NUMERIC_COMMA_EXPRESSION };
