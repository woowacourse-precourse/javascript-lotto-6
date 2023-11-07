import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js"

class App {
  async play() {
    let buyCost;
    while(true){
      try{
        buyCost = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        if(!Number.isFinite(Number(buyCost))) {
          MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if(Number(buyCost) % 1000 !== 0){
          MissionUtils.Console.print("[ERROR] 구입급액은 1,000원 단위로 나누어 떨어져야 합니다.");
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

    MissionUtils.Console.print("3개 일치 (5,000원) - " + winList[0].toString() + "개");
    MissionUtils.Console.print("4개 일치 (50,000원) - " + winList[1].toString() + "개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - " + winList[2].toString() + "개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + winList[3].toString() + "개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - " + winList[4].toString() + "개");
    const rateOfReturn = (5000 * winList[0] + 50000 * winList[1] + 1500000 * winList[2] + 30000000 * winList[3] + 2000000000 * winList[4]) / Number(buyCost);
    MissionUtils.Console.print("총 수익률은 " + Number(rateOfReturn * 100).toFixed(1)  + "%입니다.");
    
  }
  
}

export default App;
