import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const lottoMoney = await this.getLottoMoney(); // 로또 구매할 금액 입력
  }

  async getLottoMoney() {  // 로또 구매할 금액 입력
    while(true){
      try{
        const input = await Console.readLineAsync("로또 구입 금액을 입력하세요.\n");
        const lottoMoney = parseInt(input);
        if(lottoMoney % 1000 != 0) {
          throw new Error("[ERROR] 1,000원 단위로 입력해주세요.")
        }
        this.lottoMoney = lottoMoney;
        return lottoMoney;
      } catch (error){
        Console.print(error.message);
      }
    }
  }
}



export default App;