// 역할을 최대한 분리해보자!
// 클래스 당 역할을 1개씩만 할당할 수 있으면 명확하게 이해할 수 있다고 한다!
import {Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

/**
 * @description - 랜덤 번호를 뽑아 로또 번호를 생성해주는 역할
 */
export class LottoGenerator {

    // 자바스크립트 생성자는 private 설정 불가
    // 그래서 클래스 외부에서 무조건 생성자 호출이 가능하다
    // 무차별 객체 생성이 가능!
    //
    // 다른 사람이 모르고 객체 생성을 할 수 있기 때문에
    // 객체 생성을 시도했을 때 예외를 던져서 알려주면 좋을 것 같다~
    // -> 올바른 사용법으로 사용하도록 유도하면 좋을것같다

    constructor() {
        throw new Error("LottoGenerate는 객체로 생성할 수 없다!")
    }

    /**
     * @return {Lotto}
     * @description - 랜덤으로 로또 한장 생성
     * static설정 ->
     */
    static generate() {
        const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
        return new Lotto(randomNumbers);
    }

    /**
     * 얘는 객체 생성 필요없이  랜덤 로또 생성 기능 1가지만 사용할 것이라
     *     가진 프로퍼티가 없으므로 객체 생성이 필요없음
     *     LottoGenerator.generate()를 호출해 생성하면 좋을 듯!
     *
     *  [생성자 함수에 `new`를 붙여 호출할 경우
     *     const lotto = new Lotto()
     *
     *  ->실제 과정
     *  1. 빈 객체를 만든다
     *     const lotto = {}
     *
     *  2. 빈 객체를 첫번 째 인자로 전달해 준다
     *     new Lotto({} ...인자 생략)
     *
     *  3. 생성자 함수 내에서 이 객체에 대한 필드를 넣어준다
     *  constructor(this, ...인자 생략){
     *      this.field1 = field1;
     *      this.field2 = field2;
     *  }
     *
     *  4.완성
     *  const lotto = {field1, field2};
     *  최종적으로는 위와같은 것(실제로 메소드도 추가가 되기는 한다!)
     *
     *  ---------------------------------------------------
     *  [생성자 함수에 `new`를 붙이지 않고 호출할 경우]
     *  -> 일반함수 호출과 같다
     *  const lotto = Lotto() //빈 객체 생성되어 this로 전달하지 않는다
     *
     *  그런데 생성자 함수는 반환값이 음으므로 문제가 된다
     *
     *  그래서 아래와 같은 오류가 발생하는 것을 확인!
     * VM164:1 Uncaught TypeError: Class constructor Lotto cannot be invoked without 'new'
     *     at <anonymous>:1:11
     */

}