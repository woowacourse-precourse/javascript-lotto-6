const prefix = '[ERROR]'

export const ERROR_MESSAGES = Object.freeze({
  // 구입 금액 예외
  invalid_purchase_amount_format: `${prefix} 구입 금액은 숫자여야 합니다.`,
  invalid_purchase_amount_integer: `${prefix} 구입 금액은 정수여야 합니다.`,
  negative_purchase_amount: `${prefix} 구입 금액은 음수일 수 없습니다.`,
  minimum_purchase_amount: `${prefix} 최소 한 장 이상 구매하여야 합니다.`,
  invalid_purchase_amount_unit: `${prefix} 구입 금액은 1,000원 단위로 입력되어야 합니다.`,

  // 당첨 번호 예외
  invalid_winning_numbers_length: `${prefix} 당첨 번호는 6개의 숫자를 입력해야 합니다.`,
  invalid_winning_numbers_format: `${prefix} 당첨 번호는 숫자여야 합니다.`,
  invalid_winning_numbers_integer: `${prefix} 당첨 번호는 정수여야 합니다.`,
  invalid_winning_numbers_range: `${prefix} 당첨 번호는 1부터 45 사이의 숫자여야 합니다.`,
  duplicate_winning_numbers: `${prefix} 당첨 번호에 중복된 숫자가 있습니다.`,

  // 보너스 번호 예외
  invalid_bonus_number_format: `${prefix} 보너스 번호는 숫자여야 합니다.`,
  invalid_bonus_number_integer: `${prefix} 보너스 번호는 정수여야 합니다.`,
  invalid_bonus_number_range: `${prefix} 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`,
  bonus_number_duplicate_winning: `${prefix} 당첨 번호와 보너스 번호는 같을 수 없습니다.`
});
