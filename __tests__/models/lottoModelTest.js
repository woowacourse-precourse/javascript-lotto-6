import lottoModel from '../../src/models/lottoModel.js';

describe('입력된 당첨 번호 문자열을 숫자로 이루어진 배열로 바꾼다.', () => {
  test('문자열 당첨 번호가 숫자가 담긴 배열로 변환 된다.', () => {
    const inputs = ['1,2,3,4,5,6', '1,3,5,7,9', '1,7,17,27,37,45'];
    const outputs = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 7, 9],
      [1, 7, 17, 27, 37, 45],
    ];

    outputs.forEach((output, index) => {
      expect(lottoModel.convertToNumber(inputs[index])).toEqual(output);
    });
  });

  test('사용자가 숫자가 아닌 값을 입력했을 때 NaN로 변환 된다.', () => {
    const inputs = ['1,woowa,3,4,5,6', '1,3,!!,7,9', '1,7,17,27,37,룰루'];
    const outputs = [
      [1, NaN, 3, 4, 5, 6],
      [1, 3, NaN, 7, 9],
      [1, 7, 17, 27, 37, NaN],
    ];

    outputs.forEach((output, index) => {
      expect(lottoModel.convertToNumber(inputs[index])).toEqual(output);
    });
  });
});
