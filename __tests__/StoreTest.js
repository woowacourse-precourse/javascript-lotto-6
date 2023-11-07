import Store from "../src/Store.js";

describe("스토어 클래스 테스트", () => {
  test("구입 금액에 따른 로또 개수를 올바르게 구하는지 테스트", async () => {
    const store = new Store();
    Store.inputMoney = jest.fn().mockReturnValue(5000);
    await store.receivePayment();
    expect(store.calculateLottoAmount()).toBe(5);
  });
});
