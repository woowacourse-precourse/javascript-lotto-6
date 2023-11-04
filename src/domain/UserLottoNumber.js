class UserLottoNumber {
  constructor() {
    this.baseNumbers = [];
    this.bonusNumber = null;
  }

  async userBaseNumber() {
    const input = await Console.readLineAsync();
    this.baseNumbers = input.split(",").map((number) => parseInt(number.trim(), 10));
    return this.baseNumbers;
  }

  async userBonusNumber() {
    const input = await Console.readLineAsync();
    this.bonusNumber = parseInt(input.trim(), 10);
    return this.bonusNumber;
  }

  ascendingOrder() {
    this.baseNumbers.sort((a, b) => a - b);
  }
}

export default UserLottoNumber;
