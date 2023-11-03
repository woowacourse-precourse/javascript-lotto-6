// const valiidation = {
//     const hasSameNumber = (numbers) => {
//         const uniqueSet = new Set(numbers);
//         if (uniqueSet.size !== numbers.length)
//             throw new Error("[ERROR] 겹치는 숫자가 있습니다.");
//     }
// }

const validation = {
  hasSameNumber: function (numbers) {
    const uniqueSet = new Set(numbers);
    if (uniqueSet.size !== numbers.length)
      throw new Error("[ERROR] 겹치는 숫자가 있습니다.");
  },
};
export default validation;
