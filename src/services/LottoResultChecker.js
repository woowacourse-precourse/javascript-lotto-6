class LottoResultChecker {
  static checkResult(numbers, { win, bonus }) {
    const cntCorrect = numbers.filter((number) => win.includes(number)).length;
    const checkBonus = numbers.includes(bonus);
    return this.determineResult(cntCorrect, checkBonus);
  }

  static determineResult(cntCorrect, checkBonus) {
    const prizeMap = {
      6: "6개 일치 (2,000,000,000원)",
      5: checkBonus
        ? "5개 일치, 보너스 볼 일치 (30,000,000원)"
        : "5개 일치 (1,500,000원)",
      4: "4개 일치 (50,000원)",
      3: "3개 일치 (5,000원)",
    };

    return prizeMap[cntCorrect] || "None";
  }
}

export default LottoResultChecker;
