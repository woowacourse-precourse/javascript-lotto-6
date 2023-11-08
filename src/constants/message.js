import OPTION from './option.js';

const read = Object.freeze({
  readPurchaseAmount: '구입 금액을 입력해 주세요.\n',
  readWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  readBonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const print = Object.freeze({
  printLottoCounts: '개를 구매했습니다.',
  printLottoResult: '당첨 통계\n---',
  printFirstPrize: `6개 일치 (${OPTION.firstPrizeAmount.toLocaleString(
    'ko-KR',
  )}) -`,
  printSecondPrize: `5개 일치, 보너스 번호 일치 (${OPTION.secondPrizeAmount.toLocaleString(
    'ko-KR',
  )}원) -`,
  printThirdPrize: `5개 일치 (${OPTION.thirdPrizeAmount.toLocaleString(
    'ko-KR',
  )}원) -`,
  printFourthPrize: `4개 일치 (${OPTION.fourthPrizeAmount.toLocaleString(
    'ko-KR',
  )}원) -`,
  printFifthPrize: `3개 일치 (${OPTION.fifthPrizeAmount.toLocaleString(
    'ko-KR',
  )}원) -`,
  printLottoTotalReturns: ['총 수익률은', '%입니다.'],
});

const error = Object.freeze({
  prefix: '[ERROR]',
  purchaseAmountMustBePositiveInteger: '구입 금액은 양의 정수여야 합니다.',
  purchaseAmountMustBeAmountUnit: `구입 금액은 ${OPTION.amountUnit}원 단위여야 합니다.`,
  lottoNumbersMustBeLottoLength: `로또 번호는 ${OPTION.lottoLength}개여야 합니다.`,
  lottoNumbersMustBeUnique: `로또 번호는 중복되지 않아야 합니다.`,
  lottoNumbersMustBeInRange: `로또 번호는 ${OPTION.minLottoNumber}부터 ${OPTION.maxLottoNumber} 사이의 숫자여야 합니다.`,
  bonuseNumberMustBeInRange: `보너스 번호는 ${OPTION.minLottoNumber}부터 ${OPTION.maxLottoNumber} 사이의 숫자여야 합니다.`,
  bonusNumberMustBeUnique: `보너스 번호는 로또 번호와 중복되지 않아야 합니다.`,
});

const MESSAGE = Object.freeze({ read, print, error });

export default MESSAGE;
