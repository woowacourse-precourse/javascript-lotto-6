import converter from '../utils/converter';
import { LOTTO } from './api';

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구매금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  DEFAULT : `${ERROR_PREFIX} 오류가 발생했습니다. 잠시 후 다시 시도해주세요.`,
  NAN : `${ERROR_PREFIX} 숫자를 입력해야 합니다.`,
  NOT_POSITIVE_INTEGER: `${ERROR_PREFIX} 양의 정수를 입력해야 합니다.`,
  ONLY_NUMBER_OR_COMMA: `${ERROR_PREFIX} 숫자 또는 쉼표만 입력 가능합니다.`,
  ONLY_NUMBER: `${ERROR_PREFIX} 숫자만 입력 가능합니다.`,
  CHOICE_NUMBER_WRONG_COUNT: `${ERROR_PREFIX} ${LOTTO.CHOICE_NUMBERS_PER_TICKET}개의 숫자를 입력해야 합니다.`,
  DUPLICATE_NUMBER: `${ERROR_PREFIX} 번호는 중복되지 않게 입력해야 합니다.`,
  OUT_OF_RANGE(min, max) {
    return `${ERROR_PREFIX} ${min} ~ ${max}사이의 숫자를 입력해야 합니다.`;
  },
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

export const OUTPUT_MESSAGE = Object.freeze({
  LOTTOS_COUNT(count) {
    return `${count}개를 구매했습니다.`;
  },
  LOTTO_NUMBERS(lottos) {
    const lottosOutput = (lottoNumbers) => {
      return `[${lottoNumbers.join(', ')}]`;
    }

    return lottosOutput(lottos);
  },
  TOTAL_RESULT(result, purchaseAmount) {
    const rate = Math.round(result.get(LOTTO.TOTAL_PRICE_KEY) / purchaseAmount * 1000) / 10;
    return `당첨 통계
    ---
    3개 일치 (${converter.numberToDisplayFormatString(LOTTO.MATCHES_3_PRICE)}원) - ${result.get(LOTTO.MATCHES_3_KEY)}개
    4개 일치 (${converter.numberToDisplayFormatString(LOTTO.MATCHES_4_PRICE)}원) - ${result.get(LOTTO.MATCHES_4_KEY)}개
    5개 일치 (${converter.numberToDisplayFormatString(LOTTO.MATCHES_5_PRICE)}원) - ${result.get(LOTTO.MATCHES_5_KEY)}개
    5개 일치, 보너스 볼 일치 (${converter.numberToDisplayFormatString(LOTTO.MATCHES_5_BONUS_PRICE)}원) - ${result.get(LOTTO.MATCHES_5_BONUS_KEY)}개
    6개 일치 (${converter.numberToDisplayFormatString(LOTTO.MATCHES_6_PRICE)}원) - ${result.get(LOTTO.MATCHES_6_KEY)}개
    총 수익률은 ${rate}%입니다.`;
  },
});
