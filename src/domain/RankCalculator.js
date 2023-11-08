/* eslint-disable lines-between-class-members */
import { CONVERTER_VAR, RANK, RANK_BY_COUNT, RANK_BY_PRIZE, RANK_STANDARD , REGEX } from '../constants/constant';

class RankCalculator {
  #totalRank;
  #totalPrizeMoney;
  #totalProfit;

  constructor(){
    const { first, second, third, fourth, fifth} = RANK
    this.#totalRank = new Map([
      [fifth,0],[fourth,0],[third,0],[second,0],[first,0]
    ]);
    this.#totalPrizeMoney = 0;
  }
  
  #calculateRightNum(answerLotto, userLotto){
    let count = 0;
    userLotto.forEach(num => {
      if(answerLotto.includes(num)) count += 1;
    });
    return count;
  }

  #isBonusIncluded(answerLotto, userLotto){
    const bonusNum = [...userLotto].pop();
    return answerLotto.includes(bonusNum)
  }

  #setSecondOrThirdRank(wasBonus){
    const { second, third} = RANK;
    if(wasBonus){
      let result = this.#totalRank.get(second);
      this.#totalRank.set(second, result += 1);
    }
    let result = this.#totalRank.get(third);
    this.#totalRank.set(third, result += 1);
  }

  #setElseRank(count){
    const { standardOfRank } = RANK_STANDARD;
    if(count >= standardOfRank) {
      let result = this.#totalRank.get(RANK_BY_COUNT[count]);
      this.#totalRank.set(RANK_BY_COUNT[count], result += 1);
    }
  }

  calculateRank(userLotto, lottoMap){
    const { standardOfBonus } = RANK_STANDARD;
    lottoMap.forEach(correctLotto => {
      const count = this.#calculateRightNum(correctLotto, userLotto);
      if(count === standardOfBonus){
        let isBonusIncluded = false;
        isBonusIncluded = this.#isBonusIncluded(correctLotto, userLotto);
        this.#setSecondOrThirdRank(isBonusIncluded);
      }
      this.#setElseRank(count);
    });
  }

  calculatePrizeMoney(){
    this.#totalRank.forEach((count, rank) => {
      this.#totalPrizeMoney += RANK_BY_PRIZE[rank] * count;
    })
  }

  calculateProfit(money){
    const { everyThreeUnit } = REGEX;
    const { comma } = CONVERTER_VAR;
    
    const profit = ((this.#totalPrizeMoney / money) * 100).toFixed(1);
    const num  = profit.toString().replace(everyThreeUnit, comma);
    return num;
  }

  getTotalRank(){
    return this.#totalRank;
  }
}

export default RankCalculator