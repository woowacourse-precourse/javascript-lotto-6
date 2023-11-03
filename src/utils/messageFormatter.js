const error = Object.freeze({
  default: (message) => `[ERROR] ${message}`,
  lottoNumbersLength: (length) =>
    error.default(`로또 번호는 ${length}개여야 합니다.`),
  lottoNumbersIsOverRange: (startInclusive, endInclusive) =>
    error.default(
      `로또 번호의 숫자 범위는 ${startInclusive}~${endInclusive} 입니다.`,
    ),
});

const messageFormatter = Object.freeze({
  error,
});

export default messageFormatter;
