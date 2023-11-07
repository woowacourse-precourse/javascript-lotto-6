# 미션 - 로또

## ⚽ 전략

- 구입 금액을 입력 받는다.

- n개를 구매했습니다. 
```
1. 금액을 1000으로 나누고 나머지가 있다면 , [ERROR].
2. 1000으로 나눈 값 n개의 Array에 1~45의 랜덤숫자 6개를 담는다. Console.readLineAsync()
3. for문을 사용해서 n번 출력 한다. Console.print()
```

- 당첨 번호를 입력하세요.
```
콤마를 기준으로 1~45 숫자 중에 6개를 고른다.
```

- 보너스 번호를 입력하세요.
```
숫자 한 개 1~45 입력
```

- 당첨 통계


## 💻 기능 구현 코드

- App.js

```javascript
 getUsersCashAndCheck()
```
```
 유저에게 구입 금액을 입력 받고,
 new Cash() 클래스를 통해 에러 확인을 거친 후
 ❌ 다시 입력 받기 || ✅ USERCASH에 저장
```
```javascript
 getLottoNumber()
```
```
 USERCASH를 1000으로 나눈 값을 COUNT에 담는다.
 new Domain() 클래스를 통해 
 로또 숫자Array 를 COUNT만큼 출력한다..(1~45 중에 랜덤으로 6개)
```
```javascript
 getUserNumber()
```
```
 유저에게 6개의 당첨 번호를 입력 받는다.
 USERCHOOSNUMBER 에 Array로 저장.
 new Lotto() 클래스로 에러 화인을 거친 후
 ❌ 다시 입력 받기 || ✅
```
```javascript
 getUserBonusNumber()
```
```
 보너스 넘버 1개 받기
 new Bonus() 클래스로 에러 확인을 거친 후
 ❌ 다시 입력 받기 || ✅ USERBONUSNUMBER에 저장
```
```javascript
 result()
```
```
 new Domain() 클래스를 통해
 최종 결과 값 계산
 출력.
```

```javascript
 play()
```
```
 시작 코드
```

# 에러 클래스 코드
```javascript
 class Cash
```
```
 숫자❌ || 1000으로 나눠지지 않으면 [ERROR]
```
```javascript
 class Lotto
```
```
 숫자가 6개가 아닐 시 || 중복 숫자 || 1~45가 아닐 시 || 숫자 ❌
```
```javascript
 class Bonus
```
```
 숫자❌ || 숫자 1개 초괴 || 전에 고른 6개 중에 중복이면 [ERROR] 
```

# 도메인 코드
```javascript
 class Domain {} 
```
```javascript
 GetLottoNumbers()
```
```
 랜덤 숫자 6개를 받는다.
 LOTTOS에 배열을 담는다.
 그리고 출력한다.
```
```javascript
 ScoreSet()
```
```
 LOTTOS에 담긴 배열을 하나씩 꺼내서 
 USERCHOOSENUMBER의 숫자와 비교한다.
 명시된 조건 대로 SCORE 배열에 카운트 한다.
```
```javascript
 Result()
```
```
 ALLCOST에 맞춘 갯수 만큼 담고
 최종 이익률을 계산해 출력한다.
```

