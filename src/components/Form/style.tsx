import styled from '@emotion/styled';

export const searchBox = styled.form`
  width: 600px;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: 0 auto 20px auto;

  @media screen and (max-width: 700px) {
    width: 85.71vw;
  }
`;
export const search = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px 30px;
  box-sizing: border-box;
  border: 3px solid #e0e0e0;
  border-radius: 50px;
  font-size: 1.3rem;
  box-shadow: 2px 4px 5px rgba(121, 121, 121, 0.25);

  &:focus {
    outline: none;
    border: 3px solid #a8a8a8;
  }
`;
