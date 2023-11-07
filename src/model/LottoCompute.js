export function lottoCompute(winning,lottoArray,bonus,count,matchDict){
    for(let i= 0; i<count ; i++){
        const MATCH_COUNT = winning.matchLotto(lottoArray[i]);
        const MATCH_BONUS = lottoArray[i].includes(bonus);

        if(MATCH_COUNT === 5 && MATCH_BONUS){
            matchDict['bonus'][0] += 1;
            continue;
        }
        else if(MATCH_COUNT < 3){
            continue;
        }
        matchDict[String(MATCH_COUNT)][0] += 1;
    }
}

export function profitCompute(matchDict, count){
    let sum = 0;
    for(let key in matchDict){
        sum += matchDict[key][0] * matchDict[key][1] ;
    }
    const PRICE = count * 1000;
    return sum / PRICE * 100;
}