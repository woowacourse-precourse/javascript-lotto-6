import addComma from '../utils/addComma.js';
import OPTION from './option.js';

const read = Object.freeze({
  purchaseAmount: '구입 금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
});

const print = Object.freeze({
  lottoCount: (lottoCount) => `${lottoCount}개를 구매했습니다.`,
  lottoTotalReturns: (lottoTotalReturns) =>
    `총 수익률은 ${lottoTotalReturns}%입니다.`,
  lottoResultHeader: '당첨 통계\n---',
  firstPrizeResult: (prizeCount) =>
    `6개 일치 (${addComma(OPTION.prize.firstPrizeAmount)}원) - ${prizeCount}개`,
  secondPrizeResult: (prizeCount) =>
    `5개 일치, 보너스 볼 일치 (${addComma(
      OPTION.prize.secondPrizeAmount,
    )}원) - ${prizeCount}개`,
  thirdPrizeResult: (prizeCount) =>
    `5개 일치 (${addComma(OPTION.prize.thirdPrizeAmount)}원) - ${prizeCount}개`,
  fourthPrizeResult: (prizeCount) =>
    `4개 일치 (${addComma(
      OPTION.prize.fourthPrizeAmount,
    )}원) - ${prizeCount}개`,
  fifthPrizeResult: (prizeCount) =>
    `3개 일치 (${addComma(OPTION.prize.fifthPrizeAmount)}원) - ${prizeCount}개`,
});

const error = Object.freeze({
  prefix: '[ERROR]',
  purchaseAmountMustBePositiveInteger: '구입 금액은 양의 정수여야 합니다.',
  purchaseAmountMustBeAmountUnit: `구입 금액은 ${OPTION.lotto.amountUnit}원 단위여야 합니다.`,
  lottoNumbersMustBeLottoLength: `로또 번호는 ${OPTION.lotto.lottoLength}개여야 합니다.`,
  lottoNumbersMustBeUnique: `로또 번호는 중복되지 않아야 합니다.`,
  lottoNumbersMustBeInRange: `로또 번호는 ${OPTION.lotto.minLottoNumber}부터 ${OPTION.lotto.maxLottoNumber} 사이의 숫자여야 합니다.`,
  bonuseNumberMustBeInRange: `보너스 번호는 ${OPTION.lotto.minLottoNumber}부터 ${OPTION.lotto.maxLottoNumber} 사이의 숫자여야 합니다.`,
  bonusNumberMustBeUnique: `보너스 번호는 로또 번호와 중복되지 않아야 합니다.`,
});

const MESSAGE = Object.freeze({ read, print, error });

export default MESSAGE;
