import formatAmount from '../utils/formatAmount.js';
import { NUMBERS } from './constants.js';

export const MESSAGES = {
  inputAmount: `${formatAmount(
    NUMBERS.maxAmount,
  )}원 이하의 구입금액을 ${formatAmount(
    NUMBERS.purchaseUnit,
  )}원 단위로 입력해 주세요.`,
  printQuentity: quentity => `\n${quentity}개를 구매했습니다.`,
  askLottoNumber: `\n당첨 번호 ${NUMBERS.lottoLength}개를 쉼표(,)를 기준으로 ${NUMBERS.minNumber}과 ${NUMBERS.maxNumber} 사이의 숫자를 입력해 주세요.`,
  askBonusNumber: `\n${NUMBERS.minNumber}과 ${NUMBERS.maxNumber}사이의 보너스 번호를 1개 입력해 주세요.`,
};

export const ERROR = {
  errorHeader: '[ERROR]',
  emptyAmountInput: `${formatAmount(
    NUMBERS.purchaseUnit,
  )}원 단위의 숫자를 입력해주세요.`,
  notNumber: '숫자를 입력해주세요',
  invalidUnit: `${formatAmount(NUMBERS.purchaseUnit)}원 단위로 입력해주세요.`,
  overMaxAmount: `${formatAmount(NUMBERS.maxAmount)}원 이하로 입력해주세요.`,
  invalidLength: `로또 번호는 ${NUMBERS.lottoLength}개여야 합니다.`,
  duplicatedNumber: '중복되지 않은 숫자를 입력해주세요.',
  invalidRange: `${NUMBERS.minNumber}과 ${NUMBERS.maxNumber}사이의 숫자를 입력해주세요.`,
};

export const RESULT = {
  printWinningNumbers: winningNumber => `[${winningNumber.join(', ')}]`,
  printLottoResult: (three, four, five, bonus, six) => `3개 일치 (5,000원) - ${three}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개\n6개 일치 (2,000,000,000원) - ${six}개`,
};
