import { Console } from '@woowacourse/mission-utils';
import view from '../src/utils/view.js';

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('로또 구매 금액(purchaseAmount) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const input = [''];
    mockQuestions(input);

    // then
    await expect(view.readPurchaseAmount()).rejects.toThrow(
      '[ERROR] 입력 값이 없습니다. 값을 입력해주세요',
    );
  });

  test.each([[['3abc']], [[' 32000']], [['..10000']]])(
    'test2: 입력 값에 숫자가 아닌 다른 문자를 사용했을 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readPurchaseAmount()).rejects.toThrow(
        '[ERROR] 로또 구매 금액에는 숫자만 입력할 수 있습니다.',
      );
    },
  );

  test.each([[['1000000']], [['900']], [['0']]])(
    'test3: 입력 금액이 가능 범위를 초과한 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readPurchaseAmount()).rejects.toThrow(
        '[ERROR] 로또는 최소 1,000원부터 최대 100,000원까지 구매할 수 있습니다.',
      );
    },
  );

  test.each([[['11100']], [['1234']]])(
    'test4: 입력 금액이 1,000원 단위가 아닌 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readPurchaseAmount()).rejects.toThrow(
        '[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.',
      );
    },
  );
});

describe('당첨 번호(winningNumbers) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const input = [''];
    mockQuestions(input);

    // then
    await expect(view.readWinningNumbers()).rejects.toThrow(
      '[ERROR] 입력 값이 없습니다. 값을 입력해주세요',
    );
  });

  test.each([
    [['one,two,three,four,five,six']],
    [['1, 2, 3, 4, 5, 6']],
    [['10,20,..']],
  ])(
    'test2: 입력 값에 숫자와 쉼표가 아닌 다른 문자를 사용했을 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readWinningNumbers()).rejects.toThrow(
        '[ERROR] 당첨 번호에는 공백 없이 1부터 45 사이의 숫자와 쉼표만 입력할 수 있습니다.',
      );
    },
  );

  test.each([[['1,,2,3,4,5,6']], [['1,2,3,4,5,6,']]])(
    'test3: 쉼표가 중복되거나, 값이 쉼표로 끝나는 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readWinningNumbers()).rejects.toThrow(
        '[ERROR] 번호 사이에 쉼표를 한 개만 입력할 수 있습니다.\n(입력 값은 숫자로 끝나야 합니다.)',
      );
    },
  );

  test.each([[['1,2,3,4,5']], [['10,20,30,40']]])(
    'test4: 입력한 번호의 개수가 6개가 아닌 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readWinningNumbers()).rejects.toThrow(
        '[ERROR] 당첨 번호는 총 6개를 입력해야 합니다.',
      );
    },
  );

  test.each([[['0,1,2,3,4,5']], [['10,20,30,40,50,60']]])(
    'test5: 번호가 입력 가능 범위를 벗어난 경우 (1~45 외 숫자)',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readWinningNumbers()).rejects.toThrow(
        '[ERROR] 각 번호는 1부터 45 사이의 숫자여야 합니다.',
      );
    },
  );

  test.each([[['7,7,7,7,7,7']], [['1,10,20,30,40,40']]])(
    'test6: 입력한 당첨 번호들 중 중복된 숫자가 있는 경우',
    async inputs => {
      // given
      mockQuestions(inputs);

      // then
      await expect(view.readWinningNumbers()).rejects.toThrow(
        '[ERROR] 각 번호는 중복되지 않아야 합니다.',
      );
    },
  );
});

describe('당첨 번호(winningNumbers) 입력 값 Validation 관련 예외 처리', () => {
  test('test1: 입력 값이 비어있을 경우', async () => {
    // given
    const input = [''];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    mockQuestions(input);

    // then
    await expect(view.readBonusNumber(winningNumbers)).rejects.toThrow(
      '[ERROR] 입력 값이 없습니다. 값을 입력해주세요',
    );
  });

  test('test2: 보너스 번호가 입력 가능 범위를 벗어난 경우', async () => {
    // given
    const input = ['50'];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    mockQuestions(input);

    // then
    await expect(view.readBonusNumber(winningNumbers)).rejects.toThrow(
      '[ERROR] 보너스 번호에는 1부터 45 사이의 숫자만 입력할 수 있습니다.',
    );
  });

  test('test3: 당첨 번호에 보너스 번호가 포함되어있는 경우', async () => {
    // given
    const input = ['3'];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    mockQuestions(input);

    // then
    await expect(view.readBonusNumber(winningNumbers)).rejects.toThrow(
      '[ERROR] 보너스 번호는 당첨 번호에 포함되어 있지 않아야 합니다.',
    );
  });
});
