import { MissionUtils } from "@woowacourse/mission-utils";

class PlayGame {
    async getRandomNumber(ticketAmount) {
        let randomArray = new Array();
        for (let i = 0; i < ticketAmount; i++) {
            let printArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 7);
            this.arrayPrint(printArray);
            randomArray.push(printArray);
        }
        return randomArray;
    }

    arrayPrint(printArray) {
        let stringArray = JSON.stringify(printArray.slice(0, 6));
        MissionUtils.Console.print('[' + stringArray.slice(1, stringArray.length - 1).replace(/,/gi, ', ') + ']');
    }

    compareNumber(randomNumber, winningNumber) {
        let numCount = 0;
        for (let i = 0; i < randomNumber.length - 1; i++) {
            if (randomNumber[i] === winningNumber[i]) {
                numCount++;
            }
        }
        return numCount;
    }
    compareBonus(randomNumber, winningNumber) {
        let randomCount = 0;
        if (randomNumber === winningNumber) {
            randomCount++;
        }
        return randomCount;
    }

    printResult(threeSame, fourSame, fiveSame, fiveBonus, sixSame) {
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${threeSame}개\n`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${fourSame}개\n`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${fiveSame}개\n`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveBonus}개\n`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${sixSame}개\n`);
    }

    async execution(randomNumber, winningNumber, bonusNumber, ticketAmount) {
        let numCount=0, randomCount=0, threeSame=0, fourSame=0, fiveSame=0, fiveBonus=0, sixSame = 0;
        for (let i = 0; i < ticketAmount; i++) {
            numCount = this.compareNumber(randomNumber[i], winningNumber);
            randomCount = this.compareBonus(randomNumber[i][6], bonusNumber);
            if (numCount == 3) { threeSame++; }
            else if (numCount == 4) { fourSame++; }
            else if ((numCount == 5) && (randomCount == 1)) { fiveBonus++; }
            else if (numCount == 5) { fiveSame++; }
            else if (numCount == 6) { sixSame++; }
        }
        this.printResult(threeSame, fourSame, fiveSame, fiveBonus, sixSame);
        this.rateRevenue(threeSame, fourSame, fiveSame, fiveBonus, sixSame, ticketAmount);
    }

    rateRevenue(threeSame, fourSame, fiveSame, fiveBonus, sixSame, ticketAmount) {
        const winnings = (threeSame * 5) + (fourSame * 50) + (fiveSame * 1500) + (fiveBonus * 30000) + (sixSame * 2000000);
        const revenue = (winnings / ticketAmount) * 100
        MissionUtils.Console.print(`총 수익률은 ${revenue.toFixed(2)}%입니다.`);
    }
}
export default PlayGame;