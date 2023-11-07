import { MissionUtils,Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  buyLottos=[];
  winLotto;
  bonusNumber;
  hit = {
    5000:0,
    50000:0,
    1500000:0,
    30000000:0,
    2000000000:0,
    'revenue':0.0
  }

  async play() {
    await this.buy();
    await this.winLottoInput();
    await this.bonusInput();
    this.result();
  }

  async buy(){
    let money;
    while(true){
      try{
        money = await this.buyInput();
      }catch(e){
        Console.print(e.message)
        continue;
      }
      if(money!==undefined) break;
    }
    this.makeNumbers(Number(money)/1000);
    this.printBuyLottos();
  }

  async buyInput(){
    let money = await Console.readLineAsync('구입금액을 입력해 주세요.');
    this.isNum(money)
    if(Number(money)%1000!==0) throw new Error("[ERROR] 1000 단위에 맞춰주세요.");
    return money;
  }

  async winLottoInput(){
    while(true){
      try{
        const winNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
        let lotto = this.string2number(winNumbers);
        this.winLotto = new Lotto(lotto);
      }catch(e){
        Console.print(e.message);
        continue;
      }
      break;
    }
  }

  async bonusInput(){
    while(true){
      try{
        const number = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
        this.isNum(number)
        this.isLottoNumber(Number(number));
        this.winLotto.have(Number(number));
        this.bonusNumber = Number(number);
      }catch(e){
        Console.print(e.message);
        continue;
      }
      break;
    }
  }

  /**
   * 숫자인지 판별
   * @param {*} number 
   * @returns 
   */
  isNum(number){
    const re = new RegExp("^[0-9]+$");
    if(!re.test(number)){
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
    return true;
  }

  string2number(input){
    if(input.trim()==='') throw new Error("[ERROR] 값을 입력해주세요.");
    let numbers = input.split(",");
    let result = [];
    for(let i=0;i<numbers.length;i++){
      this.isNum(numbers[i]);
      this.isLottoNumber(Number(numbers[i]));
      result.push(Number(numbers[i]));
    }
    return result;
  }
  /**
   * number만큼 로또번호를 생성
   * @param {*} number 
   */
  makeNumbers(number){
    for(let i=0;i<number;i++){
      this.buyLottos.push(new Lotto(this.makeNumber()));
    }
  }

  /**
   * 로또 번호인지 확인
   * 1~45사이의 숫자
   * @param {*} number 
   */
  isLottoNumber(number){
    if(Number(number)<1||45<Number(number)) throw new Error("[ERROR] 1-45사이의 숫자를 입력해주세요.")
  }

  /**
   * 6자리의 1~45까지 숫자를 중복없이 생성
   */
  makeNumber(){
    //1~45까지 겹치지 않는 숫자 6개 반환
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45,6);;
  }

  /**
   * 구매한 로또들 출력
   */
  printBuyLottos(){
    Console.print(`${this.buyLottos.length}개를 구매했습니다.`);
    this.buyLottos.forEach(lotto => {
      lotto.print();
    });
  }

  /**
   * 구매한 복권들을 전부 확인한다.
   */
  calculate(){
    let winCost = 0;
    this.buyLottos.forEach(lotto=>{
      let earn = lotto.winningCheck(this.winLotto.getNumber(),this.bonusNumber);
      this.hit[earn] = this.hit[earn]+1;
      winCost+=earn;
    })
    this.hit['revenue'] = ((winCost)/(this.buyLottos.length*1000)*100).toFixed(1);
  }

  result(){
    this.calculate()
    Console.print(`3개 일치 (5,000원) - ${this.hit[5000]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.hit[50000]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.hit[1500000]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.hit[30000000]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.hit[2000000000]}개`);
    Console.print(`총 수익률은 ${this.hit['revenue']}%입니다.`);
  }
}

export default App;
