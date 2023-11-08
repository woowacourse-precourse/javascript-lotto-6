# 3주차 프리코스 미션 - 로또 

## 기능 목록
1.  [⭕] 사용자에게 로또 구입 금액 입력받기

* 1번 - 예외 처리
    * [⭕] 구입 금액이 1,000원 이하인 경우
    * [⭕] 구입 금액이 1,000원 단위가 아닌 경우
    * [⭕] 구입 금액에 문자가 있을 경우
 
2. [⭕] 로또 구입 개수 구하기
3. [⭕] 로또 구입 개수 출력하기
4. [⭕] 구입 개수에 따라 랜덤값인 로또 번호 뽑기
5. [⭕] 로또 번호 오름차순으로 정렬하기
6. [⭕] 로또 번호 배열을 다른 배열에 넣어 2차원 배열을 만들기
7. [⭕] 출력 형식에 맞게 배열의 공백을 제거하기
8. [⭕] 발행한 로또 출력하기
9. [⭕] 사용자에게 당첨 번호 입력받기

* 9번 - 예외 처리
    * [⭕] 입력을 안했을 경우
    * [⭕] 1 ~ 45 사이의 숫자가 아닐 경우
    * [⭕] 6개의 번호를 입력하지 않았을 경우
    * [⭕] 중복되는 숫자를 입력했을 경우

10. [⭕] 사용자에게 보너스 번호 입력받기

* 10번 - 예외 처리
    * [⭕] 입력을 안했을 경우
    * [⭕] 1 ~ 45 사이의 숫자가 아닐 경우
    * [⭕] 문자를 입력했을 경우

11. [⭕] 당첨 번호 배열로 바꾸기
12. [⭕] Lotto 클래스의 객체 생성하기
13. [⭕] 로또 번호와 당첨 번호를 비교해 당첨 개수 구하기
14. [⭕] 당첨 개수가 5이면 보너스 번호도 일치하는지 구하기
15. [⭕] 당첨 통계 구하기
16. [⭕] 당첨 통계 출력하기
17. [⭕] 총 수익률 출력하기

-------
## Lotto 클래스

|메세지||설명|
|checkRange()|1~45 사이가 아닌 숫자의 배열의 길이를 반환한다|
|getNumbersSet()|
|countEqualNumbers()|로또 번호에 당첨 번호가 포함된 개수를 반환한다|
|compareBonusNumber()|로또 번호에 보너스 번호가 포함되었는지 여부를 반환한다|
|getLottoResult()|로또 당첨 결과를 담은 배열을 반환한다|
|checkBonusNumber()|로또 번호와 보너스 번호가 5개 일치할 경우, compareBonusNumber()을 호출해 보너스 번호가 포함되어 있는 여부를 반환한다|
|compareLottoNumbers()| 로또 번호가 당첨 번호, 보너스 번호가 포함되어 있는지 확인 후 로또 당첨 결과를 반환한다|
|getLottoRate()|로또 결과와 로또 구입 금액을 가지고 수익률을 구해 반환한다|


-------
## 기술 스택
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
