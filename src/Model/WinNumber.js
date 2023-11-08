import CODE from '../Constant/CODE.js';

export default class WinNumber {
  #commonWinNum;

  #bonusWinNum;

  setCommonWinNum(input) {
    this.#commonWinNum = input.split(CODE.splitCode).map((num) => Number(num));
  }

  setBonusWinNum(input) {
    this.#bonusWinNum = Number(input);
  }

  getCommonWinNum() {
    return this.#commonWinNum;
  }

  getBonusWinNum() {
    return this.#bonusWinNum;
  }
}
