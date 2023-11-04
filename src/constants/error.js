const message = Object.freeze({
  emptyString: '사용자의 입력이 없습니다.',
  notPositiveInteger: '양의 정수만 입력할 수 있습니다.',
});

const name = Object.freeze({
  inputView: 'inputViewError',
});

const ERROR = Object.freeze({
  message,
  name,
});

export default ERROR;
