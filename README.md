
<img src="https://blog.kakaocdn.net/dn/bqkOYx/btsGfLoj8qI/Z5RKT2TYSjfpuj2KkKeNwk/img.png" width = "400px">


# 📌 프로젝트 및 팀 소개

### 프로젝트 팀명 : 5ronaminC

### 프로젝트 소개 
- 5KEA는 [IKEA (https://www.ikea.com/kr/ko/)] 사이트를 모티브로 하여 인테리어 디자인 아이디어와 조언을 제공하는 서비스입니다.

### 프로젝트 기간
2023.08.20 ~ 2023.09.1 (약 2주)


### Front-End Developers
- [배정완(Product manager)], [김슬기]

### Back-End Developers
- [방수영(Project manager)], [조승연], [김현정]


## STACK

### Front-End

|JavaScript|React|Sass|esLint|Prettier|
| :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |

### Back-End

|JavaScript|Nodejs|MySql|Rest|
| :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /> |

<br>

## 협업 툴

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

<br>


## 📌 5ronaminC 사이트 소개

| 사이트                 | 구현 모습                                                                                                                           | 담당 개발자                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
|      <div align="center">인트로(로그인) 페이지   </div>          | <img src = "" width = "400px"> | -프론트엔드: 배정완 <br> -백엔드: 조승연        |
| <div align="center">회원가입 페이지   </div>                | <img src ="" width = "400px"> | -프론트엔드: 배정완, 장찬영 <br> -백엔드: 조승연        |
| <div align="center">메인 페이지   </div>               | <img src ="" width = "400px"> | -프론트엔드: 배정완 <br> -백엔드: 조승연, 김현정        |
| <div align="center">상세 페이지   </div>                 | <img src = "" width = "400px"> | -프론트엔드: 김슬기 <br> -백엔드: 김현정, 방수영        |
| <div align="center">장바구니, 결제 페이지   </div>           | <img src = "" width = "400px"> | -프론트엔드: 김슬기 <br> -백엔드: 김현정, 방수영          |


# 📌 구현 사항 설명

## 1. 메인 페이지
1. 카테고리 버튼을 클릭하면 그에 맞는 쇼룸과 제품을 제공합니다.
- 카테고리 id와 쇼룸의 id 일치 여부에 따라 버튼 스타일을 다르게 해 활성화 상태를 구현
- 추후 늘어날 카테고리 데이터를 고려하여 쇼룸 id가 바뀔 때 마다 데이터 요청을 하는 랜더링 방식을 구현

2. 쇼룸에서 제공하는 제품에 마우스 호버 시 제품 정보가 제공되어야 하며, 이미지 좌표값에 따라 hover 영역이 바뀌어야합니다.
- 이미지 크기와 좌표값을 계산하는 함수를 만들어 hover 영역을 랜더링 시켰으며 map 함수를 사용하여 반복적인 랜더링을 수행하여 구현하였습니다.

## 2. 로그인, 회원가입 페이지
1. 비밀번호, 이메일을 입력 시 작성 조건이 있습니다.
- 정규표현식을 사용해서 유효성 검사 로직을 구현했습니다.

## 3. 상세 페이지


## 4. 장바구니, 결제 페이지




##### Reference

이 프로젝트는 이케아 사이트를 참조하여 학습목적으로 만들었습니다. 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 이 프로젝트에서 사용하고 있는 사진 대부분은 저작권이 있어 해당 프로젝트 외부인이 사용할 수 없습니다.
