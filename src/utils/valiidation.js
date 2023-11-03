const validation = {
  hasSameNumber: function (numbers) {
    console.log("numbers", numbers);
    const uniqueSet = new Set(numbers);
    console.log("set", uniqueSet);
    if (uniqueSet.size !== numbers.length)
      throw new Error("[ERROR] 겹치는 숫자가 있습니다.");
  },
  isInValidRange: function (numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR]1~45 사이로 입력해주세요.");
      }
    });
  },
};
export default validation;
