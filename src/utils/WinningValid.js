class WinningValid {
  winningIsValid(numbers) {
    const containsNonDigit = numbers.filter((number) =>
      Number.isInteger(Number(number))
    );
    const filterNumber = numbers.filter((number) => number < 1 || number > 45);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 6개의 숫자를 입력해주세요"); // 임시
    }
    if (filterNumber.length !== 0) {
      throw new Error("[ERROR] 1 이상 45 이하의 숫자만 입력해주세요.");
    }
    if (containsNonDigit.length !== numbers.length) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자가 입력되어 있습니다.");
    }
    return true;
  }
}

export default WinningValid;
