const SIX_NUMBERS_ERROR_MESSAGE = '6개여야 합니다.';
const DUPLICATE_ERROR_MESSAGE = '중복되지 않아야 합니다';
const INTEGER_ERROR_MESSAGE = '정수여야 합니다.';
const IN_RANGE_ERROR_MESSAGE = '1이상 45이하여야 합니다.';
const ASCENDING_ORDER_ERROR_MESSAGE = '오름차순이여야 합니다.';

const CASE_LOTTO = '로또 번호는';

const lottoErrorMessage = {
  sixNumber: `${CASE_LOTTO} ${SIX_NUMBERS_ERROR_MESSAGE}`,
  duplicate: `${CASE_LOTTO} ${DUPLICATE_ERROR_MESSAGE}`,
  integer: `${CASE_LOTTO} ${INTEGER_ERROR_MESSAGE}`,
  inRange: `${CASE_LOTTO} ${IN_RANGE_ERROR_MESSAGE}`,
  ascendingOrder: `${CASE_LOTTO} ${ASCENDING_ORDER_ERROR_MESSAGE}`,
};

Object.freeze(lottoErrorMessage);

export { lottoErrorMessage };
