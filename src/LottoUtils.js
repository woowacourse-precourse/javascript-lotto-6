import Lotto from './Lotto';

const lottosWithNumbers = [];

export function createLotto(numbers) {
    const lotto = new Lotto (numbers);
    lottosWithNumbers.push({ lotto, numbers });
    return lotto;
}

export function getNumbersOfLotto(lottoInstance) {
    const found = lottosWithNumbers.find(item => item.lotto === lottoInstance);
    return found ? found.numbers : null;
}