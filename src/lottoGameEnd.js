import { MissionUtils } from "@woowacourse/mission-utils";

class gameEnd {

    lottoMacth(LOTTO_WIN_NUMBER,LOTTO_BONUS_NUMBER,LOTTO_NUMBERS,winList) {
    
    LOTTO_NUMBERS.forEach(lottoArr => {
        this.lottoWinList(lottoArr.filter(num => LOTTO_WIN_NUMBER.includes(num)).length,winList,LOTTO_BONUS_NUMBER,lottoArr);        
    });

    } 

    lottoWinList(number,winList,LOTTO_BONUS_NUMBER,lottoArr){
        switch(number) {
        case 3:
            winList[3]++;
            break;
        case 4:
            winList[4]++;
            break;
        case 6:
            winList[6]++;
            break;
        case 5:
            this.lottoBonusCheck(LOTTO_BONUS_NUMBER,lottoArr,winList)
        }
    }
    
    lottoBonusCheck(LOTTO_BONUS_NUMBER,lottoArr,winList){
        if(lottoArr.includes(LOTTO_BONUS_NUMBER)){
            winList[51]++;
        }
        else {
            winList[5]++;
        }

    }

    lottoRevenue(winList){
        let revenue = 0;
        revenue += winList[3] * 5000;
        revenue += winList[4] * 50000;
        revenue += winList[5] * 1500000;
        revenue += winList[51] * 3000000;
        revenue += winList[6] * 200000000;
        return revenue;
    }

    lottoMoneyPercent(LOTTO_COUNT,revenue){
        const MONEY = LOTTO_COUNT*1000;
        if(revenue === 0)return 0;
        const PROFIT_MARGIN = (revenue - MONEY) / MONEY * 100;
        
        return 100 + PROFIT_MARGIN.toFixed(2)*1;
    }

    lottoEndPrint(winList,END_MONEY){
        MissionUtils.Console.print("당첨 통계")
        MissionUtils.Console.print("---")
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${winList[3]}개`)
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${winList[4]}개`)
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winList[5]}개`)
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winList[51]}개`)
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winList[6]}개`)
        MissionUtils.Console.print(`총 수익률은 ${END_MONEY}%입니다.`)
    }
}


export default gameEnd;