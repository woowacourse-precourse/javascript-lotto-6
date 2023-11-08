const NEW_LINE = '\n';
const ERROR = '[ERROR]';

const INPUT_MESSAGE = {
  purchaseAmount: `구입금액을 입력해주세요.(로또 1장의 구매 가격은 1,000원입니다.)'${NEW_LINE}`,
  winningNumbers: `당첨 번호를 입력해주세요.(입력 번호는 쉼표(,) 기준으로 구분${NEW_LINE}`,
  bonusNumber: `보너스 번호를 입력해주세요.${NEW_LINE}`,
};

const OUTPUT_MESSAGE = {
  purchaseAmount: `개를 구매했습니다.`,
  winningStats: `당첨 통계${NEW_LINE}---`,
};

const ERROR_MESSAGE = {
  unit: `${ERROR}1,000원 단위만 입력 가능합니다.`,
  numericOnly: `${ERROR}숫자만 입력해주세요`,
  duplication: `${ERROR}당첨 숫자에 포함되지 않은 숫자를 입력하세요.`,
  lottoNumber: {
    count: `${ERROR}로또 번호는 6개여야 합니다.`,
    duplication: `${ERROR}로또 번호가 중복되지 않아야 합니다.`,
    notInt: `${ERROR}로또 번호는 정수여야 합니다.`,
    notInRange: `${ERROR}로또 번호는 1~45 사이의 숫자여야 합니다.`,
  },
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
