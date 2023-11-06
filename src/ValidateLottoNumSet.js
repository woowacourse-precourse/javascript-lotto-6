const ValidateLottoNumSet = (lottoNumSet) => {
  const firstLottoNumSet = lottoNumSet[0];
  const isAllEqual = (numSet1, numSet2) => numSet1.every((num) => numSet2.includes(num));

  lottoNumSet.forEach((anotherLottoNumSet, index) => {
    if(index === 0)
      return;
    if(isAllEqual(firstLottoNumSet, anotherLottoNumSet))
      return false;
      // anotherLottoNumSet 다시 생성
  });
};

export default ValidateLottoNumSet;