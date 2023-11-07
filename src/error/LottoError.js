class LottoError extends Error {
  static ERROR_MSG = {
    length: '[ERROR] 로또 번호는 6개여야 합니다.\n',
    duplicate: '[ERROR] 로또 번호를 중복으로 입력할 수 없습니다.\n',
    noNumber:
      '[ERROR] 로또 번호 입력이 잘못되었습니다. 숫자를 정확히 입력해주세요.\n',
    range:
      '[ERROR] 로또 번호 입력이 잘못되었습니다. 1과 45 사이의 숫자를 입력해주세요.\n',
    bonus: '[ERROR] 보너스 번호 입력이 잘못되었습니다.',
    notMoney: '[ERROR] 구입 금액이 잘못되었습니다.\n',
    moneyMax:
      '[ERROR] 구입 금액이 잘못되었습니다. 구매 최대 금액은 100,000원입니다.\n',
    moneyAmount:
      '[ERROR] 구입 금액이 잘못되었습니다. 1,000원 단위로 입력해주세요.\n',
  };

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export default LottoError;
