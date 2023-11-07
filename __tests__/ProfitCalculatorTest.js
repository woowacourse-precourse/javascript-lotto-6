describe("이윤 계산기 클래스에 대한 테스트", () => {
	test("총 수익을 계산할 수 있는가?", () => {
		inputs.forEach((input, i) => {
			const totalIncome = profitCalculator.calculateTotalIncome(
				input.matchesCount
			);
			expect(totalIncome).toBe(answers[i]);
		});
	});

	test("로또 번호 5개와 보너스 숫자가 맞은 경우 총 수익 계산이 가능한가?", () => {
		const totalIncome = profitCalculator.calculateTotalIncome(
			input.matchesCount
		);
		expect(totalIncome).toBe(answers[i]);
	});

	test("총 수익에 대한 수익률을 소수점 둘째 자리에서 반올림하여 계산이 가능한가?", () => {
		const earningRate = profitCalculator.calculateEarningRate(input);
		expect(earningRate).toBe(answers[i]);
	});
});
