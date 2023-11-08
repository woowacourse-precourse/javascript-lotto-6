import Lotto from "../src/Lotto.js";

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
  
  // 아래에 추가 테스트 작성 가능
  test.each([
    [1, 'b', 'cd', 'efg', 5, 6],
    [1, 2, 3.14, 4, 5, 46],
  ])('로또 번호에 숫자가 아닌 것이 있으면 예외가 발생한다.', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR]');
  });

  test.each([
    [1, 2, 3, 4, 0, 6],
    [1, 2, 3, 4, 5, 46],
  ])(
    '로또 번호에 1보다 작고 45보다 큰 숫자가 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow('[ERROR]');
    }
  );
});
