import Lotto from "../model/Lotto";
import generateLottoNumbers from "./generateLottoNumbers";

const generateLottos = (neededLotto) => {
    const lottoSet = [];

    let newLottoNumbers;
    let lottoMadded = 0;
    while(lottoMadded !== neededLotto){
        newLottoNumbers = generateLottoNumbers();
        lottoSet.push(new Lotto(newLottoNumbers));
        lottoMadded += 1;
    }

    return lottoSet;
};

export default generateLottos;