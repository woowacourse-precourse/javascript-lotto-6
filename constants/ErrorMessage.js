class ErrorMessage {
  static INVALID_PRICE = '[ERROR] 올바른 금액을 입력해야 합니다.'; // 1000으로 안나눠질때

  static INVALID_INPUT = '[ERROR] 입력은 숫자여야 합니다.'; // Number가 아닐 시

  static INVALID_RANGE = '[ERROR] 입력이 범위를 벗어났습니다.'; // 1~45 범위 벗어났을 떄

  static DUPLICATE_NUMBER = '[ERROR] 번호는 중복되지 않아야 합니다.'; // 중복 시

  static INVALID_NUM_COUNT = '[ERROR] 번호는 6개여야 합니다.';

  static DUPLICATE_BONUS_WIN = '[ERROR] 당첨 번호와 중복되지 않아야 합니다.';

  static ISNOT_ASCENDING = '[ERROR] 번호는 오름차순으로 정렬되어야 합니다.'
}
export default ErrorMessage;
