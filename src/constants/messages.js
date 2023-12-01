import formatAmount from '../utils/formatAmount.js';
import { NUMBERS } from './constants.js';

export const MESSAGES = {
  inputAmount: `${formatAmount(
    NUMBERS.maxAmount,
  )}원 이하의 구입금액을 ${formatAmount(
    NUMBERS.purchaseUnit,
  )}원 단위로 입력해 주세요.`,
};
export const ERROR = {
  errorHeader: '[ERROR]',
  emptyAmountInput: `${formatAmount(
    NUMBERS.purchaseUnit,
  )}원 단위의 숫자를 입력해주세요.`,
  notNumber: '숫자를 입력해주세요',
  invalidUnit: `${formatAmount(NUMBERS.purchaseUnit)}원 단위로 입력해주세요.`,
  overMaxAmount: `${formatAmount(NUMBERS.maxAmount)}원 이하로 입력해주세요.`
};
