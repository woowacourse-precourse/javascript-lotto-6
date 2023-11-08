class ErrorList {
  static buyLotto(userMoney) {
    if (userMoney % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해 주세요');
    }
  }

  static winNumber(winNumber) {
    if (winNumber.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }
}

export default ErrorList;
