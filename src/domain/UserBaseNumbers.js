class UserBaseNumbers {
  constructor() {
    this.baseNumbers = [];
  }

  getBaseNumbers() {
    return this.baseNumbers;
  }

  setBaseNumbers(input) {
    const lottoNums = input.split(",").map((numStr) => parseInt(numStr.trim(), 10));
    this.baseNumbers = lottoNums;
  }
}

export default UserBaseNumbers;
