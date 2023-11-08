import { Random } from '@woowacourse/mission-utils';
import Output from './Output.js';
import UserInput from './UserInput.js';
import Validate from './Validate.js';

class App {
  Output = new Output();

  Input = new UserInput();

  Validate = new Validate();
  
  amonut;

  lottoList = [];
  
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

  }
}

export default App;
