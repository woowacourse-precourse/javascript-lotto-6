export default function parseToNumberArray(lotto) {
  const parsedLotto = lotto.map((element) => Number(element));
  return parsedLotto;
}
