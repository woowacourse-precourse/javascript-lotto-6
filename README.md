# 로또

- [로또](#로또)
  - [프로그램 소개](#프로그램-소개)
  - [작동 방식 소개](#작동-방식-소개)

## 프로그램 소개

로또 구매 금액을 입력하면 구매 금액에 해당하는 로또 자동 번호가 생성됩니다.  
당첨 번호와 보너스 번호를 직접 적으면, 당첨 통계가 출력됩니다.  
`로또의 확률을 직접 체감할 수 있는 프로그램`입니다.

## 작동 방식 소개

```
구입금액을 입력해 주세요.
8000
```

**로또 구매**는 최소 *1,000*원부터 최대 *100,000*원까지 가능합니다. 로또를 최대 100게임(100,000원)까지 구매가 가능한 것은, 실제 오프라인으로 1회 구매 가능한 최대 금액이기 때문입니다. ',' 없이 숫자로만 입력해주시면 됩니다. 또한, 잔돈 발생 시 재입력해야 하니 주의해서 입력해주세요.

```
당첨 번호를 입력해 주세요.
1,2,3,4,5,6
```

**당첨 번호**는 *1*부터 _45_ 사이의 숫자 중 총 6개의 숫자를 입력해야합니다. 각 숫자는 ','로 구분합니다. 숫자 앞뒤로 띄어쓰기가 있어도 숫자만 있다면 제대로 인식합니다.

- 숫자가 아닌 것을 입력하거나,
- 소수를 입력하거나,
- 6개 미만이나 초과하는 숫자를 입력하거나,
- 1~45 범위 미만, 초과하는 숫자를 입력하거나,
- 중복된 숫자를 입력하면  
  다시 입력해야 하니, 주의해서 입력해 주세요.

```
보너스 번호를 입력해 주세요.
7
```

**보너스 번호**도 동일하게 작동합니다. 보너스 번호는 당첨 번호와 중복을 점검하여 숫자를 중복하여 입력 시 다시 입력해야 합니다.

```
당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

입력이 모두 완료되면 **당첨 통계**가 나옵니다.  
총 수익률은 구매 금액을 기준으로 계산됩니다.  
예) 5게임(5000원) 구매로 5등(5,000원) 당첨 시 수익률은 100%
