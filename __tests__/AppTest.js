import App from "../src/App.js";

describe('로또 발행 테스트', () => {
  test.each([
    [3]
  ])('로또 발행 확인', (input) => {
    
    const app = new App();

    expect(app.issueLotto(input).length).toEqual(input);
  });
})