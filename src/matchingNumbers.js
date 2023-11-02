const matchingNumbers = (matchnumber, bonusNumber, lotto, results) => {
  if (matchnumber === 6) {
    results.push("1등");
  } else if (matchnumber === 5 && lotto[i].includes(bonusNumber)) {
    results.push("2등");
  } else if (matchnumber === 5) {
    results.push("3등");
  } else if (matchnumber === 4) {
    results.push("4등");
  } else if (matchnumber === 3) {
    results.push("5등");
  }
  return results;
};
export default matchingNumbers;
