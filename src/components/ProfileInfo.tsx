import React from 'react';

type ProfileInfoProps = {
  term: string;
  description: string;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ term, description }) => {
  return (
    <div className='description-list'>
      <span className='term'>{term}</span>
      <div className='description'>{description}</div>
    </div>
  );
};

export default ProfileInfo;
