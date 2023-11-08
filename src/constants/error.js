const ERROR_MESSAGE_GENERATOR = Object.freeze({
  overMaxLength(target, max) {
    return `${target}에 ${max}자 이하의 문자열을 입력해주세요!`;
  },

  underMaxLength(target, min) {
    return `${target}에 ${min}자 이상의 문자열을 입력해주세요!`;
  },

  overMaxNumber(target, max) {
    return `${target}에 ${max} 이하의 숫자를 입력해주세요!`;
  },

  underMinNumber(target, min) {
    return `${target}에 ${min} 이상의 숫자를 입력해주세요!`;
  },

  outOfRange(target, { min, max }) {
    return `${target}에 ${min} 이상 ${max} 이하의 숫자를 입력해주세요!`;
  },

  notString(target) {
    return `${target}에 문자열을 입력해주세요!`;
  },

  notNumber(target) {
    return `${target}에 숫자를 입력해주세요!`;
  },

  notArray(target) {
    return `${target}에 배열을 입력해주세요!`;
  },

  blank(target) {
    return `${target}에 공백이 아닌 값을 입력해주세요!`;
  },

  notInteger(target) {
    return `${target}에 정수를 입력해주세요!`;
  },

  duplicated(target) {
    return `${target}에 중복된 값이 존재합니다!`;
  },
});

export default ERROR_MESSAGE_GENERATOR;
