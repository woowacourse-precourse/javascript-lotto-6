import {Console,MissionUtils} from '@woowacourse/mission-utils'; 
import Lotto from './Lotto.js';
const lottos = []
const inputPurchaseAmount = async()=>{
  const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  if (isNaN(amount) || amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
  }
  console.log();
  const count = amount/1000;
  Console.print(`${count}개를 구매했습니다.`);
  for(let i=0;i<count;i++){
    const number = generateLottoNumber();
    Console.print(number);
    const lotto = new Lotto(number);
    lottos.push(lotto);
  }
  console.log();
}

const generateLottoNumber = ()=>{
  const count = 6;
  const numbers = new Set();
  while(numbers.size < count){
    const random = MissionUtils.Random.pickNumberInRange(1,45);
    numbers.add(random);
  }
  return [...numbers];
}

const inputPrizeNumber = async() =>{
  const prizeNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
}
const inputBonusNumber = async() =>{
  const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
}

class App {
  async play() {
    try{
      await inputPurchaseAmount();
    }
    catch (error){
      throw new Error(`${error}`);
    }
  }
}

export default App;
