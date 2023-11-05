import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js"

class App {
  async play() {
    let buyCost;
    while(true){
      try{
        buyCost = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        if(!Number.isFinite(Number(buyCost))) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if(Number(buyCost) % 1000 !== 0){
          throw new Error("[ERROR] 구입급액은 1,000원 단위로 나누어 떨어져야 합니다.");
        }
        break;
      } catch(error){
        
      }
    }
    const buyLotto = Number(buyCost) / 1000;
    MissionUtils.Console.print(buyLotto.toString() + '개를 구매했습니다.');
    const youBuy = [];
    for (let i = 0; i < buyLotto ; i++){
      let randNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randNum.sort((a,b) => a - b);
      youBuy.push(randNum);
      MissionUtils.Console.print(JSON.stringify(youBuy[i]).replace(/,/g, ', '));
    }

    const winInput = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winNum = winInput.split(',');
    
    const bonusInput = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonusNum = Number(bonusInput);

    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');

    const winList = [0,0,0,0,0]; 
    for(let i = 0; i < buyLotto; i++){
      let checking = new Lotto(youBuy[i]);
      const winIdx = checking.checkWin(winNum, bonusNum);
      winList[winIdx] += 1;
    }
  }
}

export default App;
