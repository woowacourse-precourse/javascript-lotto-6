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
  const ticket = 1;
  test("티켓 생성 테스트", () => {
    for (let i = 0; i < ticket; i++) {
      tickets.push(new Lotto());
    }
  });

  test("티켓 생성&출력 테스트", () => {
    const ticket = 3;
    // console.log("랜덤티켓생성");
    const tickets = produce_ticket(ticket);
    // console.log(tickets);
    // tickets.forEach((ticket) => console.log(ticket.get_numbers()));
  });

  function produce_ticket(ticket) {
    let tickets = [];
    for (let i = 0; i < ticket; i++) {
      tickets.push(new Lotto());
    }
    return tickets;
  }
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
    // console.log(result);
  });
  test("Lotto확인", () => {
    const test_lotto = new Lotto([1, 2, 10, 9, 7, 8]);
    // console.log(test_lotto.get_price(winning_number, bonus_number));
  });
});

describe("예외 테스트..", () => {
  test("구입금액", () => {
    const INPUT = ["1000j", "1004", "2000"];
    const PRICE_UNIT = 1000;
    let price;
    let i = 0;
    //구매금액 입력
    // MissionUtils.Console.print("구입금액을 입력해 주세요.");
    while (false) {
      let input = INPUT[i];
      i = i + 1;
      console.log(`입력: ${input}`);
      try {
        is_not_number(input);
        is_not_multiple_of_priceunit(input);
        price = input;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        continue;
      }
    }
    console.log(price);

    function is_not_number(input) {
      if (isNaN(input)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
    function is_not_multiple_of_priceunit(input) {
      if (parseInt(input) % PRICE_UNIT != 0 || parseInt(input) < PRICE_UNIT) {
        throw new Error(`[ERROR] ${PRICE_UNIT}원 단위로 입력해 주세요`);
      }
    }
  });
  test("당첨번호", () => {
    const INPUT = ["1,2,3,4,5", "1,2,3,56,56", "2,3,t, 3, 4, 5", "1,2,3,4,5,6"];
    let i = 0;
    let winning_number;
    // MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    while (false) {
      try {
        let input = INPUT[i];
        i++;
        winning_number = new Lotto(input.split(",").map(Number));
        break;
      } catch (error) {
        // console.log(error.message);
        continue;
      }
    }
    // console.log(winning_number.get_numbers());
  });
  test("보너스 번호", () => {
    const INPUT = ["66", "r", "4", "7"];
    const MAX_NUMBER = 45;
    const MIN_NUMBER = 1;
    let i = 0;
    let bonus_number;
    // MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    while (false) {
      let input = INPUT[i];
      i = i + 1;
      console.log(`입력: ${input}`);
      try {
        is_not_number(input);
        is_not_in_range(parseInt(input));
        bonus_number = input;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        continue;
      }
    }
    console.log(bonus_number);

    function is_not_number(input) {
      if (isNaN(input)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
    function is_not_in_range(input) {
      if (parseInt(input) < MIN_NUMBER || parseInt(input) > MAX_NUMBER) {
        throw new Error("[ERROR] 1~45까지의 번호를 입력해 주세요");
      }
    }
  });
});
describe("소수점 이하 검사", () => {
  const numbers = [62.5, 33.333333, 20, 22.229, 33.299];
  numbers.forEach((number) => {
    console.log(number.toFixed(2).replace(/\.?0+$/, ""));
  });
});
