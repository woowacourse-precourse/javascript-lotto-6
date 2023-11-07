export const MESSAGE = Object.freeze({
  moneyInput: `구입금액을 입력해 주세요.\n`,
  lottoAmount: amount => `\n${amount}개를 구매했습니다.`,
  lottoList: lotto => `[${lotto.join(', ')}]`,
  lottoNumberInput: `\n당첨 번호를 입력해 주세요.\n`,
  bonusNumberInput: `\n보너스 번호를 입력해 주세요.\n`,
});

export const ERROR = Object.freeze({
  notDivisibleMoney: `[ERROR] 1000단위의 금액을 입력해주세요.\n`,
  emptyValue: `[ERROR] 값을 입력해주세요.\n`,
  notNumberic: `[ERROR] 양의 정수값만 입력해주세요.\n`,
  underThousandMoney: `[ERROR] 1000원 이상을 입력해주세요.\n`,
  notSixNumber: `[ERROR] 6개의 숫자를 쉼표를 통해 구분해 입력해 주세요.\n`,
  rangeOverInput: `[ERROR] 1~45 사이의 수만 입력해주세요.\n`,
  sameNumber: `[ERROR] 중복하지 않는 수를 입력해주세요.\n`,
});

export const PRICE = [5000, 50000, 1500000, 30000000, 2000000000];

export const RESULT = {
  resultMessage: '\n당첨 통계\n---',
  matchCount: countList =>
    `3개 일치 (5,000원) - ${countList[0]}개\n4개 일치 (50,000원) - ${countList[1]}개\n5개 일치 (1,500,000원) - ${countList[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${countList[3]}개\n6개 일치 (2,000,000,000원) - ${countList[4]}개`,
  printBenefit: benefit => `총 수익률은 ${benefit}%입니다.`,
};

export const NUMBERS = Object.freeze({
  lottoLength: 6,
  minimumMoney: 1000,
  unitOfMoney: 1000,
  rankCountUp: 1,
  rankLength: 5,
});

export const SPLITWORD = `,`;
export const LOTTO_NUMBER_RANGE = [1, 45];
