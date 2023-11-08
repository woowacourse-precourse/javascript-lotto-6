import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

describe("checkWinningDetail() 테스트", () => {
  test("3개가 일치하는 경우 5등", async () => {
    const app = new App();
    app.checkWinningDetail(3, 0); //당첨 번호 3개 일치
    expect(app.winningDetail).toEqual([1, 0, 0, 0, 0]); // 5등인 로또 수 1개 증가

    app.checkWinningDetail(3, 1); //당첨 번호 3개 일치, 보너스 번호 일치
    expect(app.winningDetail).toEqual([2, 0, 0, 0, 0]);
  });

  test("4개가 일치하는 경우 4등", async () => {
    const app = new App();
    app.checkWinningDetail(4, 0); //당첨 번호 4개 일치
    expect(app.winningDetail).toEqual([0, 1, 0, 0, 0]); // 4등인 로또 수 1개 증가

    app.checkWinningDetail(4, 1); //당첨 번호 4개 일치, 보너스 번호 일치
    expect(app.winningDetail).toEqual([0, 2, 0, 0, 0]);
  });

  test("5개가 일치하는 경우 3등", async () => {
    const app = new App();
    app.checkWinningDetail(5, 0); //당첨 번호 5개 일치
    expect(app.winningDetail).toEqual([0, 0, 1, 0, 0]); // 3등인 로또 수 1개 증가
  });

  test("5개가 일치하고 보너스 볼 일치하는 경우 2등", async () => {
    const app = new App();
    app.checkWinningDetail(5, 1); //당첨 번호 5개 일치, 보너스 번호 일치
    expect(app.winningDetail).toEqual([0, 0, 0, 1, 0]);
  });

  test("6개가 일치하는 경우 1등", async () => {
    const app = new App();
    app.checkWinningDetail(6, 0); //당첨 번호 6개 일치
    expect(app.winningDetail).toEqual([0, 0, 0, 0, 1]); // 1등인 로또 수 1개 증가

    app.checkWinningDetail(6, 1); //당첨 번호 6개 일치, 보너스 번호 일치
    expect(app.winningDetail).toEqual([0, 0, 0, 0, 2]);
  });
});

describe("checkLottos() 테스트", () => {
  test("1등~5등까지 각각 1개씩 있는 경우", async () => {
    const app = new App();
    app.lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 1등
      new Lotto([1, 2, 3, 4, 5, 7]), // 2등
      new Lotto([1, 2, 3, 4, 5, 8]), //3등
      new Lotto([1, 2, 3, 4, 9, 10]), //4등
      new Lotto([1, 2, 3, 10, 11, 12]), //5등
    ];
    app.winningNum = new Lotto([1, 2, 3, 4, 5, 6]);
    app.bonusNum = 7;
    app.checkLottos();
    expect(app.winningDetail).toEqual([1, 1, 1, 1, 1]);
  });
  test("1등이 10개 있는 경우", async () => {
    const app = new App();
    app.lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
    ];
    app.winningNum = new Lotto([1, 2, 3, 4, 5, 6]);
    app.bonusNum = 7;
    app.checkLottos();
    expect(app.winningDetail).toEqual([0, 0, 0, 0, 10]);
  });
});
