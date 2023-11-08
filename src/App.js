import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #prize = {
    "3개": 5000,
    "4개": 50000,
    "5개": 1500000,
    "5개-보너스": 30000000,
    "6개": 2000000000,
  };
  #generatedNumbers = [];
  #winningNums;
  #bonusNum;

  async play() {
    try {
      const QUESTION = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );

      if (QUESTION % 1000 !== 0) {
        throw new Error("[ERROR] 구입금액은 천원 단위로 입력해주세요!");
      }

      let ticketNum = QUESTION / 1000;

      MissionUtils.Console.print(`\n${ticketNum}개를 구매했습니다.`);

      while (ticketNum > 0) {
        const LOTTONUMS = this.generateNumber();
        ticketNum === 1
          ? MissionUtils.Console.print(`[${LOTTONUMS}]\n`)
          : MissionUtils.Console.print(`[${LOTTONUMS}]`);
        ticketNum -= 1;
      }

      this.#winningNums = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요.\n"
      );
      this.#bonusNum = await MissionUtils.Console.readLineAsync(
        "\n보너스 번호를 입력해 주세요.\n"
      );

      this.printResult(QUESTION);
    } catch (err) {
      MissionUtils.Console.print(`${err}`);
    }
  }
  /**로또번호 생성 */
  generateNumber() {
    let rand = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
    rand = rand.toString().replaceAll(",", ", ").split(",");
    this.#generatedNumbers.push(rand);
    return rand;
  }

  /**한줄의 로또 번호에서 당첨 번호를 몇개 가지고 있는지 세는 기능*/
  checkNumbersHasWinNum(winningNums, lottoNumbers) {
    let count = 0;
    lottoNumbers = lottoNumbers.map((el) => el.trim());
    for (let num of winningNums) {
      lottoNumbers.includes(num) && (count += 1);
    }
    if (count === 5 && lottoNumbers.includes(this.#bonusNum)) count = "_5";
    return count;
  }

  /**총 발행한 로또에서 번호가 3개 이상 일치하는 로또가 몇개인지 세는 기능*/
  setCounter() {
    let counter = {
      "3개": 0,
      "4개": 0,
      "5개": 0,
      "5개-보너스": 0,
      "6개": 0,
    };
    let winningNums = this.#winningNums.split(",");
    for (let lottoNumbers of this.#generatedNumbers) {
      let res = this.checkNumbersHasWinNum(winningNums, lottoNumbers);
      Number(res) > 2 && counter[`${res}개`]++;
      res === "_5" && counter["5개-보너스"]++;
    }
    return counter;
  }

  /**총 수익률을 계산하는 기능*/
  putOutYeild(QUESTION) {
    let counter = this.setCounter();
    let overAll = 0;
    for (let key in counter) {
      overAll += this.#prize[key] * counter[key];
    }
    const YEILD = ((overAll / Number(QUESTION)) * 100).toFixed(1);
    return [YEILD, counter];
  }

  /** 당첨 결과를 프린트하는 기능*/
  printResult(QUESTION) {
    const RES = this.putOutYeild(QUESTION);
    let yeild = RES[0];
    let counter = RES[1];
    MissionUtils.Console.print("\n당첨 통계\n ---");
    for (let key in counter) {
      let text = `${key} 일치 (${this.#prize[key].toLocaleString(
        "ko-KR"
      )}원) - ${counter[key]}개`;
      if (key.includes("보너스")) {
        text = `5개 일치, 보너스 볼 일치 (${this.#prize[key].toLocaleString(
          "ko-KR"
        )}원) - ${counter[key]}개`;
      }
      MissionUtils.Console.print(text);
    }
    MissionUtils.Console.print(`총 수익률은 ${yeild}%입니다.`);
  }
}
export default App;
