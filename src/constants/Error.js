import { COMMA, LOTTO_NUMBER_RANGE, LOTTO_NUMBER_SIZE, LOTTO_PRICE } from './GameSetting.js';

const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_ERROR = Object.freeze({
  isNotNumber: `${ERROR_PREFIX} 숫자를 입력해 주세요.`,
  isNotDividedByThousand: `${ERROR_PREFIX} ${LOTTO_PRICE}원 단위로 입력해 주세요.`,
  lottoNumberSize: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_NUMBER_SIZE}개여야 합니다.`,
  lottoDuplicateNumber: `${ERROR_PREFIX} 로또 번호는 중복될 수 없습니다.`,
  lottoNotInput: `${ERROR_PREFIX} 번호와 쉼표(${COMMA})를 이어서 입력해주세요.`,
  lottoNumberRange: `${ERROR_PREFIX} 로또 번호는 ${LOTTO_NUMBER_RANGE.start}~${LOTTO_NUMBER_RANGE.end} 사이여야 합니다.`,
  bounsNumber: `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
  bounsOnlyNumber: `${ERROR_PREFIX} 보너스 번호는 ${LOTTO_NUMBER_RANGE.start}~${LOTTO_NUMBER_RANGE.end} 중 숫자 하나만 입력해 주세요.`,
});
