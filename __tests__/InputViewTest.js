import InputView from '../src/InputView.js';

describe('stringToNumber', () => {
  let input;
  beforeEach(() => {
    input = new InputView();
  });

  it('쉼표를 기준으로 배열에 담기는지 확인', () => {
    const inputString = '1,2,3,4,5';
    const expectedOutput = [1, 2, 3, 4, 5];

    const result = input.stringToNumber(inputString);

    expect(result).toEqual(expectedOutput);
  });
});
