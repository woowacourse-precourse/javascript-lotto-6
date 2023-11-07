const inputView = Object.freeze({
  emptyString: '사용자의 입력이 없습니다.',
  notPositiveInteger: '양의 정수만 입력할 수 있습니다.',
});

const lotto = Object.freeze({
  length: '로또 번호는 6개여야 합니다.',
  notUnique: '로또 번호는 중복되지 않아야 합니다.',
  notInRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidUnit: '1000원 단위로 입력해주세요.',
  falsy: '로또 번호를 입력해주세요.',
});

const message = Object.freeze({
  inputView,
  lotto,
});

const name = Object.freeze({
  inputView: 'inputViewError',
  lotto: 'lottoError',
});

const ERROR = Object.freeze({
  message,
  name,
});

export default ERROR;
