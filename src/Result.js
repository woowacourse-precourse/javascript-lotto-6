import { Console } from "@woowacourse/mission-utils";

class Result {
  static async showResult(lottoNumbers, userLottoNumbers, userBonusNumber) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`당첨번호: ${userLottoNumbers}`);
    Console.print(`보너스 번호: ${userBonusNumber}`);
    Console.print(`로또번호: ${lottoNumbers}`);

    const matchedNumbers = []; // 일치하는 번호를 저장하는 배열 초기화

    for (const userNumber of userLottoNumbers) {
      for (const lottoNumberSet of lottoNumbers) {
        if (lottoNumberSet.includes(userNumber)) {
          matchedNumbers.push(userNumber);
          break; // 일치하는 번호를 찾으면 내부 반복문 종료
        }
      }
    }

    // 일치하는 번호 출력
    Console.print(`일치하는 번호: [${matchedNumbers.join(", ")}]`);
    // 보너스 번호 일치 여부 확인
    const isBonusMatch = lottoNumbers[0].includes(userBonusNumber);

    // 일치하는 숫자의 개수에 따라 당첨금 계산
    const numberOfMatches = matchedNumbers.length;
    const winnings = [0, 0, 5000, 50000, 1500000, 30000000, 2000000000];

    Console.print(`3개 일치 (5,000원) - ${numberOfMatches === 3 ? 1 : 0}개`);
    Console.print(`4개 일치 (50,000원) - ${numberOfMatches === 4 ? 1 : 0}개`);
    Console.print(
      `5개 일치 (1,500,000원) - ${
        numberOfMatches === 5 && !isBonusMatch ? 1 : 0
      }개`
    );

    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${
        numberOfMatches === 5 && isBonusMatch ? 1 : 0
      }개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${numberOfMatches === 6 ? 1 : 0}개`
    );


  }
}

export default Result;
