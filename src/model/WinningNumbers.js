import LottoValidate from "../validate/LottoValidate.js";

class WinningNumbers{

    constructor(winningNumber){
        this.winningNumbers = winningNumber;
        this.winningNumberValidate(winningNumber);
    }

    winningNumberValidate = (winningNumber) => {
        new LottoValidate().inputWinningNumbersValidate(winningNumber.split(','));
    }

}

export default WinningNumbers