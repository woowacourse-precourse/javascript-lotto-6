import View from '../src/View/View';
import { mockQuestions } from './ApplicationTest';

describe('함수 기능 테스트', () => {
  test('당첨번호 데이터 형식 변경 테스트', async () => {
    const input = ['1,2,3,4,5,6'];
    const output = [1, 2, 3, 4, 5, 6];

    mockQuestions(input);
    const view = new View();

    const result = await view.readWinningNumber();

    expect(result).toEqual(output);
  });
});
