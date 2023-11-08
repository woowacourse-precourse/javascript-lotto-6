import { MissionUtils } from '@woowacourse/mission-utils';
import Vendor from '../src/Vendor.js';

const mockQuestions = (inputs) => {
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

describe('로또 판매상 테스트', () => {
  let vendor;
  beforeEach(() => {
    vendor = new Vendor();
  });

  it('금액이 숫자가 아닐 경우, 예외 처리', async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(['wootecho', '1000']);

    // when
    await vendor.recieveMoney();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 금액은 숫자만 입력가능합니다.'),
    );
  });

  it('금액이 1000원 단위가 아닐 경우, 예외 처리', async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(['600', '1000']);

    // when
    await vendor.recieveMoney();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[ERROR] 로또는 1000원 단위로 구매 가능합니다.'),
    );
  });

  it('1000단위의 금액일 경우, 금액을 리턴', async () => {
    // given
    const MONEY = 10000;
    mockQuestions([money]);

    // when
    const paid = await vendor.recieveMoney();

    // then
    expect(paid).toBe(MONEY);
  });

  it('5000원을 지불한 경우, 티켓 5장을 리턴', async () => {
    // given
    const PAID = 5000;
    const EXPECTED_TICKETS = 5;

    // when
    const tickets = await vendor.issueTickets(PAID);

    // then
    expect(tickets.length).toBe(EXPECTED_TICKETS);
  });
});
