import LOTTO_SYSTEM from './LottoSystem.js';
import PURCHASE_CONDITIONS from './PurchaseConditions.js';

const ERROR_MESSAGES = Object.freeze({
	value_is_not_digit: '[ERROR] 숫자만 입력 가능합니다.',
	value_is_not_positive: '[ERROR] 값이 1보다 작습니다.',
	value_is_indivisible: `[ERROR] 값이 ${LOTTO_SYSTEM.lotto_price}원 단위로 입력되어야합니다.`,
	value_is_over_maximum_price: `[ERROR] 금액이 ${PURCHASE_CONDITIONS.maximum_lotto_purchase_price}원을 넘으면 안됩니다.`,
	value_is_not_in_range: `[ERROR] 값이 ${LOTTO_SYSTEM.minimum_number} ~ ${LOTTO_SYSTEM.maximum_number} 사이의 값이어야 합니다.`,
	lotto_number_count_not_valid: `[ERROR] 갯수가 ${LOTTO_SYSTEM.lotto_numbers}와 다릅니다.`,
	duplicate_value: '[ERROR] 중복된 값이 있습니다.',
	invalid_bonus_number: '[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.',
});

export default ERROR_MESSAGES;
