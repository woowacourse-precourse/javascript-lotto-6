const purchaseMoneyInputValidator = {
  format(rawInput) {
    if (rawInput.length === 0) {
      throw new Error(
        '[ERROR] 구입금액을 입력해 주세요.\n(입력예시 : "14000")\n'
      );
    }
    if (!/^[0-9]+$/.test(rawInput)) {
      throw new Error(
        '[ERROR] 1000원 단위의 숫자만 입력해 주세요.\n(입력예시 : "14000")\n'
      );
    }
  },

  data(rawInput) {
    const input = Number(rawInput);

    if (input % 1000 !== 0) {
      throw new Error(
        '[ERROR] 1000원 단위로 입력해 주세요.\n(입력예시 : "14000")\n'
      );
    }
  },
};

export default purchaseMoneyInputValidator;
