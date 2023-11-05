import App from '../src/App';

describe('App - generateLottos() 테스트', () => {
  test('주어진 수량에 맞는 로또를 생성한다.', () => {
    const amount = 4;
    const app = new App();
    app.generateLottos(amount);
  });
});
