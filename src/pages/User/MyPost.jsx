import React from "react";
import styled from "styled-components";
import axios from "axios";
import HeaderMyPage from "../HeaderMyPage";
import Header from "../Header";

const Container = styled.div`
  margin-top: 93px;
  display: flex;
  justify-content: center;
`
const MyPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  padding: 25px 100px 25px 100px;
  background-color: #F3F3F3;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 500px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #F3F3F3;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 16px;
`;




const MyPost = () => {
    return(
        <Container>
            <Header />
            <HeaderMyPage />
            <MyPostContainer>
        
        <div>
            <Title>내가 작성한 글</Title>
            <InfoContainer>
            </InfoContainer>

            <br />

            {/* 내 댓글 */}
            <Title>내가 작성한 댓글</Title>
            <InfoContainer>
            </InfoContainer>

        </div>
        </MyPostContainer>
    </Container>
    );
};




export default MyPost;