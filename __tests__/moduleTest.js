import Model from '../src/Model.js';

describe('랜덤 숫자 생성 테스트', () => {
  test('입력한 금액만큼 로또를 생성하는지 확인.', () => {
    const model = new Model();
    model.generateRandomLottoNumbers(5000);

    expect(model.getLottoNumbersLength()).toBe(5);
  });
});
