import Lottos from "../src/model/Lottos.js";

describe("Lottos 클래스 테스트", () => {
    test("1) 로또 구입 금액이 1000단위가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos(3001);
        }).toThrow("[ERROR]");
    });

    test("2) 로또 구입 금액이 1000단위가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos(11111);
        }).toThrow("[ERROR]");
    });

    test("로또 구입 금액이 0일 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos(0);
        }).toThrow("[ERROR]");
    });

    test("1) 로또 구입 금액이 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos();
        }).toThrow("[ERROR]");
    });
    
    test("2) 로또 구입 금액이 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos(' ');
        }).toThrow("[ERROR]");
    });

    test("로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos('a');
        }).toThrow("[ERROR]");
    });

    test("로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new Lottos('%#');
        }).toThrow("[ERROR]");
    });
});