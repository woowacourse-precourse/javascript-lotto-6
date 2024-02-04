class LottoMachine {
  checkLotto(lottoNumber) {
    const bingo = [1, 2, 3, 4, 5, 6];
    const plusNumber = 9;
    const matchedNumbersCount = lottoNumber.filter(item =>
      bingo.includes(item),
    ).length;
    // true는 숫자로 1 false는 0
    const bonusNumberCount = Number(lottoNumber.includes(plusNumber));

    console.log('lotto number check', bonusNumberCount, matchedNumbersCount);

    // 보너스 번호 없이 6
    if (matchedNumbersCount === 6) return 1;
    // 보너스 포함 6개일때
    else if (matchedNumbersCount + bonusNumberCount === 6) return 2;
    // 보너스 포함 개수 등수 3등부터
    else if (matchedNumbersCount + bonusNumberCount === 5) return 3;
    else if (matchedNumbersCount + bonusNumberCount === 4) return 4;
    else if (matchedNumbersCount + bonusNumberCount === 3) return 5;
  }
}

export default LottoMachine;
