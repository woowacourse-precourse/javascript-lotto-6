import Consumer from '../src/Model/Consumer';
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("Consumer 클래스 테스트", () => {
  test("입력한 금액이 1000원 단위가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer(3500);
    }).toThrow("[ERROR]");
  });

  test("입력한 값이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer(NaN);
    }).toThrow("[ERROR]");
  });

  test("입력한 금액의 1000원당 1장 로또를 발행한다.", () => {
    const consumer = new Consumer(8000);
    expect(consumer.getQuantity()).toEqual(8);
  });

  test("랜덤으로 뽑은 로또 번호는 오름차순으로 정렬한다.", () => {
    mockRandoms([
      [1, 6, 5, 2, 3, 4]
    ]);
    const consumer = new Consumer(1000);
    consumer.getQuantity();
    consumer.pickLottoNumber();

    expect(consumer.getLottoNumber())
    .toEqual([
      [1, 2, 3, 4, 5, 6],
    ]);
  });
});