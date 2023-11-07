describe("당첨 통계에 대한 클래스 테스트", () => {
	test("setMatchesCount 실행 시 당첨 번호와 티켓의 로또 번호가 일치하는 개수가 통계에 갱신되는가?", () => {
		const winStastics = new WinStastics();
		winStastics.setMatchesCount();
		expect(winStastics.statics.matchesCount).toMatchObject(answers[i]);
	});

	test("setMatchesCount 실행 후 setEarningRate 실행 시 수익률이 통계에 갱신되는가?", () => {
		const winStastics = new WinStastics();
		winStastics.setMatchesCount();
		winStastics.setEarningRate();
		expect(winStastics.statics.earningRate).toBe(answers[i].earningRate);
	});
});
