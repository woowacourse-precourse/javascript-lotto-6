export const REGEX = {
  IS_NUMBER: /^[0-9]+$/,
  IS_GREATER_THAN_THOUSAND: /^[1-9][0-9]{3,}$/,
  IS_THOUSAND_MULTIPLE: /^[1-9][0-9]*[0]{3}$/,

  IS_COMMA_SEPARATED_NUMBER: /^\d+(,\d+)*$/,
  IS_SIX_NUMBERS: /^[\d]{1,5}(,[\d]{1,5}){5}$/,
  IS_COMMA_SEPARATED_NUMBER_BETWEEN_1_AND_45: /^(?:[1-9]|[1-3][0-9]|4[0-5])(,(?:[1-9]|[1-3][0-9]|4[0-5])){5}$/,

  IS_BETWEEN_1_AND_45: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/
};
