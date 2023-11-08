import { MissionUtils } from "@woowacourse/mission-utils";

import OutputView from "../../src/view/outputView";
import Lotto from "../../src/Lotto";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('outputView 테스트', () => {
  test('로또 개수 출력', () => {
    //given
    const logSpy = getLogSpy();
    
    const lottoCount = 3;
    const log = '3개를 구매했습니다.'
  
    //when
    OutputView.showLottoCount(lottoCount);
    
    //then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test('로또 개수만큼 티켓 출력', () => {
    //given
    const logSpy = getLogSpy();

    const lottoTickets = [
      new Lotto([1,2,3,4,5,6]),
      new Lotto([7,8,9,10,11,12]),
      new Lotto([13,14,15,16,17,18])
    ];
    const logs = [
      '[1, 2, 3, 4, 5, 6]',
      '[7, 8, 9, 10, 11, 12]',
      '[13, 14, 15, 16, 17, 18]'
    ];

    //when
    OutputView.showLottoNumbers(lottoTickets);

    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또 당첨내역 출력', () => {
    //given
    const logSpy = getLogSpy();

    const result = {
      FIFTH: 1,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 1
    }
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 1개'
    ]

    //when
    OutputView.showLottoResult(result);

    //then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    })
  })

  test('로또 결과 출력', () => {
    //given
    const logSpy = getLogSpy();

    const profits = 5000;
    const lottoPrice = 8000;
    const log = '총 수익률은 62.5%입니다.';

    //when
    OutputView.showRate(profits,lottoPrice);

    //then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  })
})
