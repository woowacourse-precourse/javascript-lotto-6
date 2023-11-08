import RankModel from "../src/Model/RankModel.js";

describe('랭크메서드 테스트', () => {
    test('1등시 당첨금 수령', () => {
        // given
        const FIRST_RANK = {
            RANKING: 1,
            STANDARD: {
                numbers: 6,
                bonus: false,
            },
            PRIZE: 2000000000,
        };

        const { numbers, bonus } = FIRST_RANK.STANDARD;

        const rankItem = new RankModel(
            FIRST_RANK.RANKING,
            FIRST_RANK.STANDARD,
            FIRST_RANK.PRIZE
        );

        // when
        rankItem.win(numbers, bonus);

        // then
        expect(rankItem.getWinnings()).toBe(FIRST_RANK.PRIZE);
    });

    test('2등시 2등 당첨금', () => {
        // given
        const SECOND_RANK = {
            RANKING: 2,
            STANDARD: {
                numbers: 5,
                bonus: true,
            },
            PRIZE: 30000000,
        };

        const rankItem = new RankModel(
            SECOND_RANK.RANKING,
            SECOND_RANK.STANDARD,
            SECOND_RANK.PRIZE
        );

        const { numbers, bonus } = SECOND_RANK.STANDARD;

        // when
        rankItem.win(numbers, bonus);

        // then
        expect(rankItem.getWinnings()).toBe(SECOND_RANK.PRIZE);
    });

    test('3등 3번시 3등 당첨금 3번수령', () => {
        const THIRD_RANK = {
            RANKING: 3,
            STANDARD: {
                numbers: 3,
                bonus: false,
            },
            PRIZE: 1500000,
        };

        const rankItem = new RankModel(
            THIRD_RANK.RANKING,
            THIRD_RANK.STANDARD,
            THIRD_RANK.PRIZE
        );

        const { numbers, bonus } = THIRD_RANK.STANDARD;

        rankItem.win(numbers, bonus);
        rankItem.win(numbers, bonus);
        rankItem.win(numbers, bonus);
        rankItem.win(numbers, bonus);
        rankItem.win(numbers, bonus);

        //비교
        expect(rankItem.getWinnings()).toBe(THIRD_RANK.PRIZE * 3);
    });


});