import { Console, Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";


class App {

  #price = [
    {
      price: 5000,
      sentence: "3개 일치 (5,000원)"
    },
    {
      price: 50000,
      sentence: "4개 일치 (50,000원)"
    },
    {
      price: 1500000,
      sentence: "5개 일치 (1,500,000원)"
    },
    {
      price: 30000000,
      sentence: "5개 일치, 보너스 볼 일치 (30,000,000원)"
    },
    {
      price: 2000000000,
      sentence: "6개 일치 (2,000,000,000원)"
    }
  ];

  constructor() {
    this.myLotto = [];
    this.bonus;
    this.revenue = 0;
  }

  validateMoney(money) {
    if (!(Number(money))) throw new Error("[ERROR] 구입 금액은 쉼표를 제외한 1,000원 단위의 수로만 입력할 수 있습니다.")
    if (money % 1000) throw new Error("[ERROR] 구입 금액은 1,000원 단위의 수로만 입력할 수 있습니다.");
  }
  validateBonus(nums) {
    if (this.myLotto.includes(nums)) {
      throw new Error(
        "[ERROR] 보너스 번호는 이전 번호와 중복될 수 없습니다."
      ) 
    }
    if (!Number(nums) || nums > 45 || nums < 0 || nums.length>2) {
      throw new Error(
        "[ERROR] 보너스 번호는 1에서 45사이의 자연수여야 합니다."
      )
    }
  }
  lottoNum (cnt) {
    for (let i =0; i < cnt; i++) {
      const myNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a-b);
      this.myLotto.push(myNumbers);
      Console.print(myNumbers);
    }
  }

  setClassification (lottonum, mynum, bonus, lottoCount,arr) {
    for (let i=0; i<lottoCount; i++) {
      const same = lottonum[i].filter((num)=> mynum.includes(num)).length
      if (same === 6) arr[4] += 1
      if (same === 5) lottonum[i].includes(bonus) ? arr[3] += 1 : arr[2] += 1
      if (same === 4) arr[1] += 1
      if (same === 3) arr[0] += 1
    }
  }

  result(arr, count) {
    for(let i = 0; i < count; i++) {
      if (arr[i]) this.revenue += this.#price[i]['price']
      Console.print(`${this.#price[i]['sentence']} - ${arr[i]}개`)
    }
  }
   
  async play() {
    const money = await Console.readLineAsync('구입금액을 입력해 주세요\n');
    this.validateMoney(money);
    Console.print('');
    Console.print(`${parseInt(money/1000)}개를 구매했습니다.`);
    this.lottoNum(parseInt(money/1000));
    Console.print('');
    const winning = await Console.readLineAsync('당첨 번호를 입력해주세요\n');
    Console.print('');
    const winnerNum = winning.split(',').map(el => parseInt(el)).sort((a, b) =>a-b);
    const lotto = new Lotto(winnerNum);

    const bonus = await Console.readLineAsync('보너스 번호를 입력해주세요\n');
    this.validateBonus(bonus);
    this.bonus = parseInt(bonus);
    const classification = [0,0,0,0,0];
    Console.print('');
    Console.print("당첨 통계");
    Console.print("---");
    this.setClassification(this.myLotto, winnerNum, this.bonus, parseInt(money/1000),classification);
    
    this.result(classification, classification.length);

    const rates = this.revenue / parseInt(money);

    Console.print(`총 수익률은 ${(rates*1000/10).toFixed(1)}%입니다.`);
  }
}

export default App;