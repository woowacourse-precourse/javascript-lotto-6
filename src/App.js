import { parseSync } from '@babel/core';
import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const lottoMoney = await this.getLottoMoney(); // 로또 구매할 금액 입력
    const lottoNumbers = this.generateLottoNumbers(lottoMoney / 1000);  // 갯수에 맞게 랜덤 생성되는 로또
    this.showLottoNumbers(lottoNumbers)  // 랜던 생성된 로또 출력
    const { mainNumbers, bonusNumber } = await this.getMyNumbers();  // 당첨 번호 입력 받기
  }

  async getLottoMoney() {  // 로또 구매할 금액 입력
    while (true) {
      try {
        const input = await Console.readLineAsync("로또 구입 금액을 입력하세요.\n");
        const lottoMoney = parseInt(input);
        if (lottoMoney % 1000 != 0) {
          throw new Error("[ERROR] 1,000원 단위로 입력해주세요.")
        }
        this.lottoMoney = lottoMoney;
        return lottoMoney;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  generateLottoNumbers(count) {  // 갯수에 맞게 랜덤 생성되는 로또
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRage(1, 45, 6).sort((a, b) => a - b);
      lottoNumbers.push(numbers);
    }
    return lottoNumbers;
  }

  showLottoNumbers(lottoNumbers) {  // 랜덤 생성된 로또 배열 출력
    Console.print(`${lottoNumbers.length}개를 구매했습니다.`);
    for (const numbers of lottoNumbers) {
      Console.print(`[${numbers.join(",")}]`);
    }
    Console.print("\n")
  }

  async getMyNumbers() {  // 당첨 번호 입력 받기
    try {
      const winningInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      const winningNumbers = winningInput.split(",").map(num => parseInt(num.trim()));
      if (winningNumbers.length !== 6 || winningNumbers.some(num => num < 1 || num > 45)) {
        throw new Error("[ERROR] 1부터 45까지의 6개 번호를 입력해 주세요.");
      }
      Console.print("\n");
      const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
      const bonusNumber = parseInt(bonusInput.trim());
      if (bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
        throw new Error("[ERROR] 1부터 45까지의 번호 중에서 중복되지 않게 선책해 주세요.");
      }
      return {
        mainNumbers: winningNumbers,
        bonusNumber: bonusNumber
      };
    } catch (error) {
      Console.print(error.message);
      return await this.getMyNumbers();
    }
  }

  checkResult(lottoNumbers, winningNumbers, bonusNumber) {  // 로또 당첨 확인
    let matchCounts = {
      "3": 0,
      "4": 0,
      "5": 0,
      "5_bonus": 0,
      "6": 0
    };

    for (const lottoNumberSet of lottoNumbers) {
      let matchCount = 0;
      let hasBonusNumber = false;

      const matchedNumbers = lottoNumberSet.filter(num => winningNumbers.includes(num));
      const matchedCount = matchedNumbers.length;

      if (matchCount === 6) {
        matchCount = 6;
        hasBonusNumber = lottoNumberSet.includes(bonusNumber);
      } else if (matchedCount === 5 && lottoNumberSet.includes(bonusNumber)) {
        matchCount = 5;
        hasBonusNumber = true;
      } else if (matchedCount === 5) {
        matchCount = 5;
      } else if (matchedCount === 4) {
        matchCount = 4;
      } else if (matchedCount === 3) {
        matchCount = 3;
      }

      switch (matchCount) {
        case 6:
          matchCounts["6"]++;
          break;
        case 5:
          if (hasBonusNumber) {
            matchCounts["5_bonus"]++;
          } else {
            matchCounts["5"]++;
          }
          break;
        case 4:
          matchCounts["4"]++;
          break;
        case 3:
          matchCounts["3"]++;
          break;
      }
    }
    return matchCounts;
  }
}



export default App;