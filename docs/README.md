# 로또

## 기능 목록

:white_check_mark: 사용자는 로또 구입 금액을 입력할 수 있어야 한다.  
&emsp;:white_check_mark: 단위는 1,000원 이다.  
&emsp;:heavy_exclamation_mark: 1,000으로 나누어 떨어지지 않는 경우 예외 처리한다.  
&emsp;:heavy_exclamation_mark: 숫자 외에 다른 문자가 입력된 경우 예외 처리한다.  
&emsp;:heavy_exclamation_mark: 0 또는 아무것도 입력되지 않은 경우 예외처리 한다.

:white_check_mark: 사용자는 당첨번호를 입력할 수 있어야 한다.  
&emsp;:white_check_mark: 당첨번호는 쉼표(,) 를 기준으로 구분한다.  
&emsp;:heavy_exclamation_mark: 당첨번호는 1에서 45 사이의 숫자 6개여야 한다.  
&emsp;:heavy_exclamation_mark: 당첨번호는 중복되지 않아야 한다.

:white_check_mark: 사용자는 보너스번호를 한 개 입력할 수 있어야 한다.  
&emsp;:heavy_exclamation_mark: 보너스번호는 당첨번호와 중복되지 않아야 한다.  
&emsp;:heavy_exclamation_mark: 보너스번호는 1에서 45사이의 정수여야 한다.

:white_check_mark: 로또 구입 금액에 해당하는 만큼 로또번호를 출력한다.  
&emsp;:white_check_mark: 로또 번호는 구입금액 1,000원 당 한 장이다.  
&emsp;:white_check_mark: 로또 번호는 중복되지 않는 6개의 숫자이다.  
&emsp;:white_check_mark: 로또 번호는 오름차순으로 정렬하여 보여준다.

:white_check_mark: 사용자가 입력한 당첨번호,보너스번호와 로또번호를 비교해 당첨 내역을 출력한다.  
&emsp;:white_check_mark: 숫자 6개가 모두 맞으면 1등이다. / 2,000,000,000원  
&emsp;:white_check_mark: 숫자 5개와 보너스번호 1개가 맞으면 2등이다. / 30,000,000원  
&emsp;:white_check_mark: 숫자 5개가 맞으면 3등이다. / 1,500,000원  
&emsp;:white_check_mark: 숫자 4개가 맞으면 4등이다. / 50,000원  
&emsp;:white_check_mark: 숫자 3개가 맞으면 5등이다. / 5,000원  

:white_check_mark: 당첨내역과 구입금액을 비교해 수익률을 출력한다.  
&emsp;:white_check_mark: 수익률은 소수점 둘째 자리에서 반올림 한다.

## 기능 목록 출력 예시

> 구입금액을 입력해 주세요.  
> 8000
>
> [8, 21, 23, 41, 42, 43]  
> [3, 5, 11, 16, 32, 38]  
> [7, 11, 16, 35, 36, 44]  
> [1, 8, 11, 31, 41, 42]  
> [13, 14, 16, 38, 42, 45]  
> [7, 11, 30, 40, 42, 43]  
> [2, 13, 22, 32, 38, 45]  
> [1, 3, 5, 14, 22, 45]
>
> 당첨 번호를 입력해 주세요.  
> 1,2,3,4,5,6
>
> 보너스 번호를 입력해 주세요.  
> 7
>
> 당첨 통계  
> 3개 일치 (5,000원) - 1개  
> 4개 일치 (50,000원) - 0개  
> 5개 일치 (1,500,000원) - 0개  
> 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개  
> 6개 일치 (2,000,000,000원) - 0개  
> 총 수익률은 62.5%입니다.