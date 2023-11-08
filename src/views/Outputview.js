import { Console } from "@woowacourse/mission-utils";
import Reward from "../models/Reward.js";

class Outputview {
    printLottoNumbers(amount, lottoNumbers) {
        Console.print(`${amount}개를 구매했습니다.`);
        lottoNumbers.forEach(element => {
            Console.print(`[${element.join(', ')}]`);
        });
    }

    printWinningStatistics(matchCounts) {
        Console.print('당첨 통계');
        Console.print('---');
        matchCounts.forEach((count, matchCount)=>{
            let reward = Reward.getReward(matchCount);
            reward = reward.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            if (matchCount == '5+') {
                Console.print(`5개 일치, 보너스 볼 일치 (${reward}원) - ${count}개`);
            } else{
                Console.print(`${matchCount}개 일치 (${reward}원) - ${count}개`);
            }
        })        
    }

    printEarningRate(matchCounts, purchaseAmount) {
        const earningRate = Reward.getEarningRate(matchCounts, purchaseAmount);
        Console.print(`총 수익률은 ${earningRate}%입니다.\n`)
    }
}

export default Outputview;