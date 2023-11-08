import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  // Jest의 mock 함수를 사용하여 MissionUtils.Console.readLineAsync 함수를 대체하여 사용자 입력을 제어함
  MissionUtils.Console.readLineAsync = jest.fn();
  // Jest의 jest.fn()을 사용하여 MissionUtils.Console.readLineAsync의 동작을 대체하고,
  // 입력 배열(inputs)을 순차적으로 사용하면서 다음 입력을 시뮬레이션함

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift(); // 입력 배열에서 다음 입력 값을 가져옴

    return Promise.resolve(input);
    // 다음 입력 값을 Promise(비동기 작업의 결과를 나타내는 객체)로 반환함
    // Promise는 성공 또는 실패와 같은 상태를 가지며,
    // .then() 및 .catch()와 같은 메서드를 사용하여 해당 상태에 따른 처리를 수행할 수 있음
    // Promise.resolve(input)은 input 값을 가진 새로운 Promise 객체를 생성하고 즉시 해당 Promise를 성공 상태로 만드는 코드임
    // 이렇게 하면 MissionUtils.Console.readLineAsync 함수를 호출하는 코드는 비동기 작업을 시작하고, 해당 Promise를 통해 결과를 기다림
  });
};

const mockRandoms = (numbers) => {
  // Jest의 mock 함수를 사용하여 MissionUtils.Random.pickUniqueNumbersInRange 함수를 대체하여 무작위 숫자를 제어함
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  // Jest의 jest.fn()을 사용하여 MissionUtils.Random.pickUniqueNumbersInRange의 동작을 대체함
  numbers.reduce((acc, number) => {
    // numbers 배열은 pickUniqueNumbersInRange 함수의 동작을 대체하고, 무작위로 반환될 숫자를 정의함
    // numbers 배열에 포함된 숫자는 MissionUtils.Random.pickUniqueNumbersInRange 함수가 순차적으로 반환하도록 모의화됨
    return acc.mockReturnValueOnce(number);
    // 숫자를 반환하는 모의(mock) 함수를 생성함
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  // jest.spyOn() 함수를 사용하여 MissionUtils.Console.print 함수를 스파이하고,
  // 스파이된 함수를 테스트 중에 호출된 로그 메시지를 기록함
  // 이렇게 하면 MissionUtils.Console.print 함수의 호출을 모니터링하고, 호출 여부와 호출된 인수를 기록할 수 있음
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  // 스파이 함수를 logSpy 변수에 할당함
  // 이것은 MissionUtils.Console.print 함수에 대한 스파이된 버전이며, 테스트 중에 해당 함수가 호출될 때의 동작을 기록함
  logSpy.mockClear();
  // 스파이 함수가 호출된 횟수를 초기화함
  // 이렇게 하면 각 테스트 케이스에서 스파이 함수를 새로운 상태로 시작할 수 있음
  return logSpy;
  // 스파이된 함수를 반환함
  // 이것은 테스트 중에 로그 출력을 확인하고 테스트 결과를 검증하는 데 사용됨
};

const runException = async (input) => {
  // 특정 입력을 제공하여 예외가 발생하는지 확인함
  // given
  const logSpy = getLogSpy();
  // logSpy 변수를 선언하고 getLogSpy() 함수를 호출하여 MissionUtils.Console.print 함수를 스파이함
  // 이렇게 하면 로그 출력을 기록하고 나중에 검증에 사용할 수 있음

  const RANDOM_NUMBERS_TO_END = [1,2,3,4,5,6]; // 무작위 숫자 생성을 모의화하기 위한 데이터
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"]; // 사용자 입력을 모의화하기 위한 데이터

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  // 무작위 숫자를 모의화하고 예상 결과를 설정함
  // 이로써 무작위 숫자 생성을 제어하고 예외가 발생하지 않도록 설정함
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);
  // 사용자 입력을 모의화하고 예상 입력을 설정함
  // 이로써 사용자 입력을 제어하고 input을 특정 값으로 설정하여 예외 상황을 테스트함

  // when
  const app = new App(); // App 클래스의 인스턴스를 생성함
  await app.play(); // App 애플리케이션을 실행하고 예외가 발생하는지 확인함

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  // 예외가 발생하면 "[ERROR]" 메시지가 logSpy 함수에 의해 로깅되는지 확인하기 위해 expect 문을 사용함
  // expect.stringContaining을 사용하여 "[ERROR]"가 포함된 로그 메시지가 호출되었는지 호가인함
}

describe("로또 테스트", () => {
  beforeEach(() => {
    // 각 테스트 케이스가 실행되기 전에 모든 모의 객체(mocks)를 초기화함
    // 이렇게 하면 각 테스트 케이스가 독립적으로 실행됨
    jest.restoreAllMocks();
  })

  test("기능 테스트", async () => {
    // 로또 번호를 생성하고 당첨 여부를 테스트함
    // mockRandoms() 함수를 사용하여 무작위 번호 및 입력을 제어하고,
    // App 클래스를 인스턴스화하여 게임을 실행한 후, 예상된 출력 로그를 확인함
    // given
    const logSpy = getLogSpy();
    // getLogSpy() 함수를 호출하여 MissionUtils.Console.print 함수를 스파이하고 스파이 객체를 logSpy 변수에 할당함
    // 이렇게 하면 로그 출력을 기록하고 나중에 검증에 사용할 수 있음

    mockRandoms([
      // mockRandoms() 함수를 호출하여 MissionUtils.Random.pickUniqueNumbersInRange 함수를 모의화하고 무작위 숫자를 정의함
      // 이로써 무작위 숫자 생성을 제어하고 예외가 발생하지 않도록 설정함
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    // mockQuestions() 함수를 호출하여 MissionUtils.Console.readLineAsync 함수를 모의화하고 사용자 입력을 정의함
    // 이로써 사용자 입력을 제어하고 input을 특정 값으로 설정하여 예외 상황을 테스트함

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      // 예상되는 로그 메시지를 배열에 정의함
      // 이 배열에는 로또 번호 생성 및 당첨 여부에 대한 예상 로그 메시지가 포함됨
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      // logs 배열의 각 항목에 대해 반복하며, 각 로그 메시지가 logSpy에 의해 호출되는지 확인함
      // 이것은 로그 메시지가 예상한 내용을 포함하고 있는지 확인하는 역할을 함
    });
  });

  test("예외 테스트", async () => {
    // 잘못된 입력이 발생했을 때 예외를 확인함
    // runException() 함수를 사용하여 "1000j"와 같은 잘못된 입력을 시뮬레이션하고,
    // 예상대로 예외 메시지가 출력되는지 확인함
    await runException("1000j");
  });
});

