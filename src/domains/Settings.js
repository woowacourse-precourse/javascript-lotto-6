import InputView from "../view/InputView.js"
import OutputView from "../view/OutputView.js"
import Lotto from "./Lotto.js"
import Amounts from "./Amounts.js"

class SetGame{

  #amounts
  #Lotto
  #Bonus
  #inputView
  #outputView

  constructor(){
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }


  async setAmounts(){
    while(true){
      try{
        const inputAmounts = await this.#inputView.readAmounts();
        const amounts = new Amounts(inputAmounts);
        this.#amounts = await amounts.getAmounts();
        
        break;

      } catch(err){
        this.#outputView.print(err.message)
      }
    }

    return this.#amounts;
  }

  async setLottoNumbers(){
    while(true){
      try{
        const inputLotto = await this.#inputView.readLottoNumbers();
        const lottoNumbers = inputLotto.split(',').map((number) => Number(number));
        const lotto = new Lotto(lottoNumbers);

        this.#Lotto = await lotto.getLottoNumbers();

        break;

      }catch (err){
        this.#outputView.print(err.message)
      }
    }

    return this.#Lotto;

  }
  
  async setBonusNumber(numbers){
    while(true){
      try{
        const lotto = new Lotto(numbers);
        const bonus = await this.#inputView.readBonusNumber();
        this.#Bonus = await lotto.getBonus(Number(bonus));

        break;
        
      }catch(err){
        this.#outputView.print(err.message);
      }
    }

    return this.#Bonus
  }
}

export default SetGame