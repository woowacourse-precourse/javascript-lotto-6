import {Console,MissionUtils} from '@woowacourse/mission-utils'; 
import Lotto from './Lotto.js';
const lottos = []
const result = [0,0,0,0,0,0]

const FIRST_PRIZE_MONEY = 2000000000;
const SECOND_PRIZE_MONEY = 30000000;
const THIRD_PRIZE_MONEY = 1500000;
const FOURTH_PRIZE_MONEY = 50000;
const FIFTH_PRIZE_MONEY = 5000;

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
  return prizeNumber;
}
const inputBonusNumber = async() =>{
  const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  return bonusNumber;
}

const calculateResult = (prizeNumber,bonusNumber)=>{
  for(let i=0;i<lottos.length;i++){
    result[lottos[i].compare(prizeNumber,bonusNumber)] += 1;
  }
}

const calculateRatio = ()=>{
  const getMoney = result[1]*FIRST_PRIZE_MONEY+ result[2]*SECOND_PRIZE_MONEY+result[3]*THIRD_PRIZE_MONEY+result[4]*FOURTH_PRIZE_MONEY+result[5]*FIFTH_PRIZE_MONEY;
  return getMoney/(lottos.length*1000)*100;
}

class App {
  async play() {
    try{
      await inputPurchaseAmount();
      const prizeNumber = await inputPrizeNumber();
      const bonusNumber = await inputBonusNumber();
      calculateResult(prizeNumber,bonusNumber);
      const ratio = calculateRatio();
    }
    catch (error){
      throw new Error(`${error}`);
    }
  }
}

export default App;
