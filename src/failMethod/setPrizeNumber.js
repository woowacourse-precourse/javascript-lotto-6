import { setStringData, setNumData } from "./setData.js";

class PrizeNumber {
  prizeNumber;
  prizeNumberArr;
  bonusNumber;

  validate(prizeNumber) {}
  constructor(prizeNumber) {
    this.prizeNumber = prizeNumber;
    this.prizeNumberArr = this.prizeNumber.split(",");
  }

  async setBonusNumber() {
    this.bonusNumber = setNumData("보너스 번호를 입력해 주세요");
  }
}
const setPrizeNumber = async () => {
  const prizeNumber = new PrizeNumber(
    setStringData("당첨 번호를 입력해 주세요.")
  );
  prizeNumber.setBonusNumber();
  return prizeNumber;
};
