export default function matchingNumbers(matchnumber, bonusNumber, results) {
  if (matchnumber === 6) {
    results['6개 일치 (2,000,000,000원)'] += 1;
  } else if (matchnumber === 5 && bonusNumber) {
    results['5개 일치, 보너스 볼 일치 (30,000,000원)'] += 1;
  } else if (matchnumber === 5) {
    results['5개 일치 (1,500,000원)'] += 1;
  } else if (matchnumber === 4) {
    results['4개 일치 (50,000원)'] += 1;
  } else if (matchnumber === 3) {
    results['3개 일치 (5,000원)'] += 1;
  }
  return results;
}
