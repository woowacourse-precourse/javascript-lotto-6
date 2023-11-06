import Utils from "./Utils.js";

class Validator {
  isEmpty(input) {
    return input === "";
  }

  isCorrectCost(input) {
    const numberedInput = Number(input);
    return isNaN(numberedInput) || Number(numberedInput) % 1000 !== 0;
  }

  isLength(input, length) {
    return Utils.splitInput(input).length === length;
  }

  isNumber(input) {
    return (
      Utils.splitInput(input).find((element) => isNaN(Number(element))) ===
      undefined
    );
  }

  isRange(input) {
    return (
      Utils.splitInput(input).find(
        (element) => Number(element) < 1 || Number(element) > 45
      ) === undefined
    );
  }

  isCorrectWinnings(input) {
    return (
      !this.isLength(input, 6) || !this.isNumber(input) || !this.isRange(input)
    );
  }

  isWhiteSpace(input) {
    return input.includes(" ");
  }

  isRepeat(input) {
    return (
      Utils.splitInput(input).length === new Set(Utils.splitInput(input)).size
    );
  }

  isCorrectBonus(input) {
    return (
      !this.isNumber(input) ||
      !this.isLength(input, 1) ||
      Number(input) < 1 ||
      Number(input) > 45
    );
  }
}

export default Validator;
