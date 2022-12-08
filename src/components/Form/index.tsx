import * as S from './style';
import React, { useState } from 'react';
import axios from 'axios';
const From = ({ setUserInfo, setSetting }: any) => {
  const [user, setUser] = useState<string>('');

  const getData = (url: string) => {
    axios.get(url).then((data: any) => {
      const res = data.data;
      setUserInfo({
        img: res.avatar_url,
        userId: res.login,
        name: res.name,
        bio: res.bio,
        repos: res.public_repos,
        followers: res.followers,
        following: res.following,
        url: res.html_url,
      });
      setSetting(() => true);
      setUser('');
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user === '') return;
    const userName = user;
    const url = `https://api.github.com/users/${userName}`;

    getData(url);
    setSetting(true);
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value);
  };

  return (
    <>
      <S.searchBox onSubmit={onSubmit}>
        <S.search
          placeholder="user name"
          type="text"
          value={user}
          onChange={onChange}
        />
      </S.searchBox>
    </>
  );
};

export default From;
