export const ERROR_MESSAGES = Object.freeze({
  prefix: '[ERROR]',

  // 구입 금액 예외
  invalid_purchase_amount_format: `${this.prefix} 구입 금액은 숫자여야 합니다.`,
  invalid_purchase_amount_integer: `${this.prefix} 당첨 번호는 정수여야 합니다.`,
  negative_purchase_amount: `${this.prefix} 구입 금액은 음수일 수 없습니다.`,
  minimum_purchase_amount: `${this.prefix} 최소 한 장 이상 구매하여야 합니다.`,
  invalid_purchase_amount_unit: `${this.prefix} 구입 금액은 1,000원 단위로 입력되어야 합니다.`,

  // 당첨 번호 예외
  invalid_winning_numbers_format: `${this.prefix} 당첨 번호는 숫자여야 합니다.`,
  invalid_winning_numbers_integer: `${this.prefix} 당첨 번호는 정수여야 합니다.`,
  invalid_winning_numbers_range: `${this.prefix} 당첨 번호는 1부터 45 사이의 숫자여야 합니다.`,
  invalid_winning_numbers_length: `${this.prefix} 당첨 번호는 6개의 숫자를 입력해야 합니다.`,
  duplicate_winning_numbers: `${this.prefix} 당첨 번호에 중복된 숫자가 있습니다.`,

  // 보너스 번호 예외
  invalid_bonus_number_format: `${this.prefix} 보너스 번호는 숫자여야 합니다.`,
  invalid_bonus_number_integer: `${this.prefix} 보너스 번호는 정수여야 합니다.`,
  invalid_bonus_number_range: `${this.prefix} 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`,
  bonus_number_duplicate_winning: `${this.prefix} 당첨 번호와 보너스 번호는 같을 수 없습니다.`
});
