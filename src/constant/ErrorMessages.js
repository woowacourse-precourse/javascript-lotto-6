import { LOTTO_GAME_OPTIONS as OPT } from "./Options.js";

const prefix = '[ERROR]'

const PURCHASE_AMOUNT_EXCEPTION = Object.freeze({
  invalid_format_exception: `${prefix} 구입 금액은 숫자여야 합니다.`,
  non_integer_exception: `${prefix} 구입 금액은 정수여야 합니다.`,
  negative_value_exception: `${prefix} 구입 금액은 음수일 수 없습니다.`,
  zero_value_exception: `${prefix} 최소 한 장 이상 구매하여야 합니다.`,
  invalid_unit_exception: `${prefix} 구입 금액은 ${OPT.price}원 단위로 입력되어야 합니다.`,
});

const WINNING_NUMBERS_EXCEPTION = Object.freeze({
  invalid_length_exception: `${prefix} 당첨 번호는 ${OPT.lotto_number_count}개의 숫자를 입력해야 합니다.`,
  invalid_format_exception: `${prefix} 당첨 번호는 숫자여야 합니다.`,
  non_integer_exception: `${prefix} 당첨 번호는 정수여야 합니다.`,
  invalid_range_exception: `${prefix} 당첨 번호는 ${OPT.min_number}부터 ${OPT.max_number} 사이의 숫자여야 합니다.`,
  duplication_exception: `${prefix} 당첨 번호에 중복된 숫자가 있습니다.`,
});

const BONUS_NUMBER_EXCEPTION = Object.freeze({
  invalid_format_exception: `${prefix} 보너스 번호는 숫자여야 합니다.`,
  non_integer_exception: `${prefix} 보너스 번호는 정수여야 합니다.`,
  invalid_range_exception: `${prefix} 보너스 번호는 ${OPT.min_number}부터 ${OPT.max_number} 사이의 숫자여야 합니다.`,
  duplication_exception: `${prefix} 당첨 번호와 보너스 번호는 같을 수 없습니다.`,
});

const LOTTO_NUMBER_EXCEPTION = Object.freeze({
  invalid_length_exception: `${prefix} 로또 번호는 ${OPT.lotto_number_count}개의 숫자를 입력해야 합니다.`,
  invalid_format_exception: `${prefix} 로또 번호는 숫자여야 합니다.`,
  non_integer_exception: `${prefix} 로또 번호는 정수여야 합니다.`,
  invalid_range_exception: `${prefix} 로또 번호는 ${OPT.min_number}부터 ${OPT.max_number} 사이의 숫자여야 합니다.`,
  duplication_exception: `${prefix} 로또 번호에 중복된 숫자가 있습니다.`,
});

export {
  PURCHASE_AMOUNT_EXCEPTION,
  WINNING_NUMBERS_EXCEPTION,
  BONUS_NUMBER_EXCEPTION,
  LOTTO_NUMBER_EXCEPTION
};
