import { Random } from "@woowacourse/mission-utils";

const validateLottoNumSet = (lottoNumSets) => {
  const firstLottoNumSet = lottoNumSets[0];
  const isAllEqual = (numSet1, numSet2) => numSet1.every(num => numSet2.includes(num));
  const uniqueLottoNumSets = [firstLottoNumSet];

  lottoNumSets.slice(1).forEach(anotherLottoNumSet => {
    if(isAllEqual(firstLottoNumSet, anotherLottoNumSet)) {
      let newLottoNumSet = [];
      do {
        newLottoNumSet = Random.pickUniqueNumbersInRange(1, 45, 6);
      } while(lottoNumSets.some(numSet => isAllEqual(numSet, newLottoNumSet)));
      uniqueLottoNumSets.push(newLottoNumSet);
    } else { // else를 사용하는 게 더 깔끔해 보입니다!
      uniqueLottoNumSets.push(anotherLottoNumSet);
    }
  });

  return uniqueLottoNumSets;
};

export default validateLottoNumSet;
