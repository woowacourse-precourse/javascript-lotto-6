const message = Object.freeze({
  remainderNotZero: '1,000 단위로 입력하세요.',
  invalidNumber: '숫자를 입력하세요.',
  missingValue: '값을 입력해주세요.',
  negativeNumber: '음수 값을 입력할 수 없습니다.',
  invalidSeparator: '쉼표 구분을 잘못 입력하셨습니다.',
  invalidNumbersCount: '당첨 번호 6개를 입력해주세요.',
  invalidRange: '1에서 45사이의 값이 아닙니다.',
  invalidLottoNumberCount: '로또 번호의 개수가 6개가 아닙니다.',
  duplicatedLottoNumber: ' 로또 번호가 중복되었습니다.'
});

const ERROR = Object.freeze({ message });

export default ERROR;
