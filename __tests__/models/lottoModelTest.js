import lottoModel from '../../src/models/lottoModel.js';

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

test('문자열 당첨 번호가 숫자가 아닌 값의 배열로 변환 된다.', () => {
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
