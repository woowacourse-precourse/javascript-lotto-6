import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("구입금액 예외 확인", () => {
    const price = "3067";
    let result = "GOOD";
    if (isNaN(price)) {
      result = "ERROR";
    }
    if (parseInt(price) % 1000 != 0) {
      result = "ERROR";
    }
    expect(result).toEqual("ERROR");
  });

  test("숫자 정렬 확인", () => {
    let arr = [4, 35, 3, 12, 16, 6];
    arr.sort((a, b) => a - b);
    const compare = [3, 4, 6, 12, 16, 35];
    expect(arr).toMatchObject(compare);
  });

  test("티켓 생성, 출력 확인", () => {
    const ticket = 3;
    const tickets = [];
    for (let i = 0; i < ticket; i++) {
      tickets.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
    }
    const combinedString = tickets
      .map((ticket) => "[" + ticket.join(", ") + "]")
      .join("\n");
    console.log(combinedString);
  });

  test("당첨 번호 확인", () => {
    let status = "good";
    const input = "2,3,4,5,6,45";
    const winning_number = input.split(",").map((number) => parseInt(number));
    winning_number.map((number) => {
      if (isNaN(number)) {
        status = "숫자ERROR";
      }
      if (number < 1 || number > 45) {
        status = "범위ERROR";
      }
    });
    expect(status).toEqual("good");
  });

  // 아래에 추가 테스트 작성 가능
});
