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

  test('로또 번호에 1~45까지의 정수 외 번호 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2.5, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test('로또 번호가 3개 정답일때', () => {
    const winningNumbers = ([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
    const result = lotto.matchLotto(winningNumbers, bonusNumber);
  
    expect(result).toEqual('three');
  });

  test('로또 번호가 4개 정답일때', () => {
    const winningNumbers = ([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 9, 10]);
    const result = lotto.matchLotto(winningNumbers, bonusNumber);
  
    expect(result).toEqual('four');
  });

  test('로또 번호가 5개 정답일때', () => {
    const winningNumbers = ([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 10]);
    const result = lotto.matchLotto(winningNumbers, bonusNumber);
  
    expect(result).toEqual('five');
  });

  test('로또 번호가 5개 정답, 보너스 정답일때', () => {
    const winningNumbers = ([ 1, 2, 3, 4, 5, 7 ]);
    const bonusNumber = 7;
    const lotto = new Lotto([ 1, 2, 3, 4, 5, 6 ]);
    const result = lotto.matchLotto(winningNumbers, bonusNumber);
  
    expect(result).toEqual('bonus');
  });

  test('로또 번호가 전부 정답일때', () => {
    const winningNumbers = ([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.matchLotto(winningNumbers, bonusNumber);
  
    expect(result).toEqual('all');
  });

  test('로또 번호가 2개만 정답일때', () => {
    const winningNumbers = ([1, 2, 3, 4, 5, 6]);
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 13, 14, 15, 16]);
    const result = lotto.matchLotto(winningNumbers, bonusNumber);
  
    expect(result).toEqual('zero');
  });
});
