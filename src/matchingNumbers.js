const matchingNumbers = (matchnumber, bonusNumber, results) => {
  if (matchnumber === 6) {
    results["1등"] += 1;
  } else if (matchnumber === 5 && bonusNumber) {
    results["2등"] += 1;
  } else if (matchnumber === 5) {
    results["3등"] += 1;
  } else if (matchnumber === 4) {
    results["4등"] += 1;
  } else if (matchnumber === 3) {
    results["5등"] += 1;
  }
  return results;
};
export default matchingNumbers;
