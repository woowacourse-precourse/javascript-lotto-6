import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {}
  constructor() {
    this.price = 0;
    this.lotto = [];
    this.winning = [];
    this.bonus = 0;
    this.result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }
  //로또 구입 금액 입력 기능 + 유효성 검사 기능
  async userBuyLotto() {
    const userPrice = await MissionUtils.Console.readLineAsync("구입 금액을 입력해주세요.");
    if(typeof(userPrice) !== Number){
      throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    }
    if(+userPrice % 1000 !== 0){
      throw new Error("[ERROR] 구입 금액 단위는 1,000원 입니다.");
    }
    if(userPrice === ''){
      throw new Error("[ERROR] 값이 입력되지 않았습니다.");
    }
    this.price = +userPrice / 1000;
  }
  //구입 금액에 따른 로또 개수 출력 기능 + 금액에 따른 무작위 숫자 출력 기능
  async createLotto() {
    MissionUtils.Console.print(`${this.price}개를 구매했습니다.`);
    for(let i = 0; i < this.price; i++){
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => {return a - b});
      MissionUtils.Console.print(randomNumber);
      this.lotto.push(randomNumber);
    }
  }
  //당첨 번호 6개 입력 기능
  async winningNumber() {
    const userInput = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const winningNum = userInput.toString().split('').sort().map(Number);
    const lotto = new Lotto(winningNum);
    this.winning = winningNum;
  }
  //보너스 번호를 입력 기능 + 유효성 검사 기능
  async bonusNumber() {
    const userBonus = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
    const bonusNumber = +userBonus;
    if(this.winning.includes(bonusNumber)){
      throw new Error("[ERROR] 당첨 번호와 중복되지 않아야 합니다.");
    }
    if(bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if(bonusNumber.toString().length > 1){
      throw new Error("[ERROR] 보너스 번호는 1개입니다.");
    }
    this.bonus = bonusNumber;
  }
  //당첨 결과 계산 기능
  async calculateResult() {
    this.lotto.forEach((e) => {
      let winNum = 0;
      let bonusNum = 0;

      e.forEach((ball) => {
        if (this.winning.includes(ball)) {
          winNum++;
        }
        if (this.bonus === ball) {
          bonusNum++;
        }
      });

      if (winNum === 6 && bonusNum === 0) {
        this.result[1]++;
      }
      if (winNum === 5 && bonusNum === 1) {
        this.result[2]++;
      }
      if (winNum === 5) {
        this.result[3]++;
      }
      if (winNum === 4) {
        this.result[4]++;
      }
      if (winNum === 3) {
        this.result[5]++;
      }
    });
  };
  //당첨 결과 및 수익률 출력 기능
  async printResult() {
    const calResult = this.winningRate();
    MissionUtils.Console.print("\n 당첨 통계 \n --- ");
    MissionUtils.Console.print("3개 일치 (5,000원) - " + this.result[5] + "개");
    MissionUtils.Console.print("4개 일치 (50,000원) - " + this.result[4] + "개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - " + this.result[3] + "개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.result[2] + "개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - " + this.result[1] + "개");
    MissionUtils.Console.print(`총 수익률은 ${calResult}%입니다.`);
  }
  //수익률 계산 기능
  winningRate() {
    const total = 
      this.result[1] * 2000000000 + 
      this.result[2] * 30000000 + 
      this.result[3] * 1500000 + 
      this.result[4] * 50000 + 
      this.result[5] * 5000;
    const totalLotto = this.price * 1000;
    return +((total / totalLotto) * 100).toFixed(1);
  }

  async play() {
    await this.userBuyLotto();
    await this.createLotto();
    await this.winningNumber();
    await this.bonusNumber();
    await this.calculateResult();
    await this.printResult();
  }
}

export default App;
