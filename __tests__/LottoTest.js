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
  test("로또 번호 범위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 500]);
    }).toThrow("[ERROR]");
  });
});


describe("로또 getNumbers 메소드 테스트", () => {
  test("번호를 가져온다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1,2,3,4,5,6]);
  });
});

describe("로또 getRank 메소드 테스트", () => {
  test("당첨되지 않았을 때 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([7, 8, 9, 10, 11, 12], 1)).toEqual(undefined);
  });

  test("5등일 때 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([4, 5, 6, 7, 8, 9], 1)).toEqual('FIFTH');
  });

  test("4등일 때 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([3, 4, 5, 6, 7, 8], 1)).toEqual('FOURTH');
  });

  test("3등일 때 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([2, 3, 4, 5, 6, 7], 8)).toEqual('THIRD');
  });

  test("2등일 때 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([2, 3, 4, 5, 6, 7], 1)).toEqual('SECOND');
  });

  test("1등일 때 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toEqual('FIRST');
  });
});

describe("로또 countMatchingNumber 메소드 테스트", () => {
  test("번호가 몇 개 일치하는지 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.countMatchingNumber([4, 5, 6, 7, 8, 9])).toEqual(3);
  });

  test("당첨번호가 하나도 없을 때", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.countMatchingNumber([7, 8, 9, 10, 11, 12])).toEqual(0);
  });
});

describe("로또 hasBonusNumber 메소드 테스트", () => {
  test("보너스 번호가 존재할 때", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonusNumber(3)).toEqual(true);
  });

  test("보너스 번호가 존재하지 않을 때", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonusNumber(42)).toEqual(false);
  });
});