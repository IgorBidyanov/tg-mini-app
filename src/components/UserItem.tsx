import React from 'react';
import { IUser } from '@/types/FeedTypes';

interface IProps {
  user: IUser
}

const UserItem: React.FC<IProps> = (props) => {
  const { user } = props
  return (
    <li className='user__item'>
      <img className='user__item-img' src={user.picture.large} alt="Фото пользователя" />

      <div className="user__item-name">
        <span>Имя: {user.name.first}</span>
        <span>Фамилия: {user.name.last}</span>
      </div>
    </li>
  );
}

export default UserItem;