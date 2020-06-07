import React, { memo, MouseEvent } from 'react';
import { UserPost as UserPostProps } from '../../zustand'

export default memo(function UserPosts({
  title,
  body
}: UserPostProps) {

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
});