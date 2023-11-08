class Margin {
    calculateLottoMargin(result) {
        const prizeMapping = {
            '1st': '6개 일치 (2,000,000,000원)',
            '2nd': '5개 일치, 보너스 볼 일치 (30,000,000원)',
            '3rd': '5개 일치 (1,500,000원)',
            '4th': '4개 일치 (50,000원)',
            '5th': '3개 일치 (5,000원)'
        };
        
        return Object.entries(result)
            .filter(([rank]) => prizeMapping.hasOwnProperty(rank))
            .reverse()
            .map(([rank, count]) => `${prizeMapping[rank]} - ${count}개`)
            .join('\n');
    }
}

export default Margin;