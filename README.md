<img src="https://blog.kakaocdn.net/dn/bqkOYx/btsGfLoj8qI/Z5RKT2TYSjfpuj2KkKeNwk/img.png" width = "400px">


# 📌 프로젝트 및 팀 소개

## 프로젝트 소개 

### 프로젝트 명 : 5KEA

- 5KEA는 [IKEA (https://www.ikea.com/kr/ko/)] 사이트를 모티브하여 인테리어 디자인 아이디어와 조언을 제공하는 서비스입니다.
- 목표
  - 이케아만의 강점을 살리고 좋은 사용자 경험을 주는 것
  - 이케아의 오프라인 매장만의 강점인 '쇼룸'을 온라인에서 경험할 수 있도록 쇼룸 기능 추가 및 재구성
  - 불편한 사용자 경험을 주는 UXUI를 분석하여 개선
- End-User(앤드 유저)
  - 오프라인 인테리어 매장을 가고 싶지만 시간적 여유가 없거나 온라인으로 구매하고 싶은 고객.
  - 막 자신의 집을 가지게 되어 홈퍼니싱을 하고 싶은 신혼부부, 가족, 1인 가구 고객

 
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

|JavaScript|Nodejs|MySql|Express|
| :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://github.com/wan0514/wanted-preonboarding/assets/77326740/f6f7444a-8644-4cd4-9e2f-bb1a91448ef3" alt="icon" width="65" height="65" /> |

<br>

## 협업 툴

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-ffa500?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-fga400?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

<br>


## 📌 5KEA 사이트 소개


| 사이트                 | 구현 모습                                                                                                                           | 담당 개발자                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
|      <div align="center">로그인 페이지   </div>          | <img src = "https://github.com/wan0514/images/assets/77326740/dc1a286b-ac40-46a1-a90a-e22e520fe0f3" width = "400px"> | -프론트엔드: 배정완 <br> -백엔드: 조승연        |
|      <div align="center">회원가입 페이지   </div>          | <img src = "https://github.com/wan0514/images/assets/77326740/1e99d247-c20c-4dbe-92c8-4613dee21cd9" width = "400px"> | -프론트엔드: 배정완 <br> -백엔드: 조승연        |
| <div align="center">메인 페이지   </div>               | <img src ="https://github.com/wan0514/images/assets/77326740/27d7aa35-08a5-4d56-93fe-a3c6f76ea919" width = "400px"> | -프론트엔드: 배정완 <br> -백엔드: 조승연, 김현정        |
| <div align="center">상세 페이지   </div>                 | <img src = "https://github.com/wan0514/images/assets/77326740/d4dc0fc2-a5bb-47a6-8caf-485510f9230d" width = "400px"> | -프론트엔드: 김슬기 <br> -백엔드: 김현정, 방수영        |
| <div align="center">장바구니, 결제 페이지   </div>           | <img src = "https://github.com/wan0514/images/assets/77326740/9aba3563-6ba5-4db6-b2ee-57d7173c5a4e" width = "400px"> | -프론트엔드: 김슬기 <br> -백엔드: 김현정, 방수영          |


# 📌 구현 사항 설명

## 1. 메인 페이지
- 카테고리 버튼을 클릭하면 그에 맞는 쇼룸과 제품을 제공합니다.
  - 카테고리 id와 쇼룸의 id 일치 여부에 따라 버튼 스타일을 다르게 해 활성화 상태를 구현
  - 추후 늘어날 카테고리 데이터를 고려하여 쇼룸 id가 바뀔 때 마다 데이터 요청을 하는 랜더링 방식을 구현

- 쇼룸에서 제공하는 제품에 마우스 호버 시 제품 정보가 제공되어야 하며, 이미지 좌표값에 따라 hover 영역이 바뀌어야합니다.
  - 이미지 크기와 좌표값을 계산하는 함수를 만들어 hover 영역을 랜더링 시켰으며 map 함수를 사용하여 반복적인 랜더링을 수행하여 구현하였습니다.

- Header 의 선호매장을 클릭하면 토글이 열리며, 회원가입시 선택한 선호매장 정보를 볼 수 있어야 합니다.
  - 사용자의 정보 api를 통해 가져온 선호매장 정보를 header 컴포넌트에서 랜더링 시킵니다.

## 2. 로그인, 회원가입 페이지
- 비밀번호, 이메일을 입력 시 작성 조건이 있습니다.
  - 정규표현식을 사용해서 유효성 검사 로직을 구현했습니다.

- id, pw 입력 시 로그인 버튼 활성화 되어야 합니다.
  - 사용자가 입력 여부를 state로 관리하였고, state 상태에 따라 버튼의 비활성화 여부를 보여주었습니다.

## 3. 상세 페이지
- 상품 상세
    - (FE) 기본 구매 정보 페이지 구성
    - (FE) 상품평 글 작성 기능 (별점 UI만)
    - (FE) 상품평 조회/총 개수 기능
    - (BE) 상품 상세정보 프론트에서 GET 요청 시 특정 상품 정보 반환
    - (BE) 상품 review content 값 DB Table에 INSERT
- 상품 찜하기
    - (FE) 찜하기 기능
    - (BE) 찜하기 정보 프론트에서 받으면 DB wishlists Table에 정보 INSERT
- (FE) +/- 주문 기능
- (FE) 장바구니 기능
- (BE) 상품정보 및 user_id 프론트에서 받으면 carts Table에 INSERT
- (FE) 상세정보 가리는 토글

## 4. 장바구니, 결제 페이지
- 장바구니 페이지
    - (FE) 장바구니 페이지 구성
- 장바구니 목록
    - (FE) 상품 정보가 담긴 상품 리스트 나열
    - (BE) 장바구니 제품정보를 프론트에서 GET요청시 리스트로 반환
- 주문 내역 요약
    - (FE) 제품의 총 개수, 제품의 총 가격, 배송 비, 배송 비 포함 총 주문 금액 보여주기
    - (BE) order_items 테이블과 shipping_fee 테이블에서 해당 데이터를 추출해 반환
- 장바구니 삭제
    - (FE) 선택한 제품 삭제 기능
    - (BE) carts 테이블에서 해당 데이터 delete


---------------------------------------

##### Reference

이 프로젝트는 이케아 사이트를 참조하여 학습목적으로 만들었습니다. 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 이 프로젝트에서 사용하고 있는 사진 대부분은 저작권이 있어 해당 프로젝트 외부인이 사용할 수 없습니다.
