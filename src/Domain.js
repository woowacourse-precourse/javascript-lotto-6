import { MissionUtils } from "@woowacourse/mission-utils";
let {Console,Random} = MissionUtils;

class Domain {

   async GetLottoNumbers (COUNT,LOTTOS){
        for(let i = 0; i < COUNT; i++){
            let LOTTONUM = await Random.pickUniqueNumbersInRange(1,45,6);
            LOTTOS.push(LOTTONUM);
            Console.print(`[${LOTTONUM[0]+","+" "+LOTTONUM[1]+","+" "+LOTTONUM[2]+","+" "+LOTTONUM[3]+","+" "+LOTTONUM[4]+","+" "+LOTTONUM[5]}]`);
         }
        }
    async ScoreSet (LOTTOS,SCORE,USERCHOOSENUMBER,USERBONUSNUMBER) {
        for(let lottoItem of LOTTOS){
            let ARR = lottoItem.filter((word) => USERCHOOSENUMBER.includes(word));
            let CANIBONUS = lottoItem.includes(USERBONUSNUMBER);
            if(ARR.length == 6) SCORE[4] += 1;
            else if(ARR.length == 5 && CANIBONUS == true) SCORE[3] += 1;
            else if(ARR.length == 5 && CANIBONUS != true) SCORE[2] += 1;
            else if(ARR.length == 4) SCORE[1] += 1;
            else if(ARR.length == 3) SCORE[0] += 1;
            }
    }

    async Result (SCORE,USERSCASH) {
        let ALLCOST = 5000*SCORE[0] 
        + 50000*SCORE[1] 
        + 1500000*SCORE[2] 
        + 30000000*SCORE[3] 
        + 2000000000*SCORE[4];
          let ALLBENEFIT = ((ALLCOST / USERSCASH) * 100).toFixed(1);
        Console.print(`총 수익률은 ${ALLBENEFIT}%입니다.`)
        
    }
}

export default Domain