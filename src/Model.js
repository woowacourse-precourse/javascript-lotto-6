const GRADE_REWARD = [2000000000, 30000000, 1500000, 50000, 5000];

export default class Model {
    constructor() {
        this.buyLottoNumber = 0;
        this.lottoDataObject = new Array();
        this.winningNumber = new Array();
        this.bonusNumber = 0;
        this.gradeCounts = new Array();
        this.earningRate = 0;
    }

    getBuyLottoNumber() {
        return this.buyLottoNumber;
    }

    getLottoDataObject() {
        return this.lottoDataObject;
    }

    getWinningNumber() {
        return this.winningNumber;
    }

    getBonusNumber() {
        return this.bonusNumber;
    }

    getGradeCounts() {
        return this.gradeCounts;
    }

    getEarningRate() {
        return this.earningRate;
    }

    judgeResultGrade() {
        var resultGrade = new Array();
        for (let i = 0; i < this.lottoDataObject.length; i++) {
            this.processJudgmentLottoResult(this.lottoDataObject[i]);
            resultGrade.push(this.lottoDataObject[i].getResultGrade());
        }
        this.countGrade(resultGrade);
        this.calculateReward();
    }

    setBuyLottoNumber(number) {
        this.buyLottoNumber = number;
    }

    setLottoDataObject(lottoObject) {
        this.lottoDataObject.push(lottoObject);
    }

    setLottoReslut(resultGrade) {
        for (let i = 0; i < resultGrade.length; i++) {
            this.lottoDataObject[i].setResultGrade(6 - resultGrade[i])
        }
    }

    setWinningNumber(winningNumber) {
        this.winningNumber = winningNumber;
    }

    setBonusNumber(bonusNumber) {
        this.bonusNumber = bonusNumber;
    }

    setGradeCounts(countList) {
        this.gradeCounts = countList;
    }

    setEarningRate(rate) {
        this.earningRate = rate;
    }

    processJudgmentLottoResult(lottoObject) {
        const numberOfMatches = (lottoObject).getNumbers().filter((number) => this.winningNumber.includes(number)).length;

        lottoObject.setResultGrade(this.adjustGradeUnder2nd(numberOfMatches));
        if (this.isBonusNumber(lottoObject) && lottoObject.getResultGrade() == 4) {
            lottoObject.setResultGrade(lottoObject.getResultGrade() + 1);
        }
    }

    isBonusNumber(lottoObject) {
        if (lottoObject.getNumbers().includes(this.bonusNumber)) {
            lottoObject.setResultBonusNumber(true);
            return true;
        }
        return false;
    }

    adjustGradeUnder2nd(originGrade) {
        let adjustGrade = originGrade;
        if (originGrade !== 6) {
            adjustGrade = originGrade - 1;
        }
        return adjustGrade;
    }

    countGrade(gradeList) {
        const result = [];
        for (let i = 6; 2 <= i; i--) {
            const count = gradeList.filter(item => item === i).length;
            result.push(count);
        }
        this.setGradeCounts(result);
    }

    calculateReward() {
        let dividend = this.getEarningTotal();
        let divisor = this.buyLottoNumber * 1000;

        const result = (((dividend - divisor) / divisor) * 100);

        this.setEarningRate(result);
    }
    getEarningTotal() {
        return this.gradeCounts.reduce((total, count, i) => total + count * GRADE_REWARD[i], 0);
    }

}