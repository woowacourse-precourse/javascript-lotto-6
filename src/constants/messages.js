import NUMBERS from './numbers.js';

const MESSAGES = Object.freeze({
  purchaseAmount: `최대 ${NUMBERS.maxPurchaseAmount}원까지 ${NUMBERS.purchaseUnit}원 단위로 구입금액을 입력해주세요.\n`,
  emptyPurchaseAmountInput: '금액을 입력해주세요.',
  purchaseQuantity: '개를 구매했습니다.',
  userLottoNumberInput: `\n${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber}사이의 당첨 번호 ${NUMBERS.lottoNumberLength}개를 입력해 주세요.\n`,
  askBonusNumber: `\n${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber} 사이의 보너스 번호를 입력해 주세요.\n`,
  bonus: 'bonus',
  winningResult: '\n당첨 통계',
  divisionLine: '---',
  matchResult: [
    '3개 일치 (5,000원) - ',
    '4개 일치 (50,000원) - ',
    '5개 일치 (1,500,000원) - ',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6개 일치 (2,000,000,000원) - ',
  ],
  matchQuantity: number => `${number}개`,
  profitRate: profitRate => `총 수익률은 ${profitRate}%입니다.`,
});

export default MESSAGES;
