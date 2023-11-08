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

  test("로또 번호에 0 ~ 45 이외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 값이 있다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "10a"]);
    }).toThrow("[ERROR]");
  });

  test("로또를 개수만큼 오름차순으로 발행하는지 확인한다.", () => {
    const lottos = Lotto.makeLottos(5);
    const lottoNumberArray = [];
    lottos.forEach(lotto => lottoNumberArray.push(lotto.getLottoNumber()));
    expect(lottoNumberArray.length).toEqual(5);
    lottoNumberArray.forEach((lotto) => {expect(lotto).toEqual(lotto.sort((a, b) => a - b))});
  })

  test("로또 당첨 번호와 비교하여 일치하는 개수의 따른 인덱스 번호를 반환한다.", () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const myLotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(myLotto.checkLottoWinning(winningLotto, 7)).toEqual(3);
  });
});
