import App from "../src/App.js";

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("로또 길이 일치 여부 확인 테스트", () => {
    // when
    const app = new App();
    const lottoList = app.buyLotto(5000);

    // then
    expect(lottoList).toHaveLength(5);
  });
});
