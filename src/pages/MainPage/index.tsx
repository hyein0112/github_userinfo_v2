import { useEffect, useState } from 'react';
import Search from '../SearchPage';
import * as C from '../../components';
import * as S from './style';

function Main() {
  const [userInfo, setUserInfo] = useState({});
  const [setting, setSetting] = useState(false);

  return setting ? (
    <Search
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      setting={setSetting}
    />
  ) : (
    <S.mainBox>
      <div>
        <C.Title />
        <C.Form setUserInfo={setUserInfo} setSetting={setSetting} />
      </div>
      <div></div>
    </S.mainBox>
  );
}

export default Main;
