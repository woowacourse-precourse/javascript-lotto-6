import Lotto from './Lotto.js';   
import UserInput from "./Input.js";

class App {
  async play() {
    // const userInputNumber = await new UserInput().getPurchasingPrice();
    const userInputLotto = await new UserInput().getLottoNumber();    
    console.log('userInputLotto', userInputLotto)
    
  }
}

export default App;
