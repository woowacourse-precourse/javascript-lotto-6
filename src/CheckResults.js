function checkResults(lottos, winningNumbers, bonusNumber) {
  const results = {
    3: 0,
    4: 0,
    5: 0,
    5.5: 0,
    6: 0,
  };

  if (!Array.isArray(winningNumbers) || winningNumbers.length !== 6) {
    throw new Error("유효하지 않은 당첨 번호를 입력했습니다.");
  }

  for (const lotto of lottos) {
    const numbers = lotto.getNumbers();
    const matchingNumbers = numbers.filter((num) =>
      winningNumbers.includes(num)
    );

    if (matchingNumbers.length === 6) {
      results[6]++;
    } else if (matchingNumbers.length === 5 && numbers.includes(bonusNumber)) {
      results[5.5]++;
    } else {
      results[matchingNumbers.length]++;
    }
  }

  return results;
}

module.exports = checkResults;
