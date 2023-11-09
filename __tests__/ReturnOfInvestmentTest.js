import LottoGameController from '../src/controllers/LottoGameController';

describe('수익률 테스트', () => {
  test.each([[[[0, 0, 0, 0, 1], 9000]]])('수익률 연산이 맞는지', inputs => {
    expect(
      LottoGameController.returnOfInvestment(inputs[0], inputs[1]),
    ).toEqual('55.6');
  });

  test.each([[[[0, 0, 1, 0, 1], 3000]]])('수익률 연산이 맞는지', inputs => {
    expect(
      LottoGameController.returnOfInvestment(inputs[0], inputs[1]),
    ).toEqual('50166.7');
  });

  test.each([[[[0, 1, 1, 0, 1], 40000]]])('수익률 연산이 맞는지', inputs => {
    expect(
      LottoGameController.returnOfInvestment(inputs[0], inputs[1]),
    ).toEqual('78762.5');
  });
});
