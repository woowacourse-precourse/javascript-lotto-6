import { MissionUtils } from '@woowacourse/mission-utils';
import LottoHandler from '../src/lottoHandler/LottoHandler';
import View from '../src/view/View';


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
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');

    const mockFn = jest.spyOn(MissionUtils.Random, 'pickUniqueNumbersInRange');
    mockFn.mockReturnValue([6, 5, 4, 3, 2, 1]);
    const output = '[1, 2, 3, 4, 5, 6]';

    handler.createLotto().printLottoNumbers();

    expect(logSpy).toHaveBeenCalledWith(output);
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

  test('당첨 통계 출력하기', () => {
    const view = new View();
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');

    const input = {
      FIFTH: 1,
      FORTH: 0,
      THIRD: 1,
      SECOND: 0,
      FIRST: 0,
    };
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    view.printRankResult(input);

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
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
