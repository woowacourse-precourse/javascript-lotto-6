import Lotto from "../src/Lotto.js";
import App from '../src/App.js';

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("getEarningRate 함수(수익률 계산)가 잘되는지 확인한다.", () => {
    const result = App.getEarningRate([1,0,0,0,0], 8000);

    expect(result).toBe(62.5);
  });



  // 아래에 추가 테스트 작성 가능
});
