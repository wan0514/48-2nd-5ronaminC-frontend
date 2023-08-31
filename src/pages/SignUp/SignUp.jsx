import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Radio from './components/Radio/Radio';
import { INPUT_RADIO_DATA, INPUT_GUIDE_DATA } from './InputData';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [signupUserInfo, setSignUserInfoData] = useState({
    email: '',
    password: '',
    name: '',
    birthday: '',
    phoneNumber: '',
    gender: '',
    addressNumber: '',
    detailAddress: '',
    favoriteStore: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;

    setSignUserInfoData({ ...signupUserInfo, [name]: value });
  };

  const signup = () => {
    fetch('주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: signupUserInfo.email,
        password: signupUserInfo.password,
        name: signupUserInfo.name,
        birthday: signupUserInfo.birthday,
        phoneNumber: signupUserInfo.phoneNumber,
        gender: signupUserInfo.gender,
        addressNumber: signupUserInfo.addressNumber,
        detailAddress: signupUserInfo.detailAddress,
        favoriteStore: signupUserInfo.favoriteStore,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('회원가입 성공!');
        } else {
          alert('회원가입 양식이 틀립니다.');
        }
      });
  };

  return (
    <div className="main">
      <div className="left">
        <div className="logo">
          <img
            src="https://kr.accounts.ikea.com/resources/static/logo.svg"
            alt="5KEA logo"
          />
        </div>
        <div className="title">
          <h1>5KEA FAMILY 회원가입</h1>
          <div className="description">
            <p>이케아 패밀리가 되어 다양한 쇼룸을 만나보세요!</p>
            <span>이미 이케아 패밀리신가요?</span>
            <span className="goToLogin" onClick={() => navigate('/')}>
              로그인하기
            </span>
          </div>
        </div>
        <div className="info">
          <div>
            <span>5KEA.kr - </span>
            <a href="https://www.ikea.com/kr/ko/customer-service/cookie-policy/">
              쿠키정책
            </a>
            <span>,</span>
            <a href="https://www.ikea.com/kr/ko/customer-service/privacy-policy/privacy-policy-pub20a57ecd">
              개인정보처리방침
            </a>
          </div>
          <div>
            <span>© Inter IKEA Systems B.V. 1999-2023</span>
          </div>
        </div>
      </div>
      <div className="right">
        <form className="userInput" onChange={handleInput}>
          {INPUT_GUIDE_DATA.first.map((el, idx) => (
            <React.Fragment key={el.id}>
              <Input
                className={el.className}
                title={el.title}
                type={el.type}
                placeholder={el.placeholder}
                maxLength={el.maxLength}
                // handleChange={handleInput}
              />
              {idx === 4 && (
                <div className="gender wrap">
                  <label>성별</label>
                  <ul className="radioWrap">
                    {INPUT_RADIO_DATA.gender.map(el => (
                      <Radio
                        key={el.id}
                        name={el.name}
                        title={el.title}
                        // onChange={handleInput}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="favoriteStore wrap">
            <label>선호매장</label>
            <ul className="radioWrap">
              {INPUT_RADIO_DATA.favoriteStore.map(el => (
                <Radio
                  key={el.id}
                  name={el.name}
                  title={el.title}
                  // onChange={handleInput}
                />
              ))}
            </ul>
          </div>

          <div className="buttonWrap wrap">
            <Button name="회원가입 완료" buttonStyle="blue" onClick={signup} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
