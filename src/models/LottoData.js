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
    console.log(userMoney);
    this.userMoney = userMoney;
  }

  getWinNumber(winNumber) {
    console.log('################################');
    console.log(winNumber);
    this.winNumber = winNumber.sort((a, b) => a - b);
  }

  getBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }
}

export default LottoData;
