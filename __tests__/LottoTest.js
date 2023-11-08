import Lotto from "../src/models/Lotto.js";
import { Random } from "@woowacourse/mission-utils";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 7);
    expect(() => {
        new Lotto(lottoNumbers);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    let lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    //중복된 숫자 생성  
    lottoNumbers[1] = lottoNumbers[0];
    expect(() => {
        new Lotto(lottoNumbers);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45사이의 범위를 넘으면 예외가 발생한다.", () => {
    let lottoNumbers = Random.pickUniqueNumbersInRange(-100, 100, 6);
    expect(() => {
        new Lotto(lottoNumbers);
    }).toThrow("[ERROR]");
  });
});
