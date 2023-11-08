// Result.js
import { Console } from "@woowacourse/mission-utils";

class Result {
  static async showResult(
    lottoNumbersArray,
    userLottoNumbers,
    userBonusNumber,
    purchaseAmount
  ) {
    Console.print("\n당첨 통계");
    Console.print("---");
    // Console.print(`당첨번호: ${userLottoNumbers}`);
    // Console.print(`보너스 번호: ${userBonusNumber}`);
    // Console.print(`로또번호: ${lottoNumbersArray}`);
    // Console.print(`구입금액: ${purchaseAmount}`);

    const lottoNumbers = lottoNumbersArray.map((numbers) =>
      numbers.split(",").map((number) => parseInt(number, 10))
    );
    const matchedNumbers = userLottoNumbers.filter((number) =>
      lottoNumbersArray[0].includes(number)
    );

    for (const userNumber of userLottoNumbers) {
      for (const lottoNumberSet of lottoNumbers) {
        if (lottoNumberSet.includes(userNumber)) {
          matchedNumbers.push(userNumber);
          break;
        }
      }
    }

    const isBonusMatch = lottoNumbersArray[0].includes(userBonusNumber);

    // const winnings = [5000, 50000, 1500000, 30000000, 2000000000,0,0];
    const winnings = [2000000000, 30000000, 1500000, 50000, 5000, 0, 0];

    let counts = new Array(6).fill(0);
    for (const ticket of lottoNumbers) {
      const matchingNumbers = ticket.filter((number) =>
        userLottoNumbers.includes(number)
      ).length;

      if (matchingNumbers === 6) {
        counts[0]++;
      } else if (matchingNumbers === 5 && isBonusMatch) {
        counts[1]++;
      } else if (matchingNumbers === 5) {
        counts[2]++;
      } else if (matchingNumbers === 4) {
        counts[3]++;
      } else if (matchingNumbers === 3) {
        counts[4]++;
      }
    }
    
    const totalWinnings = counts.reduce((total, count, index) => {
      return total + count * winnings[index];
    }, 0);

    const result = ((totalWinnings - purchaseAmount) / purchaseAmount) * 100;

    Console.print(`3개 일치 (5,000원) - ${counts[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${counts[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${counts[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${counts[1]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${counts[0]}개`);
    // Console.print(`총 당첨금: ${totalWinnings}원`);
    Console.print(`수익률: ${result.toFixed(2)}%`);
  }
}

export default Result;
