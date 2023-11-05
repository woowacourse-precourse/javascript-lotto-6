import NUMBERS from './numbers.js';

const MESSAGES = {
  purchaseAmount: `최대 ${NUMBERS.maxPerchaseAmount}원까지 ${NUMBERS.perchaseUnit}원 단위로 구입금액을 입력해주세요.\n`,
  errorHeader: '[ERROR]: ',
  nonThousandUnitMessage: ` ${NUMBERS.perchaseUnit}원 단위로 입력해주세요.`,
  inputLimitMessage: `${NUMBERS.maxPerchaseAmount}원이 넘지 않게 입력해주세요.`,
  emptyPurchaseAmountInput: '금액을 입력해주세요.',
  purchaseQuantity: '개를 구매했습니다.',
  userLottoNumberInput: `${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber}사이의 당첨 번호 ${NUMBERS.lottoNumberLength}개를 입력해 주세요.\n`,
  invalidLength: `로또 번호는 ${NUMBERS.lottoNumberLength}개여야 합니다.`,
  invalidRange: `${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber}사이의 번호를 입력해주세요.`,
  duplicatedNumber: '중복되지 않은 숫자를 입력해주세요',
  askBonusNumber: `${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber} 사이의 보너스 번호를 입력해 주세요.\n`,
};

Object.freeze(MESSAGES);

export default MESSAGES;
