import Lotto from "../model/Lotto";

const stringToLotto = (lottoString) => {
    const parsedString = lottoString.split(",");
    return new Lotto(parsedString);
}

export default stringToLotto;