import { Console,Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Lottos{
    constructor(money){
        this.validate(money);
        this.count = money/1000;
        this.list =[];
        this.publish();
        this.total_Return=0;
        this.stoporkeep;
    }
    validate(money){
        const Money = Number(money);
        if (isNaN(money)!=false){
            this.stoporkeep=false;
            Console.print('[ERROR] 숫자만 입력 가능합니다.');
            return;
        }   
        if (Money%1000!=0 && Money>1000){
            this.stoporkeep=false;
            Console.print('[ERROR] 1000원으로 떨어지는 금액을 지불해야 합니다.');
            return;
        }
        if (Money<1000){
            this.stoporkeep=false;
            Console.print('[ERROR] 1000원이상의 금액을 지불해야 합니다.');
            return;
        }
        else{
            this.stoporkeep=true;
        }
    }
    publish(){
        for (let num = 0; num < this.count; num++) {
        const newLotto = this.createNewLotto();
        this.list.push(newLotto);
        }
    }
    createNewLotto() {
        const newNumbers = Random.pickUniqueNumbersInRange(1,45,6);
        return new Lotto(newNumbers);
    }
    printCount() {
        Console.print(this.count+'개를 구매했습니다.');
    }

    printList() { //발행 로또 출력
        this.list.forEach((lotto) => {
        lotto.printNumbers();
        });
    }

    printResult(winningNumbers, bonusNumber){
        Console.print('당첨 통계');
        Console.print('---');
        //Console.print(this.list);
        let lottoRanks = []; //결과 담을 배열

        this.list.forEach((lotto) => {
        lottoRanks.push(lotto.getRank(winningNumbers,bonusNumber));
        });
        this.printScore(lottoRanks);
        this.totalReturn(lottoRanks);
    }

    printScore(lottoRanks){
        let score = [0,0,0,0,0,0];
        for(let i=0; i<lottoRanks.length; i++){
        if(lottoRanks[i]==3) score[0]+=1;
        if(lottoRanks[i]==4) score[1]+=1;
        if(lottoRanks[i]==5) score[2]+=1;
        if(lottoRanks[i]==6) score[3]+=1;
        if(lottoRanks[i]==7) score[4]+=1;
        }
        
        Console.print('3개 일치 (5,000원) - '+score[0]+'개');
        Console.print('4개 일치 (50,000원) - '+score[1]+'개');
        Console.print('5개 일치 (1,500,000원) - '+score[2]+'개');
        Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - '+score[4]+'개');
        Console.print('6개 일치 (2,000,000,000원) - '+score[3]+'개');
    }

    totalReturn(lottoRanks){
        let count=0;
        for(let i=0; i<lottoRanks.length; i++){
        if(lottoRanks[i]==3) count+=5000;
        if(lottoRanks[i]==4) count+=50000;
        if(lottoRanks[i]==5) count+=1500000;
        if(lottoRanks[i]==6) count+=2000000000;
        if(lottoRanks[i]==7) count+=30000000;
        }
        this.total_Return = count;
    }
    returnStopOrKeep(){
        return this.stoporkeep;
    }
}
  
export default Lottos;