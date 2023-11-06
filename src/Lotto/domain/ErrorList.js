class ErrorList {
  static buyLotto(userMoney) {
    if (userMoney % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해 주세요');
    }
  }
}

export default ErrorList;
