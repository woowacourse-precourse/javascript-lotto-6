import LottoMachine from '../../src/model/LottoMachine';
import { GAME_SETTINGS } from '../../src/constants/GameSettings';
import { generateUniqueNumbers } from '../../src/utils/GenerateRandomNumberUtils';

jest.mock('../../src/utils/GenerateRandomNumberUtils.js', () => ({
  generateUniqueNumbers: jest.fn(),
}));

describe('LottoMachine 클래스', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('각 티켓은 정확히 6개의 숫자를 가지고 있다', () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6];
    generateUniqueNumbers.mockReturnValue(mockNumbers);
    const lottoMachine = new LottoMachine();
    const ticket = lottoMachine.generateTickets(GAME_SETTINGS.TICKET_PRICE)[0];
    expect(ticket.numbers).toHaveLength(GAME_SETTINGS.NUMBERS_PER_TICKET);
  });

  test('생성된 숫자는 1과 45 사이여야 한다', () => {
    const mockNumbers = [1, 11, 15, 17, 22, 45];
    generateUniqueNumbers.mockReturnValueOnce(mockNumbers);
    const lottoMachine = new LottoMachine();
    const ticket = lottoMachine.generateTickets(GAME_SETTINGS.TICKET_PRICE)[0];
    ticket.numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(GAME_SETTINGS.MIN_LOTTO_NUMBER);
      expect(number).toBeLessThanOrEqual(GAME_SETTINGS.MAX_LOTTO_NUMBER);
    });
  });

  test('각 티켓의 숫자는 유일해야 한다', () => {
    const mockNumbers = [1, 2, 3, 4, 5, 6];
    generateUniqueNumbers.mockReturnValueOnce(mockNumbers);
    const lottoMachine = new LottoMachine();
    const ticket = lottoMachine.generateTickets(GAME_SETTINGS.TICKET_PRICE)[0];
    const isUnique = new Set(ticket.numbers).size === ticket.numbers.length;
    expect(isUnique).toBeTruthy();
  });

  test('유효하지 않은 범위의 숫자를 반환할 경우 예외를 던진다', () => {
    const mockInvalidNumbers = [0, -1, 46, 47, 48, 49];
    generateUniqueNumbers.mockReturnValueOnce(mockInvalidNumbers);
    const lottoMachine = new LottoMachine();
    expect(() => lottoMachine.generateTickets(GAME_SETTINGS.TICKET_PRICE)).toThrow();
  });

  test('빈 배열을 반환하는 경우 예외를 던진다', () => {
    generateUniqueNumbers.mockReturnValueOnce([]);
    const lottoMachine = new LottoMachine();
    expect(() => lottoMachine.generateTickets(GAME_SETTINGS.TICKET_PRICE)).toThrow();
  });

  test('중복된 숫자 배열을 반환하는 경우 예외를 던진다', () => {
    generateUniqueNumbers.mockReturnValueOnce([1, 2, 3, 4, 5, 1]);
    const lottoMachine = new LottoMachine();
    expect(() => lottoMachine.generateTickets(GAME_SETTINGS.TICKET_PRICE)).toThrow();
  });

  test('정수가 아닌 경우 예외를 던진다', () => {
    const lottoMachine = new LottoMachine();
    expect(() => lottoMachine.generateTickets('10000')).toThrow();
    expect(() => lottoMachine.generateTickets(10000.123)).toThrow();
  });
});
