/** @jsxImportSource @emotion/react */
import * as S from './style';
function UserInfo({ info }: any) {
  return (
    <a href={info.url} target="_brank" css={{ textDecoration: 'none' }}>
      <S.mainBox>
        <S.image src={info.img} />
        <S.name>{info.name}</S.name>
        <S.bio>{info.bio}</S.bio>
        <S.followBox>
          <S.followText>팔로워: {info.followers}명</S.followText>
          <S.followText>팔로잉: {info.following}명</S.followText>
        </S.followBox>
        <S.repoText>공개 레포지토리: {info.repos}개</S.repoText>
      </S.mainBox>
    </a>
  );
}

export default UserInfo;
