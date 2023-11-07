import { MissionUtils } from "@woowacourse/mission-utils";
import { print } from "./view/print";
import { readLineAsync } from "./view/readLineAsync";
import { MESSAGE } from "./constant/MESSAGE";
import { LOTTO_SETTINGS } from "./constant/LOTTO_SETTINGS";
import Lotto from "./model/Lotto";
import Money from "./model/Money";
import LottoAnswer from "./model/LottoAnswer";

const { Random } = MissionUtils;

const printProgressNumber = async (progressNumber) => {
  print(`\n${progressNumber}${MESSAGE.TOTAL_PURCHASE}`);
}

// Lotto class
// ----------- 로또 발행
const totalLotto = []; // 전체 로또 번호 보관
// 발행한 로또 수량 및 번호를 출력한다.
const drawLottoNumber = async () => {
  const lotto = Random.pickUniqueNumbersInRange(LOTTO_SETTINGS.LOTTO_MIN_NUMBER, LOTTO_SETTINGS.LOTTO_MAX_NUMBER, LOTTO_SETTINGS.LOTTO_LENGTH);
  const lottoNumber = new Lotto(lotto).getLottoNumber();
  totalLotto.push(lottoNumber);
};

// 발행한 로또 출력
const printLotto = (totalLotto) => {
  const lotto = totalLotto
  .map((numbers) => `[${numbers.join(", ")}]`)
  .join("\n");

  print(lotto);
}


class App {

  async play() {
    // setting
    let money;
    while(true) {
      try{
        const inputMoney = await readLineAsync(MESSAGE.INPUT_AMOUNT); // 구입금액을 입력해 주세요.
        money = new Money(inputMoney);
        break;
      } catch(error) {
        print(error.message);
      }
    }

    //---------------
    const progressNumber = money.getMoney() / 1000;
    await printProgressNumber(progressNumber); // 게임 횟수 출력
    // 번호 출력
    for (let i=0; i < progressNumber; i++) {
      await drawLottoNumber();
    }
    printLotto(totalLotto); // 발행한 로또 출력

    // 번호 입력 받기
    let answer;
    while(true) {
      try{
        const inputAnswerNumber = await readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
        answer = new LottoAnswer(inputAnswerNumber);
        break;
      } catch(error) {
        print(error.message);
      }
    }

    // bonus 번호 입력
    while(true) {
      try{
        const inputBonusNumber = await readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
        answer.setBonusNumber(inputBonusNumber);
        break;
      } catch(error) {
        print(error.message);
      }
    }

    // 정답과 보너스 번호
    const {answerNumber, bonusNumber} = answer.getFullNumber();

    // 결과 계산
    const allNumber = {
      answerNumber, 
      bonusNumber
    };
    // money.getMoney();

    const result = [0,0,0,0,0]; // 결과  3 4 5 5+1 6

    for(let lotto of totalLotto){
      result.push(this.result(allNumber, lotto));
    }

    let winPrice = 0;
    for(let x of result){
      if (x[2]===3) {
        result[0]++;
        winPrice += 5000;
        return;
      }
      if (x[2]===4) {
        result[1]++;
        winPrice += 50000;
        return;
      }
      if (x[2]===5) {
        if (x[1]===1){
          result[3]++
          winPrice += 30000000;
          return;
        }
        result[2]++;
        winPrice += 1500000;
        return;
      }
      result[4]++;
      winPrice += 2000000000;
    }

    const profit = winPrice / money.getMoney();

    print(MESSAGE.WINNING_STATICS);
    print(`3개 일치 (5,000원) - ${result[0]}개`);
    print(`4개 일치 (50,000원) - ${result[1]}개`);
    print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`);
    print(`6개 일치 (2,000,000,000원)) - ${result[4]}개`);
    print(`${MESSAGE.TOTAL_RATE_OF_RETURN} ${profit.toPrecision(2)}%입니다.`);
  }

  result(answer, lotto) {
    let count=0;
    let bonus=0;
    for (let x of answer.answerNumber) {
      if(lotto.includes(x)){
        count++;
      }
    }
    if(lotto.includes(answer.bonusNumber)){
      bonus=1;
    }
    return [count, bonus, count+bonus];
  }

}

export default App;
