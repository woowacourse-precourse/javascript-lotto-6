import App from "../src/App.js";

describe('로또 발행 테스트', () => {
  test('로또 하나의 금액은 1,000원이며 입력 받은 금액에 맞게 로또를 발행해야 한다.', () => {
    
    const app = new App();

    expect(app.issueLotto(3).length).toEqual(3);
  });
});
