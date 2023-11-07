// GetPrize.js
function getPrize(matchingCount, isBonusMatch) {
  const prizeMap = {
    3: "5,000원",
    4: "50,000원",
    5: "1,500,000원",
    5.5: "30,000,000원",
    6: "2,000,000,000원",
  };

  if (matchingCount === 5.5) {
    return isBonusMatch
      ? "5개 일치, 보너스 볼 일치 (30,000,000원)"
      : "당첨 등수 없음";
  }

if (prizeMap[matchingCount]) {
  if (isBonusMatch) {
    return `${matchingCount}개 일치, 보너스 볼 일치 (${prizeMap[5.5]})`;
  }
  return `${matchingCount}개 일치 (${prizeMap[matchingCount]})`;
}
return "당첨 번호 없음";
}

module.exports = getPrize;
