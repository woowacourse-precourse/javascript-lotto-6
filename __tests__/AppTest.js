import App from "../src/App";

describe("App 클래스 테스트", () => {
  test("구입금액은 숫자여야 한다.", () => {
    //given
    const app = new App();

    //when
    const wrongPurchasePrice = "구입금액8000";

    //then
    expect(wrongPurchasePrice).isMatch(/^d+$/);
  });

  test("구입금액은 1000원 단위로 나누어 떨어져야 한다.", () => {
    //given
    const app = new App();

    //when
    const wrongPurchasePrice = "8888";

    //then
    expect(() => parseInt(wrongPurchasePrice) % 1000).isEqual(0);
  });
});
