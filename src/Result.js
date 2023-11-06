// Result.js
import { Console } from "@woowacourse/mission-utils";
import Input from "./Input.js";

class Result {
  static async showResult() {
    Console.print("당첨 통계");
    Console.print("---");

    // 이전에 구매한 로또 번호와 보너스 번호 가져오기
    const previousLottoNumbers = Input.previousLottoNumbers;
    const previousBonusNumber = Input.previousBonusNumber;

    // 각 당첨 등급별로 일치하는 번호 개수를 저장하는 배열
    const matches = [0, 0, 0, 0, 0, 0, 0]; // 0개 ~ 5개 일치까지

    // 이전에 구매한 로또 번호와 보너스 번호와 비교하여 matches 배열 업데이트
    for (const lottoNumbers of previousLottoNumbers) {
      const matchCount = this.countMatchingNumbers(
        lottoNumbers,
        previousLottoNumbers,
        previousBonusNumber
      );

      if (matchCount !== undefined) {
        matches[matchCount]++;
      }
    }

    // 3개 일치 (5,000원)
    const prize3 = matches[2] * 5000;
    Console.print(`3개 일치 (5,000원) - ${matches[2]}개`);

    // 4개 일치 (50,000원)
    const prize4 = matches[3] * 50000;
    Console.print(`4개 일치 (50,000원) - ${matches[3]}개`);

    // 5개 일치 (1,500,000원)
    const prize5 = matches[4] * 1500000;
    Console.print(`5개 일치 (1,500,000원) - ${matches[4]}개`);

    // 5개 일치, 보너스 볼 일치 (30,000,000원)
    const prize5WithBonus = matches[5] * 30000000;
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matches[5]}개`);

    // 6개 일치 (2,000,000,000원)
    const prize6 = matches[6] * 2000000000;
    Console.print(`6개 일치 (2,000,000,000원) - ${matches[6]}개`);

    // 총 당첨금 계산
    const totalPrize = prize3 + prize4 + prize5 + prize5WithBonus + prize6;
    Console.print(`총 당첨금: ${totalPrize}원`);
  }

  static countMatchingNumbers(arr1, arr2, bonusNumber) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return 0;
    }

    const intersection = arr1.filter((number) => arr2.includes(number));
    const matchCount = intersection.length;

    if (matchCount === 6) {
      return 6; // 6개 일치
    } else if (matchCount === 5 && arr1.includes(bonusNumber)) {
      return 5; // 5개 일치, 보너스 볼 일치
    }

    return matchCount;
  }
}

export default Result;
