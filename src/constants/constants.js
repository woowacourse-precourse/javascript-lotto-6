const errorString = (content) => `[ERROR] ${content}`;

export const REWARD = Object.freeze({
  '1등': 2000000000,
  '2등': 30000000,
  '3등': 1500000,
  '4등': 50000,
  '5등': 5000,
  낙첨: 0,
});

export const ERROR = Object.freeze({
  invalidLength: errorString('로또 번호는 6개여야 합니다.'),
  duplicatedNumber: errorString('중복이 없는 숫자여야 합니다.'),
  invalidRange: errorString('숫자는 1부터 45중 하나여야 합니다.'),
  invalidNumber: errorString('숫자를 입력해주세요'),
  duplicatedWithWinning: errorString('기존 6개의 당첨번호와 중복 되면 안됩니다.'),
  invalidUnit: errorString('단위는 1000입니다.'),
});

export const VALUE = Object.freeze({
  minLottoNumber: 1,
  maxLottoNumber: 45,
  lottoNumberCount: 6,
  lottoUnit: 1000,
  decimalPlace: 1,
});

export const MESSAGE = Object.freeze({
  purchaseLotto: '개를 구매했습니다.',
  profitHeader: '총 수익률은 ',
  profitFooter: '%입니다.',
  inputAmount: '구입금액을 입력해 주세요.\n',
  inputWinningNumber: '\n당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  amountUnit: '개',
});

export const RANKING = Object.freeze({
  fifthPlace: '3개 일치 (5,000원) - ',
  fourthPlace: '4개 일치 (50,000원) - ',
  thirdPlace: '5개 일치 (1,500,000원) - ',
  secondPlace: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  firstPlace: '6개 일치 (2,000,000,000원) - ',
});

export const SIGN = Object.freeze({
  printUnit: ', ',
  blank: '',
  cuttingUnit: ',',
});
