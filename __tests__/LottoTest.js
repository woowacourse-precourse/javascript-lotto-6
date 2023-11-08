import Lotto from "../src/domain/Lotto.js";
import MyLottos from "../src/domain/MyLottos.js";
import ScoreMyLottos from "../src/domain/ScoreMyLottos.js";

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

    // 아래에 추가 테스트 작성 가능


    test("결과를 배열 값으로 출력", () => {
        const MY_LOTTOS = [
            [1, 2, 3, 4, 5, 6],
            [6, 7, 8, 9, 10, 11],
            [2, 3, 4, 5, 6, 10]
        ];
        const COIN = 2;
        const ANSWER = [1, 2, 3, 4, 5, 6];
        const BONUS = 10;
        const ANSWER_ARR = [1, 1, 0, 0, 0];
        const MY_ANSWER = new ScoreMyLottos(MY_LOTTOS,ANSWER,BONUS);
        expect(MY_ANSWER.getResult()).toStrictEqual(ANSWER_ARR);
    });

    test("수익률 계산", () => {
        const MY_LOTTOS = [
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
            [1, 8, 11, 31, 41, 42],
            [13, 14, 16, 38, 42, 45],
            [7, 11, 30, 40, 42, 43],
            [2, 13, 22, 32, 38, 45],
            [1, 3, 5, 14, 22, 45]
        ];
        const ANSWER = [1, 2, 3, 4, 5, 6];
        const BONUS = 7;
        const MY_ANSWER = new ScoreMyLottos(MY_LOTTOS,ANSWER,BONUS);
        const EARNING = "62.5";

        expect(MY_ANSWER.getEarning()).toStrictEqual(EARNING);
    });

    test("원하는 갯수만큼의 로또 생성", () => {
        const COIN = 8;
        const LOTTOS = new MyLottos(COIN);

        expect(LOTTOS.getMyLottos().length).toStrictEqual(COIN);
    });


});
