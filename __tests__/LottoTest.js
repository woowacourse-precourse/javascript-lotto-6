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

  test("숫자 범위는 1~45", () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 5, 7]);
    }).toThrow("[ERROR] 당첨 번호의 범위는 1~45 입니다.");
  });

  test("숫자만 입력 받았는지", () => {
    expect(() => {
      new Lotto([1, 'b', 3, 'a', 5, 'c']);
    }).toThrow("[ERROR] 숫자가 아닌 값이 존재합니다.");
  }); 
  
  test("matchLotto 2", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const otherLotto = [1, 2, 10, 14, 22, 45];
      const count = lotto.matchLotto(otherLotto);
      expect(count).toBe(2); 
  });

  test("matchLotto 5", () => {
    const lotto = new Lotto([11, 12, 13, 14, 15, 34]);
    const otherLotto = [11, 12, 14, 15, 34, 35];
    const count = lotto.matchLotto(otherLotto);
    expect(count).toBe(5); 
});

  
});

