import { Console } from "@woowacourse/mission-utils";

class Result {
    matchNumber(randomNumbers, lottonumber, bonumNumber) {
        const matches = new Array(5).fill(0);

        randomNumbers.forEach(userNumbers => {
            const userMatchCount = userNumbers.filter(num => lottonumber.includes(num)).length;
            if (userMatchCount === 3) {
                matches[0]++;
            }
            if (userMatchCount === 4) {
                matches[1]++;
            }
            if (userMatchCount === 5) {
                if (userNumbers.includes(bonumNumber)) {
                    matches[3];
                } else {
                    matches[2];
                }
            }
            if (userMatchCount === 6) {
                matches[4]++;
            }
        });
        return matches;
    }

    printPercentage(matchThree, matchFour, matchFive, matchFiveBonus, matchSix, money) {
        const prizes = [5000, 50000, 1500000, 30000000, 2000000000];
        const totalPrize = matchThree * prizes[0] + matchFour * prizes[1] + matchFive * prizes[2] + matchFiveBonus * prizes[3] + matchSix * prizes[4];

        Console.print(`3개 일치 (5,000원) - ${matchThree}개`);
        Console.print(`4개 일치 (50,000원) - ${matchFour}개`);
        Console.print(`5개 일치 (1,500,000원) - ${matchFive}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchFiveBonus}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${matchSix}개`);
        const profitPercentage = (totalPrize / money) * 100;
        Console.print(`총 수익률은 ${profitPercentage.toFixed(1)}%입니다.`);
    }
}

export default Result;