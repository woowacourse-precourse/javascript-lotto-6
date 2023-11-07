const MESSAGE = {
  input: {
    price: '구입금액을 입력해 주세요.\n',
    lotto: '당첨 번호를 입력해 주세요.\n',
    bonus: '\n보너스 번호를 입력해 주세요.\n',
  },
  output: {
    numberOfLotto: '개를 구매했습니다.',
    stats: '\n당첨 통계\n---',
    rate: '총 수익률은 ',
  },
  unit: {
    number: '개',
    percent: '%',
  },
  error: {
    notNumber: '[ERROR] 숫자가 아닌 값이 입력되었습니다.',
    priceUnit: '[ERROR] 1,000원 단위의 숫자를 입력해주세요.',
    duplicateNumber: '[ERROR] 중복된 숫자가 있습니다.',
    duplicateBonusNumber: '[ERROR] 당첨 번호 이외의 숫자를 1개 입력해주세요.',
    lottoLength:
      '[ERROR] 로또 번호는 6개여야 합니다. 쉼표(,)로 구분해서 입력해주세요.',
    rangeLotto: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    rangeBonus:
      '[ERROR] 보너스 번호는 당첨 번호 외 1부터 45 사이의 숫자 1개여야 합니다.',
  },
  closing: '입니다.',
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.unit);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
