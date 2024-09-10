import React, { useEffect, useState, useCallback } from 'react';
import '@/styles/Feedscreen.css'
import axios from 'axios';
import { IUser } from '@/types/FeedTypes';
import UserItem from '@/components/UserItem';

const FeedScreen: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [usersPage, setUsersPage] = useState<number>(1);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?page=${usersPage}&results=5`);
      setUsersPage(usersPage + 1);
      setUsers([...users, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }, [usersPage, users]);

  const loadMore = () => {
    fetchUsers()
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  return (
    <section className='feed'>
      <h1>Лента пользователей</h1>
      <ul className='feed__list'>
        {users.map((user) => (
          <UserItem user={user} key={user.id.value} />
        ))}
      </ul>
      <button onClick={loadMore}>Загрузить ещё</button>
    </section>
  );
};

export default FeedScreen;