import Utils from './Utils';

class LottoUtils {
  constructor(lottos) {
    this.lottos = lottos;
  }

  // 각 로또 일치하는 숫자 갯수
  matchingCountToArray(winningNumbers) {
    const matchingCount = [];
    for (let i = 0; i < this.lottos.length; i++) {
      matchingCount.push(this.lottos[i].getMatchedCount(winningNumbers));
    }
    return matchingCount;
  }
  // 6개의 번호와 보너스 번호를 확인하여, 일치하는 숫자를 객체로 반환한다.
  matchingCountToObject(matchingCountToArray, bonusNumber) {
    let matchingCountsObject = {};
    for (let i = 0; i < matchingCountToArray.length; i++) {
      let matchingCount = matchingCountToArray[i];
      if (matchingCount === 5) {
        const bonusLotto = this.lottos[i].getNumbers();
        matchingCount = this.checkBonusNumber(bonusLotto, bonusNumber);
      }
      matchingCountsObject = Utils.addOrCreateProperty(
        matchingCountsObject,
        matchingCount,
      );
    }
    return matchingCountsObject;
  }
  // 보너스 번호 여부 확인
  checkBonusNumber(bonusLotto, bonusNumber) {
    if (bonusLotto.includes(Number(bonusNumber))) {
      return 'bonus';
    }
    return '5';
  }
}
export default LottoUtils;
