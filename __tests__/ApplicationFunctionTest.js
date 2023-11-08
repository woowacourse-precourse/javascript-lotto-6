import { MissionUtils } from '@woowacourse/mission-utils';
import LottoHandler from '../src/lottoHandler/LottoHandler';

describe('함수별 기능 테스트', () => {
  test('구매 로또 개수 추출하기', () => {
    const handler = new LottoHandler();
    const input = 3000;

    const result = handler.getLottoCount(input);
    const output = 3;

    expect(result).toEqual(output);
  });

  test('로또 번호 오름차순으로 정렬하기', () => {
    const handler = new LottoHandler();

    const mockFn = jest.spyOn(MissionUtils.Random, 'pickUniqueNumbersInRange');
    mockFn.mockReturnValue([6, 5, 4, 3, 2, 1]);
    const result = handler.createLotto().getLottoNumbers();
    const output = [1, 2, 3, 4, 5, 6];

    expect(result).toEqual(output);
  });

  test('일치 번호 개수 추출하기', () => {
    const handler = new LottoHandler();
    const input = [3, 4, 0, 7, 2, 3];

    const result = handler.getRanking(input);
    const output = {
      FIFTH: 2,
      FORTH: 1,
      THIRD: 0,
      SECOND: 1,
      FIRST: 0,
    };

    expect(result).toEqual(output);
  });

  test('당첨 상금 추출하기', () => {
    const handler = new LottoHandler();
    const input = {
      FIFTH: 1,
      FORTH: 1,
      THIRD: 1,
      SECOND: 0,
      FIRST: 0,
    };

    const result = handler.getPrize(input);
    const output = 1555000;

    expect(result).toEqual(output);
  });
});
