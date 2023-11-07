/**
 * count, hasBonusNumber 키를 가진 오브젝트 배열을 반환합니다.
 * @param {number[]} winningMatchCounts - 해당 로또에 몇 개의 로또 번호가 일치하는지 개수
 * @param {boolean[]} hasBonusMatches - 해당 로또에 보너스 번호가 포함되어 있는지 여부
 * @returns {{count : number, hasBonusMatches : boolean}[]}
 */
const formatLottoMatchResults = (winningMatchCounts, hasBonusMatches) => {
  return winningMatchCounts.map((winningCount, i) => ({
    count: winningCount,
    hasBonusNumber: hasBonusMatches[i],
  }));
};

export default formatLottoMatchResults;
