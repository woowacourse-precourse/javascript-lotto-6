const winningNumberInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error('[ERROR] 당첨번호를 입력해 주세요\n');
    }
    console.log(!/^[0-9,]+$/.test(rawInput));
    if (!/^[0-9,]+$/.test(rawInput)) {
      throw new Error(
        '[ERROR] 당첨번호는 숫자만 입력이 가능합니다.숫자는(,)를 이용해서 구분해주세요.\n(예시: "1,2,3,4,5,6")\n'
      );
    }
  },

  data(rawInput) {
    const input = rawInput.split(',').map(Number);
    console.log(input);
    // if (input.length !== 6) {
    //   throw new Error('[ERROR] 당첨번호는 6개를 입력해야 합니다.');
    // }
    if (new Set([...input]).size !== 6) {
      throw new Error(
        '[ERROR] 당첨번호는 6개의 중복되지 않는 숫자로 이루어져야 하며, 숫자 범위는 1~45여야 합니다.\n(예시: "1,2,3,4,5,6")\n'
      );
    }

    for (const winningNumber of input) {
      if (winningNumber < 1 || winningNumber > 45) {
        throw new Error(
          '[ERROR] 당첨번호는 6개의 중복되지 않는 숫자로 이루어져야 하며, 숫자 범위는 1~45여야 합니다.\n(예시: "1,2,3,4,5,6")\n'
        );
      }
    }
  },
};

export default winningNumberInputValidator;
