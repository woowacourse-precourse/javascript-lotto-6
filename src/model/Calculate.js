import { Console } from '@woowacourse/mission-utils';

class Calculate {
  // 로또 개수 카운트
  countLottoAmounnt(money) {
    return parseInt(Number(money) / 1000);
  }

  //랭킹 카운트
  async countRanking(lottoList, lotto, bonus) {
    this.countMatch = [0, 0, 0, 0, 0];

    await lottoList.forEach(eachLotto => {
      this.countMatchNumber(eachLotto, lotto, bonus);
    });
    return this.countMatch;
  }

  async countMatchNumber(eachLotto, lotto, bonus) {
    let matchLength = await eachLotto.filter(eachLottoNumber => lotto.includes(eachLottoNumber)).length;
    this.countCorrect(matchLength, eachLotto, bonus);
  }

  countCorrect(matchLength, eachLotto, bonus) {
    switch (matchLength) {
      case 6:
        this.countMatch[4] += 1;
        break;
      case 5:
        this.countMatch[this.chechBonusAndFive(eachLotto, bonus)] += 1;
        break;
      case 4:
        this.countMatch[1] += 1;
        break;
      case 3:
        this.countMatch[0] += 1;
        break;
    }
  }

  chechBonusAndFive(eachLotto, bonus) {
    if (eachLotto.includes(bonus)) return 3;
    return 2;
  }
}

export default Calculate;
