class BonusValid {
  BonusIsValid(number, winningNumbers) {
    console.log(winningNumbers);
    if (number.includes(" ")) {
      throw new Error("[ERROR] 공백이 입력되어 있습니다.");
    }
    if (winningNumbers.includes(Number(number))) {
      throw new Error("[ERROR] 당첨 번호와 중복된 번호가 있습니다.");
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error("[ERROR] 문자가 포함되어 있습니다.");
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 1 이상 45 이하의 숫자만 입력해주세요.");
    }
    return true;
  }
}

export default BonusValid;
