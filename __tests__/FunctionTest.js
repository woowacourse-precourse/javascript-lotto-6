import App from "../src/App.js";
import Lotto from "../src/Lotto.js";

describe("함수 기능 테스트", () => {
  test("getPrice() 함수 테스트", async () => {
    expect(() => {
      const app = new App();
      app.getPrice("2000");
    }).not.toThrow();
  });

  test("getSixNum() 함수 테스트", async () => {
    expect(() => {
      const app = new App();
      app.getSixNum("10,9,8,7,6,5");
    }).not.toThrow();
  });

  test("checkSixNum() 함수 테스트", async () => {
    expect(() => {
      const lotto = new Lotto([10,9,8,7,6,5]);
      lotto.checkSixNum([10,9,8,7,6,5]);
    }).not.toThrow();
  });

  test("getBonusNum() 함수 테스트", async () => {
    expect(() => {
      const lotto = new Lotto([6,3,9,2,1,7]);
      lotto.getBonusNum("10");
    }).not.toThrow();
  });
});