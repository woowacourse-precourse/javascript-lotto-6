import NUMBERS from './numbers.js';

const MESSAGES = {
  purchaseAmount: `최대 ${NUMBERS.maxPurchaseAmount}원까지 ${NUMBERS.purchaseUnit}원 단위로 구입금액을 입력해주세요.\n`,
  errorHeader: '[ERROR]: ',
  nonThousandUnitMessage: `${NUMBERS.purchaseUnit}원 단위로 입력해주세요.`,
  inputLimitMessage: `${NUMBERS.maxPurchaseAmount}원이 넘지 않게 입력해주세요.`,
  emptyPurchaseAmountInput: '금액을 입력해주세요.',
  purchaseQuantity: '개를 구매했습니다.',
  userLottoNumberInput: `\n${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber}사이의 당첨 번호 ${NUMBERS.lottoNumberLength}개를 입력해 주세요.\n`,
  invalidLength: `로또 번호는 ${NUMBERS.lottoNumberLength}개여야 합니다.`,
  invalidRange: `${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber}사이의 번호를 입력해주세요.`,
  duplicatedNumber: '중복되지 않은 숫자를 입력해주세요',
  askBonusNumber: `\n${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber} 사이의 보너스 번호를 입력해 주세요.\n`,
  winningResult: '\n당첨 통계',
  divisionLine: '---',
  matchThree: '3개 일치 (5,000원) - ',
  matchFour: '4개 일치 (50,000원) - ',
  matchFive: '5개 일치 (1,500,000원) - ',
  matchFiveAndBonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  matchSix: '6개 일치 (2,000,000,000원) - ',
  profitRate: '총 수익률은 ',
};

Object.freeze(MESSAGES);

export default MESSAGES;
