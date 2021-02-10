import React from 'react';
import Wrapper from '../components/Wrapper';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import ProfileInfo from '../components/ProfileInfo';

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Wrapper>
      <h1>Profile page</h1>
      {user.user && (
        <>
          <ProfileInfo term='First Name: ' description={user.user.firstName} />
          <ProfileInfo term='Last Name: ' description={user.user.lastName} />
          <ProfileInfo term='Email: ' description={user.user.email} />
        </>
      )}
    </Wrapper>
  );
};

export default ProfilePage;
