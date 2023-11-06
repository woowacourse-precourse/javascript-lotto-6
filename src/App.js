import { Lotto } from "./Lotto.js";

class App {
  async play() {
    

    const winNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    
  }

  async lottoNumber() {
    const buyCount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    
  }
  
}

export default App;
