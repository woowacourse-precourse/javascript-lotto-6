import { Console, Random } from "@woowacourse/mission-utils";

/**
 * Console.readLineAsync 함수를 모의하기 위해 jest를 사용하여 구현합니다.
 *
 * @param {string} input - Console.readLineAsync 함수 호출시 반환될 가상의 입력 값입니다.
 */
export const mockReadLineAsync = (input) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(async () => input);
};

/**
 * Random.pickUniqueNumbersInRange 함수를 모의하기 위해 jest를 사용하여 구현합니다.
 *
 * @param {number[]} numbers - Random.pickUniqueNumbersInRange 함수 호출시 순차적으로 반환될 가상의 숫자 배열입니다.
 */
export const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickUniqueNumbersInRange
  );
};
