class LottoData {
  userMoney;

  userNumber;

  winNumber;

  bonusNumber;

  constructor(userMoney = 0, userNumber = [], winNumber = [], bonusNumber = 0) {
    this.userMoney = userMoney;
    this.userNumber = userNumber;
    this.winNumber = winNumber;
    this.bonusNumber = bonusNumber;
  }

  getUserMoney(userMoney) {
    this.userMoney = userMoney;
  }

  getWinNumber(winNumber) {
    this.winNumber = winNumber.sort((a, b) => a - b);
  }

  getBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }
}

export default LottoData;
