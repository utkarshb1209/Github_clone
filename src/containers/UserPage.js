import React, { useState, useEffect } from "react";
import { getUserData, getUserRepositories } from "../components/service";

import Navbar from "../components/Navbar/Navbar";
import UserInfos from "../components/UserInfo/UserInfo";
import Repositories from "../components/Repo/repos";
import Tabs from "../components/Tabs/Tabs";

import Loading from "../components/Loading/Loading";
import { useParams } from "react-router-dom";

function UserPage() {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const params = useParams(); 

  const userNameParams = params.userName;

  useEffect(() => {
    fetchUser();
    fetchRepositories();
  }, []);

  async function fetchUser() {
    const { data } = await getUserData(userNameParams);
    setUser(data);
  }
  async function fetchRepositories() {
    const { data } = await getUserRepositories(userNameParams);
    setRepositories(data);
  }

  return (
    <>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfos user={user} />
            <Tabs repos={repositories} user={user} />
            <Repositories repos={repositories} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default UserPage;