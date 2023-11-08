import { MissionUtils } from "@woowacourse/mission-utils";
import Inspector from "./utils/Inspector.js";

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
    this.#validate(numbers, bonusNumber);
    this.#numbers = numbers.sort((a, b) => a-b, 0);
    this.#bonusNumber = bonusNumber;
  }
  
  #validate(splited, bonusNumber) {
    const inspector = new Inspector();
    if (splited.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const ableWinnerLotto = splited ? inspector.getIsAble(splited) : null;
    inspector.getIsDuplicate(ableWinnerLotto, bonusNumber);
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
    // console.log(lottoNumber, this.#bonusNumber);
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

  printResult(winCount) { // {"1" : 1, "2": 2, "3": 0}
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winCount["5"] || 0}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winCount["4"] || 0}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winCount["3"] || 0}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winCount["2"] || 0}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winCount["1"] || 0}개`);
  }
}

export default Lotto;
