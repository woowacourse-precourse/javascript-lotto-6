import LottoGenerator from '../src/module/model/LottoGenerator.js';
import {MissionUtils} from "@woowacourse/mission-utils";

const mockFN = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 생성기 클래스 테스트', () => {
  test('입력된 횟수에 맞춰서 로또가 적절하게 생성되었는지 확인한다.', () => {
    const testData = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];

    mockFN(testData);

    const lottoList = new LottoGenerator(2);

    for (let i = 0; i < 2; i += 1) expect(lottoList.lottoList[i].numbers).toEqual(testData[i]);
  });
});
