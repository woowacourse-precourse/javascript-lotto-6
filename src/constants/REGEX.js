export const REGEX = {
  isNumber: /^[0-9]+$/,
  isGreaterThanThousand: /^[1-9][0-9]{3,}$/,
  isThousandMultiple: /^[1-9][0-9]*[0]{3}$/,

  isCommaSeparatedNumber: /^\d+(,\d+)*$/,
  isSixNumbers: /^[\d]{1,5}(,[\d]{1,5}){5}$/,
  isBetween1And45: /^(?:[1-9]|[1-3][0-9]|4[0-5])(,(?:[1-9]|[1-3][0-9]|4[0-5])){5}$/,
  isUniqueNumber: /^(?!.*(\d+).*\b\1\b)\b\d{1,45}(,\d{1,45}){5}\b$/,
}