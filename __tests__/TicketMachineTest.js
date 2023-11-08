import { MissionUtils } from '@woowacourse/mission-utils';
import TicketMachine from '../src/Controller/TicketMachine.js';
import LottoTicket from '../src/Model/LottoTicket.js';
import Lotto from '../src/Lotto.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('로또 티켓 클래스에 대한 단위 테스트', () => {
  /* eslint-disable no-await-in-loop */
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const lottoTicket = LottoTicket.getInstance();
  const ticketMachine = new TicketMachine();
  test('티켓이 구매 가능한 갯수 만큼 로또 줄이 작성되는가?', async () => {
    const inputs = ['2000', '3000'];
    const expectedAnswer = [2, 3];

    mockQuestions(inputs);

    for (let i = 0; i < expectedAnswer.length; i += 1) {
      await ticketMachine.buyTicket();
      const { ticket } = lottoTicket;
      expect(ticket.length).toBe(expectedAnswer[i]);
    }
  });

  test('티켓의 각 줄은 Lotto 클래스로 구성이 되어 있는가?', async () => {
    const inputs = ['2000'];

    mockQuestions(inputs);

    await ticketMachine.buyTicket();
    const { ticket } = lottoTicket;

    ticket.forEach((lotto) => {
      expect(lotto instanceof Lotto).toBeTruthy();
    });
  });

  test('티켓의 각 줄의 로또 숫자가 중복되지 않는 고유한 숫자인가?', async () => {
    const inputs = ['2000', '3000'];

    mockQuestions(inputs);

    await ticketMachine.buyTicket();
    const { ticket } = lottoTicket;
    for (let i = 0; i < ticket.length; i += 1) {
      for (let j = i + 1; j < ticket.length; j += 1) {
        expect(JSON.stringify(ticket[i].numbers) === JSON.stringify(ticket[j].numbers)).toBeFalsy();
      }
    }
  });
});
