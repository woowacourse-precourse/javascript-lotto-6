import LottoValidate from "../validate/LottoValidate.js";

class WinningNumbers{

    constructor(winningNumber){
        this.winningNumber = winningNumber;
        this.winningNumberValidate(winningNumber);
    }

    winningNumberValidate = (winningNumber) => {
        new LottoValidate().inputWinningNumbersValidate(winningNumber.split(',').map(Number));
    }

}

export default WinningNumbers