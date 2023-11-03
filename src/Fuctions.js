function lottoRandomNumber() {
  const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return Array.from(randomNumbers);
}
export default Function;
