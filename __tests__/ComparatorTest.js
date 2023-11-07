describe("비교기 클래스 테스트", () => {
	test("로또 당첨 번호와 로또 티켓의 일치하는 번호에 대한 개수를 반환하는가?", () => {
		const comparator = new Comparator();

		const matchesCount = comparator.countMatches(lotto.numbers);
		expect(matchesCount).toBe(answers[i][j]);
	});

	test("같은 개수의 번호가 여러번 당첨되었을 경우를 구분할 수 있는가?", () => {
		const comparator = new Comparator();
		const matchesCount = comparator.countMatches(lotto.numbers);
		comparator.increaseMatchesCount(matchesCount);

		expect(comparator.numOfWinningNumMatches.get(3)).toBe(2);
	});

	test("로또 번호 5개와 보너스 번호가 일치할 경우를 구분할 수 있는가?", () => {
		const comparator = new Comparator();

		const matchesCount = comparator.countMatches(lotto.numbers);

		comparator.increaseBonusCount(matchesCount, lotto.numbers);
		expect(comparator.numOfWinningNumMatches.get("bonus")).toBe(1);
	});
});
