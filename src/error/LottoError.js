class LottoError extends Error {
  static ERROR_MSG = {
    length: '[ERROR] 로또 번호는 6개여야 합니다.',
    duplicate: '[ERROR] 로또 번호를 중복으로 입력할 수 없습니다.',
    noNumber:
      '[ERROR] 로또 번호 입력이 잘못되었습니다. 숫자를 정확히 입력해주세요.',
    range:
      '[ERROR] 로또 번호 입력이 잘못되었습니다. 1과 45 사이의 숫자를 입력해주세요.',
    bonus: '[ERROR] 보너스 번호 입력이 잘못되었습니다.',
  };

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export default LottoError;
