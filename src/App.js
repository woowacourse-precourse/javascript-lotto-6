const readline = require('readline');
const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  async play() {
    // 입력값
    Console.print('구입금액을 입력해 주세요.');
    const price = await Console.readLineAsync();
    const lottoPaper = price//1000
    if (price%1000!=0){
      throw new Error("[ERROR]구입 금액은 1000원 단위만 가능합니다.");
    }

    for(let i=0; i<lottoPaper;i++){
      
    }
  



    Console.print('당첨 번호를 입력해 주세요.');
    const winningNumbers= await Console.readLineAsync();
    const wNumbers = winningNumbers.split(',');
    if(wNumbers.length!=6){
      throw new Error("[ERROR]발행되는 로또의 당첨 번호는 6개가 되어야 합니다.")
    }
  }
}

export default App;
