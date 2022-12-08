import styled from '@emotion/styled';

export const mainBox = styled.div`
  width: 700px;
  height: 600px;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  box-sizing: border-box;
  border-radius: 50px;
  box-shadow: inset 0 0 20px 5px #d5d5d5;

  @media screen and (max-width: 750px) {
    width: 93.33vw;
  }
`;

export const image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 10px;
`;

export const name = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;
export const bio = styled.span`
  margin: 0 10px 10px 10px;
`;

export const followBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const followText = styled.span`
  margin: 5px 8px 10px 8px;
`;
export const repoText = styled.span`
  margin: 0 10px 10px 10px;
`;
