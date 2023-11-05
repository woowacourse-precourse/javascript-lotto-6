import { Console, Random } from "@woowacourse/mission-utils";

class LottoResultChecker {
  convertToArr(inputNum) {
    return inputNum.split(",").map((element) => parseInt(element));
  }

  async inputWinningLottoNum() {
    return await Console.readLineAsync("당첨 번호를 입력해주세요.");
  }
}

export default LottoResultChecker;
