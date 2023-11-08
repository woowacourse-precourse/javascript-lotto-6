import { Random } from '@woowacourse/mission-utils';
import Output from './Output.js';
import UserInput from './UserInput.js';
import Validate from './Validate.js';
import Lotto from './Lotto.js';

class App {
  Output = new Output();

  Input = new UserInput();

  Validate = new Validate();

  amonut;

  lottoList = [];

  winningNumbers = []
  
  bonusNumber;

  winningRanking = {
    3: 0,
    4: 0,
    5: 0,
    bonus: 0,
    6: 0,
  };
  
  async play() {
    return this.getLottoCount()
  }

  async getLottoCount () {
    this.Output.printPurchaseAmonut()
    this.money = await this.Input.amountInput()
    this.Validate.DivisibleBy1000(this.money)
    this.amonut = this.money / 1000
    this.generateLotto()
  }

  async generateLotto() {
    while(this.lottoList.length !== this.amonut){
      const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomArray.sort((a,b) => a-b)
      this.lottoList.push(randomArray)
    }
    await this.Output.printLottoArray(this.amonut, this.lottoList)
    await this.winningNumber()
  }

  async winningNumber() {
    this.Output.printWinnerNumber()
    const inputNum = await this.Input.winningNumbersInput();
    const lotto = new Lotto(inputNum.split(","));
    this.winningNumbers = inputNum.split(",").map(Number);
    this.winningBonusNumber()
  }

  async winningBonusNumber() {
    this.Output.printBonusNumber()
    this.bonusNumber = await this.Input.winningBounsInput();
    this.bonusNumber = this.bonusNumber.split(",").map((numbers) => Number(numbers));
    this.Validate.checkNumberRange(this.bonusNumber);
    this.Validate.checkNumbersType(this.bonusNumber);
    this.Validate.checkedBonusLength(this.bonusNumber);
    this.Validate.checkDuplicateBonus(this.bonusNumber, this.winningNumbers);
    this.winningStats()
  }

  winningStats() {
    this.matchLotto();
    Object.entries(this.winningRanking).forEach(([key, value]) => {
      this.Output.printLottoResult(key,value)
    });
    this.yieldCalculation();
  }

  matchLotto() {
    for(let i=0; i<this.lottoList.length; i+=1) {
      const matched = this.lottoList[i].filter((numbers) => this.winningNumbers.includes(numbers));
      const matchedCount = matched.length;
      this.countMatches(matchedCount, this.lottoList[i])
    }
  }

  countMatches(count, lottoList) {
    const bonus = +this.bonusNumber.join("")

    if(count === 5 && lottoList.includes(bonus)) this.winningRanking.bonus += 1
    if (count >= 3) this.winningRanking[count] += 1
  }

  async yieldCalculation() {
    let Sum = 0;
    Object.entries(this.winningRanking).forEach(([key, value]) => {
      Sum += this.totalObjectSum(key,value)
    });

    Sum = (Sum/this.money).toFixed(2) * 100

    this.Output.printYieldCalculation(Sum);
  }

  totalObjectSum(key, value) {
    let money = 0

    if(key ==="3") money += value * 5000
    if(key === "4") money += value * 50000
    if(key === "5") money += value * 1500000
    if(key === "bonus") money += value * 30000000
    if(key === "6")  money += value * 2000000000

    return money;
  }
}

export default App;
