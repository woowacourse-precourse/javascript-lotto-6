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
    this.winningNumber = inputNum.split(",").map(Number);
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
  }
}

export default App;
