import { Random } from '@woowacourse/mission-utils';
import Game from '../src/Game.js';
import Lotto from '../src/Lotto.js';

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('당첨 번호 유효성 테스트', () => {
  test('당첨 번호가 쉼표로 구분되지 않을 때, 예외가 발생한다.', () => {
    const input = '123456';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 쉼표로 구분되지 않습니다.'
    );
  });

  test('당첨 번호가 6개가 아닐 때, 예외가 발생한다.', () => {
    const input = '1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow('[ERROR] 입력이 6개가 아닙니다.');
  });

  test('당첨 번호에 중복이 있을 때, 예외가 발생한다.', () => {
    const input = '1,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력에 중복된 값이 있습니다.'
    );
  });

  test('당첨 번호에 숫자가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = 'ㄱ,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow('[ERROR] 입력이 숫자가 아닙니다.');
  });

  test('당첨 번호에 1 ~ 45 사이가 아닌 값이 있을 때, 예외가 발생한다.', () => {
    const input = '46,1,2,3,4,5';
    expect(() => new Game().setWinningNumbers(input)).toThrow(
      '[ERROR] 입력이 1 ~ 45 사이가 아닙니다'
    );
  });
});

describe('보너스 번호 유효성 테스트', () => {
  test('보너스 번호가 숫자가 아닐 때, 예외가 발생한다.', () => {
    const input = 'ㄱ';
    expect(() => new Game().setBonusNumber(Number(input))).toThrow(
      '[ERROR] 입력이 숫자가 아닙니다.'
    );
  });

  test('보너스 번호가 1 ~ 45 사이가 아닐 때, 예외가 발생한다.', () => {
    const input = '46';
    expect(() => new Game().setBonusNumber(Number(input))).toThrow(
      '[ERROR] 입력이 1 ~ 45 사이가 아닙니다'
    );
  });

  test('보너스 번호가 당첨 번호와 중복일 때, 예외가 발생한다.', () => {
    const input = '1';

    const game = new Game();
    game.setWinningNumbers('1,2,3,4,5,6');

    expect(() => game.setBonusNumber(Number(input))).toThrow(
      '[ERROR] 입력이 당첨 번호와 중복되는 값입니다.'
    );
  });
});

describe('로또 구입 기능 테스트', () => {
  test('구입 금액이 1,000원일 때, 하나의 로또를 구입한다.', () => {
    const money = 1000;
    expect(new Game().purchaseLottoTickets(money)).toHaveLength(1);
  });

  test('구입 금액이 8,000원일 때, 8장의 로또를 구입한다.', () => {
    const money = 8000;
    expect(new Game().purchaseLottoTickets(money)).toHaveLength(8);
  });
});

describe('로또 생성 기능 테스트', () => {
  test('로또는 중복되지 않은 번호로 생성된다.', () => {
    const ticket = new Game().createSingleLottoTicket();
    expect(new Set(ticket.getNumbers()).size === ticket.getNumbers().length).toBeTruthy();
  });

  test('로또는 6개의 번호로 생성된다.', () => {
    const ticket = new Game().createSingleLottoTicket();
    expect(ticket.getNumbers()).toHaveLength(6);
  });

  test('로또는 오름차순으로 정렬된 번호로 생성된다.', () => {
    const numbers = [6, 5, 4, 3, 2, 1];
    mockRandoms([numbers]);

    const ticket = new Game().createSingleLottoTicket();

    expect(ticket.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('당첨 내역 계산 기능 테스트', () => {
  const game = new Game();

  game.setWinningNumbers('1,2,3,4,5,6');
  game.setBonusNumber(7);

  test('로또가 1등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6])];
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 2등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 7])];
    const results = { 0: 0, 1: 0, 2: 1, 3: 0, 4: 0, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 3등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 8])];
    const results = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 0, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 4등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 8, 9])];
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 1, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 5등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 8, 9, 10])];
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 1등, 2등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 5, 7])];
    const results = { 0: 0, 1: 1, 2: 1, 3: 0, 4: 0, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 1등, 3등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 5, 8])];
    const results = { 0: 0, 1: 1, 2: 0, 3: 1, 4: 0, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 1등, 4등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 8, 9])];
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 1, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 1등, 5등에 당첨됐을 때', () => {
    const tickets = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 8, 9, 10])];
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 1 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 1등, 2등, 3등, 4등, 5등에 당첨됐을 때', () => {
    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 8, 9]),
      new Lotto([1, 2, 3, 8, 9, 10]),
    ];
    const results = { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });

  test('로또가 당첨되지 않았을 때', () => {
    const tickets = [new Lotto([8, 9, 10, 11, 12, 13])];
    const results = { 0: 1, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    expect(game.calculateTotalWinningResults(tickets)).toEqual(results);
  });
});

describe('총 수익률 계산 기능 테스트', () => {
  const game = new Game();

  test('총 수익률이 자연수일 때', () => {
    const money = 1000;
    const results = { 0: 0, 1: 1, 2: 0, 3: 0, 4: 0, 5: 0 };
    expect(game.calculateTotalReturn(money, results)).toEqual(200000000);
  });

  test('총 수익률이 소수점 두 자리 수 이상일 때', () => {
    const money = 80000;
    const results = { 0: 7, 1: 0, 2: 0, 3: 0, 4: 1, 5: 1 };
    expect(game.calculateTotalReturn(money, results)).toEqual(68.8);
  });

  test('총 수익률이 0일 때', () => {
    const money = 1000;
    const results = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    expect(game.calculateTotalReturn(money, results)).toEqual(0);
  });
});
