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
  test('로또 번호가 1 부터 45 사이의 숫자가 아니면 예외를 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 로또 번호는 1 부터 45 사이의 숫자입니다.');
  });

  test('숫자 또는 콤마 이외의 모든 입력에 예외를 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2 , 'a', 4, '.', 6]);
    }).toThrow('[ERROR] 올바른 형식이 아닙니다.');
  });

  test('로또 번호를 리턴해주는 메서드이다', () => {
    const lotto = new Lotto([11, 12, 13, 14, 15, 16]);

    expect(lotto.getLuckyNumbers()).toEqual([11, 12, 13, 14, 15, 16]);
  });
});
