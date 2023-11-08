import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  #bonusNumber;
  #prizeAsCount = [
    {
      order: 1,
      count: 6,
      isBonus: false,
      money: 2000000000,
      moneyString: '2,000,000,000'
    }, {
      order: 2,
      count: 5,
      isBonus: true,
      money: 30000000,
      moneyString: '30,000,000'
    }, {
      order: 3,
      count: 5,
      isBonus: false,
      money: 1500000,
      moneyString: '1,500,000'
    }, {
      order: 4,
      count: 4,
      isBonus: null,
      money: 50000,
      moneyString: '50,000'
    }, {
      order: 5,
      count: 3,
      isBonus: null,
      money: 5000,
      moneyString: '5,000'
    }, 
  ];

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a-b, 0);
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getCompareCount (lottoNumber) {
    let count = 0;
    this.#numbers.forEach(number => {
      if (lottoNumber.includes(Number(number))) {
        count++;
      }
    });
    return count;
  }

  getIsBonus (lottoNumber) {
    console.log(lottoNumber, this.#bonusNumber);
    if (lottoNumber.includes(Number(this.#bonusNumber))) {
      return true;
    } else if (!lottoNumber.includes(Number(this.#bonusNumber))) {
      return false;
    }
  }

  // 순위 결정
  getOrder(compareCount, isBonus) {
    let order;
    const filterAsCount = this.#prizeAsCount.filter(prize => {
      return compareCount === prize.count;
    });
    
    // 등수
    if (filterAsCount.length > 1) {
      order = isBonus ? 2 : 3
    } else if (filterAsCount.length === 1) {
      order = filterAsCount[0].order;
    } else if (filterAsCount.length === 0) {
      order = 6;
    }

    return order;
  }

  getMoney(order) {
    return this.#prizeAsCount.filter(prize => prize.order === order)[0].money;
  }

  printResult(order) {
    const prize = this.#prizeAsCount.filter(prize => prize.order === order)[0];
    const message = `${prize.order}등: ${prize.count}개 번호 일치 ${prize.isBonus ? '+ 보너스 번호 일치 /' : '/'} ${prize.moneyString}원`
    MissionUtils.Console.print(message);
  }
}

export default Lotto;
