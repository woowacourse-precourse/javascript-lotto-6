import NUMBERS from './numbers.js';

const ERRORMESSAGES = Object.freeze({
  errorHeader: '[ERROR]: ',
  nonThousandUnitMessage: `${NUMBERS.purchaseUnit}원 단위로 입력해주세요.`,
  inputLimitMessage: `${NUMBERS.maxPurchaseAmount}원이 넘지 않게 입력해주세요.`,
  invalidLength: `로또 번호는 ${NUMBERS.lottoNumberLength}개여야 합니다.`,
  invalidRange: `${NUMBERS.minLottoNumber}~${NUMBERS.maxLottoNumber}사이의 번호를 입력해주세요.`,
  duplicatedNumber: '중복되지 않은 숫자를 입력해주세요.',
  inputOneNumber: '한자리의 보너스 번호를 입력해주세요.',
  inputNumber: '숫자를 입력해주세요.',
});

export default ERRORMESSAGES;
