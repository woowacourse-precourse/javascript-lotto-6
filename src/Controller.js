import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import View from "./View.js";

class Controller {
    constructor() {        
    }

    //로또번호랜덤추출
    pickLottoNumbers (amount) {
        let ArrayLottos = Array();

        while (ArrayLottos.length < amount) {
          let randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    
          randomNumber = randomNumber.toSorted();
    
          ArrayLottos.push(randomNumber);
        }

        return ArrayLottos;
    }

    //checkWinnerNumbers
    checkWinnerNumbers(ArrayLottos, userLotto, bonus) {
        let difference = Array();
        let flagBonus = false;

        for (let loc = 0; loc < ArrayLottos.length; loc++) {
            let winnerNumbers = userLotto.filter((x) =>
                ArrayLottos[loc].includes(x)
            );

            if (ArrayLottos[loc].includes(bonus)) {flagBonus = true;}

            difference.push([winnerNumbers, flagBonus]);
        }

        return difference;
    }


    //
    checkWinnerAmounts (ArrayLottos, difference) {
        let winnerTotal = Array(5).fill(0);

        for (let loc = 0; loc < ArrayLottos.length; loc++) {
            let x = difference[loc][0].length;
            let y = difference[loc][1];

            if ((x === 3) & (y === false)) {winnerTotal[0] += 1;}

            if ((x === 4) & (y === false)) {winnerTotal[1] += 1;}

            if ((x === 5) & (y === false)) {winnerTotal[2] += 1;}

            if ((x === 5) & (y === true)) {winnerTotal[3] += 1;}

            if ((x === 6) & (y === false)) {winnerTotal[4] += 1;}
        }

        return winnerTotal;
    }
}

export default Controller;