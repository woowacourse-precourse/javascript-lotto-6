import App from "../src/App";

describe("calculateRateOfReturn() 테스트", () => {
  test("당첨이 안된 경우", async () => {
    const app = new App();
    app.cost = 5000;
    app.winningDetail = [0, 0, 0, 0, 0];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(0);
  });

  test("5등 당첨된 경우", async () => {
    const app = new App();
    app.cost = 1000;
    app.winningDetail = [1, 0, 0, 0, 0];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(500);
  });

  test("4등 당첨된 경우", async () => {
    const app = new App();
    app.cost = 1000;
    app.winningDetail = [0, 1, 0, 0, 0];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(5000);
  });

  test("3등 당첨된 경우", async () => {
    const app = new App();
    app.cost = 1000;
    app.winningDetail = [0, 0, 1, 0, 0];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(150000);
  });

  test("2등 당첨된 경우", async () => {
    const app = new App();
    app.cost = 1000;
    app.winningDetail = [0, 0, 0, 1, 0];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(3000000);
  });

  test("1등 당첨된 경우", async () => {
    const app = new App();
    app.cost = 1000;
    app.winningDetail = [0, 0, 0, 0, 1];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(200000000);
  });

  test("5등: 4개, 4등: 0개, 3등: 2개, 2등: 0개, 1등: 1개 당첨", async () => {
    const app = new App();
    app.cost = 10000000;
    app.winningDetail = [4, 0, 2, 0, 1];
    app.calculateRateOfReturn();
    expect(app.rateOfReturn).toEqual(20030.2);
  });
});
