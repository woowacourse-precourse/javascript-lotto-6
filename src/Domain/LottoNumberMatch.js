class LottoNumberMatch {
  RANK_MATCH_ARRAY = new Array(5).fill(0);

  matchResult(purchasedArrays, lottoNumberArray, bonusNumber) {
    for (let purchasedArray of purchasedArrays) {
      const INTERSECTION = purchasedArray.filter((it) =>
        lottoNumberArray.includes(it)
      );
      const INTERSECTION_LENGTH = INTERSECTION.length;
      this.arrayIncrement(INTERSECTION_LENGTH, purchasedArray, bonusNumber);
    }
    return this.RANK_MATCH_ARRAY;
  }

  arrayIncrement(intersectionLength, purchasedArray, bonusNumber) {
    this.matchThree(intersectionLength);
    this.matchFour(intersectionLength);
    this.matchFive(intersectionLength, purchasedArray, bonusNumber);
    this.matchSix(intersectionLength);
  }

  matchThree(intersectionLength) {
    if (intersectionLength === 3) {
      return this.RANK_MATCH_ARRAY[0]++;
    }
  }

  matchFour(intersectionLength) {
    if (intersectionLength === 4) {
      return this.RANK_MATCH_ARRAY[1]++;
    }
  }

  matchFive(intersectionLength, purchasedArray, bonusNumber) {
    if (intersectionLength === 5) {
      if (purchasedArray.includes(bonusNumber)) {
        return this.RANK_MATCH_ARRAY[3]++;
      }
      return this.RANK_MATCH_ARRAY[2]++;
    }
  }

  matchSix(intersectionLength) {
    if (intersectionLength === 6) {
      return this.RANK_MATCH_ARRAY[4]++;
    }
  }
}

export default LottoNumberMatch;
