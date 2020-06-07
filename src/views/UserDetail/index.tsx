import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMyStore from '../../zustand';
import UserPost from '../../components/UserPost';

const [useStore] = useMyStore;

export default function UserDetail() {
  const { userId } = useParams();
  const getUserDetail = useStore(state => state.getUserDetail);
  const getUserPosts = useStore(state => state.getUserPosts);
  const userDetail = useStore(state => state.userDetail);
  const userPosts = useStore(state => state.userPosts);

  useEffect(() => {
    (async function () {
      await getUserDetail(userId);
      await getUserPosts(userId);
    })();
  }, [])

  const renderPosts = (): JSX.Element[] | undefined => {
    if (userPosts && userPosts.length) {
      return userPosts.map(post => <UserPost key={post.id} {...post} />)
    }
  }

  return (
    <>
      <h1><pre>{userDetail?.name}</pre></h1>
      <h2>Posts</h2>
      {renderPosts()}
    </>
  )
}