const MESSAGE = Object.freeze({});

const ERROR_MESSAGE = Object.freeze({
  header: '[ERROR]',
  isNotNumber: '잘못된 형식입니다. 숫자와 ","만 사용가능합니다.',
  range: '사용 가능한 숫자 범위는 1부터 45까지입니다.',
  noReset:
    '쉼표가 존재하지 않습니다. 숫자 사이에 쉼표를 사용해 숫자를 구별해주세요.',
  sixNumbers: '로또 번호는 6개여야 합니다.',
  oneNumber: '보너스 볼 번호는 1개여야 합니다.',
  duplicateNumber:
    '중복된 숫자가 존재합니다. 로또 번호는 서로 다른 숫자로 이루어져야합니다.',
  payment: '구매 금액은 1000원 이상이며 1000원 단위여야합니다.',
  duplicateBonusBall: '보너스 볼은 입력한 로또 번호 이외의 숫자여야 합니다.',
});

export { MESSAGE, ERROR_MESSAGE };
