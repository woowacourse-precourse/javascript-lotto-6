import Lotto from "./Lotto";
import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    const lottoCount = await this.getMoneyReturnCount();
    console.log("lottoCount", lottoCount);
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    const lotto = this.generateAndPrintLotto();
  }

  async getMoneyReturnCount() {
    const money = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if(money%1000 !== 0) throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    return money/1000;
  }

  generateAndPrintLotto(count) {
    const lottoArray = [];
    for(let i=0; i<count; i++) {
      const oneLotto = this.generateLotto();
      MissionUtils.Console.print(oneLotto);
      lottoArray.push(oneLotto);
    }
    return lottoArray;
  }

  generateLotto() {
    const array = [];
    for(let i=0; i<6; i++) {
      const num = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      array.push(num);
    }
    array.sort((a,b)=>a-b);
    return array
  }
  
}

export default App;
