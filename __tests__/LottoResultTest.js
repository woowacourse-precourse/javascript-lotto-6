import { Console } from '@woowacourse/mission-utils';
import LottoResult from '../src/model/LottoResult';

describe('로또 결과 클래스 테스트', () => {
  test('사용자 로또 번호 6자리와 보너스 번호 1자리, 당첨 번호를 넣으면 당첨 결과를 보여준다.', () => {
    const logSpy = jest.spyOn(Console, 'print');

    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = '7';
    const winningNumebrs = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 2, 3, 4, 5, 7],
    ];

    LottoResult.getLottoResult(lottoNumber, bonusNumber, winningNumebrs);

    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
