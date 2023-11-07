class Reward{
    static getReward(matchCount) { //맞춘 번호 개수에 대응하는 보상금액 반환
        const REWARD  = {
            '3': 5000,
            '4': 50000,
            '5': 1500000,
            '5+': 30000000,
            '6': 2000000000
        }
        return REWARD[matchCount] || 0;
    }

    //수익률 계산
    static getEarningRate(matchCounts, purchaseAmount) {
        let totalAmount = 0;
        matchCounts.forEach((count, matchCount)=>{
            totalAmount += Reward.getReward(matchCount) * count;
        })
        const EarningRate = (totalAmount/purchaseAmount * 100).toFixed(1);
        return EarningRate;
    }
}

export default Reward