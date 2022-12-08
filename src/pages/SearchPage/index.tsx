import { useEffect } from 'react';
import * as C from '../../components';
import * as S from './style';

function Search({ userInfo, setUserInfo, setting }: any) {
  return (
    <S.mainBox>
      <div>
        <C.Title />
        <C.Form setUserInfo={setUserInfo} setSetting={setting} />
      </div>
      <C.UserInfo info={userInfo} />
    </S.mainBox>
  );
}

export default Search;
