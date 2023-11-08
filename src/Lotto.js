import { Console, Random } from '@woowacourse/mission-utils';

class Lotto {

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개의 숫자를 쉼표를 사용하여 구분하여 입력해야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
    }

    numbers.forEach(number => {
      if (number.trim() === '') {
        throw new Error('[ERROR] 로또 번호는 숫자만 입력해주세요.');
      }

      if (Number.isNaN(Number(number))) {
        throw new Error('[ERROR] 로또 번호는 숫자만 입력해주세요.');
      }

      if (Number(number) < 1 || Number(number) > 45) {
        throw new Error('[ERROR] 로또 번호의 범위는 1에서 45 사이입니다.');
      }
    });
  }

  validateBonusNumber(bonusNumber) {
    if (bonusNumber.trim() === '') {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력해주세요.');
    }

    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error('[ERROR] 로또 번호는 숫자만 입력해주세요.');
    }

    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error('[ERROR] 로또 번호의 범위는 1에서 45 사이입니다.');
    }
  }

  calculateLottoResult(userLottoNumbers, winningNumbers, bonusNumber) {
    const results = [0, 0, 0, 0, 0];

    userLottoNumbers.forEach(lottoNumber => {
      let count = 0;
      // 로또 번호 안에 당첨 번호가 있는지 확인
      lottoNumber.forEach(number => {
        if (winningNumbers.indexOf(number) !== -1) {
          count += 1;
        }
      });

      if (count == 5 && lottoNumber.indexOf(bonusNumber) !== -1) {
        results[count - 2] += 1;
      } else {
        results[count - 3] += 1;
      }
    });

    return results;
  }

  // TODO: 추가 기능 구현
  printLottoResult(results) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${results[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[4]}개`);
  }

  calculateEarningsRate(results) {
    const amount = [5000, 50000, 1500000, 30000000, 2000000000];

    let i = 0;
    const earnings = (results.reduce((acc, curr) => {
      return acc + (curr * amount[i++]);
    }, 0));

    return earnings;
  }

  printEarningsRate(earnings, purchaseAmount) {
    Console.print(`총 수익률은 ${(earnings / purchaseAmount * 100).toFixed(1)}%입니다.`);
  }
}

export default Lotto;
