/* eslint-disable no-new */
// 작동안됨.. 뭐가 문젤까.......
import App from '../src/App.js';

describe('로또 클래스 테스트', () => {
  test('로또 당첨 결과를 확인한다.', () => {
    const app = new App();
    const arrayofLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
    ];
    const inputNumbers = {
      winning: [1, 2, 3, 4, 5, 6],
      bonus: 7,
    };
    const answer = [2, 2, 0, 1, 0];
    const qusetion = app.test(arrayofLotto, inputNumbers);
    expect(qusetion).toBe(answer);
  });
});
