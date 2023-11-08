import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('getPurchaseAmount 메서드 테스트', () => {
  test('getPurchaseAmount 메서드는 형식에 맞지않는 입력이 들어왔을경우, ERROR를 throw 해야한다.', async () => {
    //given
    const inputWithString = ["1000j"];

    mockQuestions(inputWithString);

    //when
    const app = new App();
    let error;
    try {
      const purchaseAmount = await app.getPurchaseAmount();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 구입 금액은 1,000원 단위 숫자여야 합니다.");
  });

  test('getPurchaseAmount 메서드는 1000으로 나누어지지않는 입력이 들어왔을경우, ERROR를 throw 해야한다.', async () => {
    //given
    const inputWithNotDivisible = ["1001"];

    mockQuestions(inputWithNotDivisible);

    //when
    const app = new App();
    let error;
    try {
      const purchaseAmount = await app.getPurchaseAmount();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  });

  test('getPurchaseAmount 메서드는 입력값/1000 을 리턴해야한다.', async () => {
    //given
    const input = ["5000"];

    mockQuestions(input);

    //when
    const app = new App();
    const purchaseAmount = await app.getPurchaseAmount();

    //then
    expect(purchaseAmount).toBe(5);
  });
});

describe('printLottoCounts 메서드 테스트', () => {
  test('printLottoCounts 메서드는 로또를 몇개 구매하였는지 출력해야한다.', async () => {
    //given
    const logSpy = getLogSpy();
    const inputWithString = ["13000"];

    mockQuestions(inputWithString);

    //when
    const app = new App();
    const purchaseAmount = await app.getPurchaseAmount();
    app.printLottoCounts(purchaseAmount);

    //then
    expect(logSpy).toHaveBeenCalledWith("13개를 구매했습니다.");
  });
});

describe('createUniqueRandomNums 메서드 테스트', () => {
  test('createUniqueRandomNums 메서드는 COUNT 개수만큼 로또의 배열을 리턴해야한다.', async () => {
    //given
    const count = 5;

    //when
    const app = new App();
    const lottos = app.createUniqueRandomNums(count);

    //then
    expect(lottos).toBeInstanceOf(Array);
    expect(lottos).toHaveLength(count);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Array);
      expect(lotto).toHaveLength(6);
    });
  });

  test('createUniqueRandomNums 메서드는 로또의 배열을 오름차순으로 리턴해야한다.', async () => {
    //given
    const count = 3;

    //when
    const app = new App();
    const lottos = app.createUniqueRandomNums(count);

    //then
    expect(lottos).toBeInstanceOf(Array);
    expect(lottos).toHaveLength(count);

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Array);
      expect(lotto).toHaveLength(6);

      const sortedLotto = [...lotto].sort((a, b) => a - b);
      expect(lotto).toEqual(sortedLotto);
    });
  });
});

describe('printLottoNums 메서드 테스트', () => {
  test('printLottoNums 메서드는 생성된 로또의 번호를 출력해야한다.', async () => {
    // given
    const logSpy = getLogSpy();

    // when
    const app = new App();
    const lotto = new Lotto([8, 21, 23, 41, 42, 43]);
    app.printLottoNums(lotto);

    // then
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[8, 21, 23, 41, 42, 43]"));
  });
});

describe('getWinningNum 메서드 테스트', () => {
  test('getWinningNum 메서드는 띄어쓰기가 포함된 입력값이 들어올 경우, ERROR를 throw 해야한다.', async () => {
    // given
    const inputWithSpaces = ["1, 2, 3, 4, 5, 6"];

    mockQuestions(inputWithSpaces);

    //when
    const app = new App();
    let error;
    try {
      const winningNum = await app.getWinningNum();
    } catch (err) {
      error = err;
    }

    //then
    expect(error).toBeDefined();
    expect(error.message).toEqual("[ERROR] 띄어쓰기 대신 쉼표로만 입력해주세요.");
  });

  test('getWinningNum 메서드는 사용자가 입력한 당첨번호를 리턴해야한다.', async () => {
    // given
    const input = ["1,2,3,4,5,6"];

    mockQuestions(input);

    //when
    const app = new App();
    const winningNum = await app.getWinningNum();

    //then
    expect(winningNum).toEqual([1,2,3,4,5,6]);
  });

  test('getWinningNum 메서드는 사용자가 입력한 당첨번호를 오름차순으로 정렬해야한다.', async () => {
    // given
    const input = ["1,3,2,4,5,6"];

    mockQuestions(input);

    //when
    const app = new App();
    const winningNum = await app.getWinningNum();

    //then
    expect(winningNum).toEqual([1,2,3,4,5,6]);
  });
});

describe('getBonusNum 메서드 테스트', () => {
  test('getBonusNum 메서드는 사용자가 입력한 보너스 번호를 리턴해야한다.', async () => {
    // given
    const input = ["1,2,3,4,5,6", "7"];
    mockQuestions(input);

    // when
    const app = new App();
    const winningNum = await app.getWinningNum();
    const bonusNum = await app.getBonusNum(winningNum);

    // then
    expect(bonusNum).toBe("7");
  });
});

describe('calculateWin 메서드 테스트', () => {
  test('calculateWin 메서드는 각 등수별 당첨 개수를 리턴해야한다.', async () => {
    //given
    const app = new App();
    const tickets = [
      [1, 2, 3, 4, 5, 6]
    ];
    const winningNums = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    //when
    const winLog = app.calculateWin(tickets, winningNums, bonus);

    //then
    expect(winLog[0]).toBe(0);
    expect(winLog[1]).toBe(0);
    expect(winLog[2]).toBe(0);
    expect(winLog[3]).toBe(1);
    expect(winLog[4]).toBe(0);
  });
});

describe('countMatchedNumbers 메서드 테스트', () => {
  test('countMatchedNumbers 메서드는 로또 번호와 당첨번호를 비교하여 일치하는 개수를 리턴해야한다.', () => {
    // given
    const app = new App();
    const ticketNumbers = [1, 2, 3, 4, 5, 6];
    const winningNums = [1, 2, 3, 4, 5, 6];

    // when
    const matchedCount = app.countMatchedNumbers(ticketNumbers, winningNums);

    // then
    expect(matchedCount).toBe(6);
  });
});

describe('printWinningStatistics 메서드 테스트', () => {
  test('printWinningStatistics 메서드는 각 등수별 당첨 개수를 출력해야한다.', () => {
    // given
    const winLog = [1, 2, 3, 4, 5];
    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.printWinningStatistics(winLog);

    // then
    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 2개",
      "5개 일치 (1,500,000원) - 3개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 5개",
      "6개 일치 (2,000,000,000원) - 4개",
    ];
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

