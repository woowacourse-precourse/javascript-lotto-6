const bonusNumberInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error('[ERROR] 보너스 번호를 입력해 주세요.\n');
    }
    if (!/^[0-9]+$/.test(rawInput)) {
      throw new Error('[ERROR] 1~45범위 사이의 하나의 숫자만 입력해 주세요.\n');
    }
  },
  data(bonusNumberRawInput, winningNumberRawInput) {
    const bonusNumberInput = Number(bonusNumberRawInput);

    if (Number.isNaN(bonusNumberInput)) {
      throw new Error('[ERROR] 1~45범위 사이의 하나의 숫자만 입력해 주세요.\n');
    }
    if (bonusNumberInput < 1 || bonusNumberInput > 45) {
      throw new Error('[ERROR] 1~45범위 사이의 하나의 숫자만 입력해 주세요.\n');
    }
    const winningNumberInput = winningNumberRawInput.split(',').map(Number);

    if (winningNumberInput.includes(bonusNumberInput)) {
      throw new Error(
        `[ERROR] 당첨번호와 중복되지 않는 숫자를 입력해 주세요.\n(당첨번호 : "${winningNumberRawInput}")\n`
      );
    }
  },
};

export default bonusNumberInputValidator;
