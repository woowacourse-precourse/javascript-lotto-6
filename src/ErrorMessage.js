export class ErrorMessage {
  static invalidLottoAmount() {
    return '[ERRPR] 로또 구매 금액은 1,000원 단위로 입력해주세요';
  }
  static invalidLottoWinningNumberCount() {
    return '[ERROR] 로또 당첨 번호는 6개여야 합니다.';
  }
  static invalidLottoWinningNumberRange() {
    return '[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.';
  }
  static invalidDuplicateWinningNumbers() {
    return '[ERROR] 로또 번호는 중복이 없어야 합니다.';
  }
  static invalidLottoNumberSeparator() {
    return '[ERROR] 로또 번호는 쉼표(,)로 구분해야 합니다.';
  }
  static invalidDuplicateBonusNumber() {
    return '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.';
  }
}
