class Utils {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}

  static checkingFirstPlace(lotto, winningNumber) {
    return [...new Set([...lotto, ...winningNumber])].length === 6;
  }

  static checkingSecondPlace(lotto, winningNumber, bonusNumber) {
    return (
      [...new Set([...lotto, ...winningNumber])].length === 7 &&
      lotto.includes(bonusNumber)
    );
  }

  static checkingThirdPlace(lotto, winningNumber, bonusNumber) {
    return (
      [...new Set([...lotto, ...winningNumber])].length === 7 &&
      !lotto.includes(bonusNumber)
    );
  }

  static checkingForthPlace(lotto, winningNumber) {
    return [...new Set([...lotto, ...winningNumber])].length === 8;
  }

  static checkingFifthPlace(lotto, winningNumber) {
    return [...new Set([...lotto, ...winningNumber])].length === 9;
  }
}

export default Utils;
