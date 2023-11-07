import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 범위 확인", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 78]);
    }).toThrow("[ERROR]");
  });

  test("로또 숫자 확인", () => {
    expect(() => {
      new Lotto([1, 2, 3, "34", 32]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});

describe("구입금액, 정렬 테스트", () => {
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
});

describe("티켓생성, 출력 확인", () => {
  let tickets = [];
  test("티켓 생성 테스트", () => {
    const ticket = 6;
    let ticket_arr = [];
    for (let i = 0; i < ticket; i++) {
      ticket_arr = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      tickets.push(new Lotto(ticket_arr));
    }
  });

  test("티켓 출력 테스트", () => {
    const combinedString = tickets
      .map((ticket) => "[" + ticket.get_numbers() + "]")
      .join("\n");
    MissionUtils.Console.print(combinedString);
  });
});

describe("티켓 결과 확인", () => {
  const winning_number = new Lotto([1, 2, 3, 4, 5, 6]);
  const bonus_number = 7;
  test("매칭 숫자 갯수 확인 테스트", () => {
    const t_ticket = new Lotto([1, 2, 3, 4, 5, 7]);
    const new_set = new Set([
      ...winning_number.get_numbers(),
      ...t_ticket.get_numbers(),
    ]);
    console.log(new_set);
    let result = "꽝";
    if (new_set.size == 6) {
      result = "1등";
    } //6개번호 일치
    if (new_set.size == 7) {
      if (t_ticket.get_numbers().includes(bonus_number)) {
        result = "2등";
      } else {
        result = "3등";
      } //5개+보너스번호
    }
    if (new_set.size == 8) {
      result = "4등";
    } //4개번호일치
    if (new_set.size == 9) {
      result = "5등";
    } //3개번호일치
    console.log(result);
  });
});
