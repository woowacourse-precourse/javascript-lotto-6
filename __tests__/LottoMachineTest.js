import LottoMachine from '../src/\bDomain/LottoMachine';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 머신 객체 테스트', () => {
  test('지불 가격에 맞게 로또를 발행해주는가', () => {
    //given
    const mockPurchaseAmount = 3000;
    const mockResult = [
      [1, 3, 5, 7, 9, 10, 15],
      [3, 5, 11, 16, 32, 38],
      [9, 10, 15, 17, 19, 22],
    ];

    mockRandoms(mockResult);

    //when
    const result = LottoMachine.drawLottos(mockPurchaseAmount);

    //then
    expect(result).toEqual(mockResult);
  });
});
