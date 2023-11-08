import converter from "../utils/Converter";

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구매금액을 입력해 주세요.',
});

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  DEFAULT : `${ERROR_PREFIX} 오류가 발생했습니다. 잠시 후 다시 시도해주세요.`,
  NAN : `${ERROR_PREFIX} 숫자를 입력해야 합니다.`,
  NOT_POSITIVE_INTEGER: `${ERROR_PREFIX} 양의 정수를 입력해야 합니다.`,
  NOT_SEPERATED_BY(value) {
    return `${ERROR_PREFIX} ${converter.numberToDisplayFormatString(value)}원 단위로 입력해야 합니다.`;
  },
  LESS_THAN_MIN(minValue) {
    return `${ERROR_PREFIX} ${minValue}보다 큰 숫자를 입력해야 합니다.`;
  },
  BIGGER_THAN_MAX(maxValue) {
    return `${ERROR_PREFIX} ${maxValue}보다 작은 숫자를 입력해야 합니다.`;
  },
});
