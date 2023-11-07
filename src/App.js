import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const lottoMoney = await this.getLottoMoney(); // 로또 구매할 금액 입력
    const lottoNumbers = this.generateLottoNumbers(lottoMoney / 1000);  // 갯수에 맞게 랜덤 생성되는 로또
    this.showLottoNumbers(lottoNumbers)  // 랜던 생성된 로또 출력
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

  generateLottoNumbers(count){  // 갯수에 맞게 랜덤 생성되는 로또
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRage(1, 45, 6).sort((a, b) => a - b);
      lottoNumbers.push(numbers);
    }
    return lottoNumbers;
  }

  showLottoNumbers(lottoNumbers) {  // 랜덤 생성된 로또 배열 출력
    Console.print(`${lottoNumbers.length}개를 구매했습니다.`);
    for(const numbers of lottoNumbers){
      Console.print(`[${numbers.join(",")}]`);
    }
    Console.print("\n")
  }
}



export default App;