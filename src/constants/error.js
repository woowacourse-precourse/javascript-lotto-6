const message = Object.freeze({
  remainderNotZero: '[ERROR] 1,000 단위로 입력하세요.',
  invalidNumber: '[ERROR] 숫자를 입력하세요.',
  missingValue: '[ERROR] 값을 입력해주세요.',
  negativeNumber: '[ERROR] 음수 값을 입력할 수 없습니다.',
  invalidSeparator: '[ERROR] 쉼표 구분을 잘못 입력하셨습니다.',
  invalidNumbersCount: '[ERROR] 당첨 번호 6개를 입력해주세요.',
  invalidRange: '[ERROR] 1에서 45사이의 값이 아닙니다.',
  invalidLottoNumberCount: '[ERROR] 로또 번호의 개수가 6개가 아닙니다.',
  duplicatedLottoNumber: '[ERROR] 로또 번호가 중복되었습니다.'
});

const ERROR = Object.freeze({ message });

export default ERROR;
