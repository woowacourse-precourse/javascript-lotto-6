import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../../src/views/View';
import LottoResultCalculator from '../../src/models/LottoResultCalculator';
import LottoService from '../../src/models/LottoService';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('View - LottoService 통합 테스트', () => {
  let view;
  let lottoService;
  let resultCalculator;

  beforeEach(() => {
    // 테스트 실행 전 초기화
    resultCalculator = new LottoResultCalculator();
    lottoService = new LottoService(resultCalculator);
    view = new View();
    logSpy = getLogSpy();
  });

  it('구매 금액 입력 및 로또 구매 결과 출력', async () => {
    const mockInputs = ['3000']; // 사용자가 입력할 구매 금액
    mockQuestions(mockInputs);

    await view.readMoneyAmount(); // 사용자 입력 처리

    // 로또 구매 실행
    const tickets = Array.from({ length: 3 }, (_, index) => ({
      getNumbers: () => [
        index + 1,
        index + 2,
        index + 3,
        index + 4,
        index + 5,
        index + 6,
      ],
    }));
    lottoService.setLottoTickets(tickets);

    // 출력 스파이를 통해 로또 구매 결과가 올바르게 출력되었는지 확인
    view.printLottoPurchaseResult(tickets);
    expect(logSpy).toHaveBeenCalledTimes(6); // 공백 한 줄 + 로또 구매 메시지 + 로또 번호 3세트 + 공백 한 줄

    // 출력 내용 검증
    const expectedMessages = [
      expect.any(String), //공백 줄
      expect.stringContaining('개를 구매했습니다.'), // 로또 구매 메시지 확인
      expect.stringContaining('1, 2, 3, 4, 5, 6'), // 첫 번째 로또 번호
      expect.stringContaining('2, 3, 4, 5, 6, 7'), // 두 번째 로또 번호
      expect.stringContaining('3, 4, 5, 6, 7, 8'), // 세 번째 로또 번호
      expect.any(String), // 공백 줄
    ];

    expectedMessages.forEach((message, index) => {
      expect(logSpy.mock.calls[index][0]).toEqual(message);
    });
  });
});
