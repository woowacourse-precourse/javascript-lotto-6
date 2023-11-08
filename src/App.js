"use strict";
import { Lotto } from "./Lotto";
import Purchase from "./Purchase";
import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/Messages";
import CONDITIONS from "./constants/Conditions";
class App {
    async play() {
        // Purchase 클래스를 통해 : 구매금액 입력 받고, 그를 출력하고, 그 금액을 바탕으로 몇 개를 구매했는지까지 출력
        const purchase = new Purchase();
        purchase.init();

        // Lotto 클래스 : 로또 번호 생성 및 출력
        const lotto = new Lotto();
        lotto.buy(purchase.tickets);
        // 당첨 번호 만들기
        // 보너스 번호 입력받기
        // 당첨 통계내기
    }
}

export default App;
