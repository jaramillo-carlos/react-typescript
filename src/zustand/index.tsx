import create, { GetState, SetState } from 'zustand';

export interface User {
  address: object,
  company: object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export type UserPost = {
  userId: string;
  title: string;
  body: string;
  id: string;
}

export interface MyState {
  // users: object;
  users: User[];
  userDetail: User | undefined;
  userPosts: UserPost[];
  isLoading: boolean;
  getUsers: () => void;
  getUserDetail: (userId: string | number) => void;
  getUserPosts: (userId: string | number) => void;
}

// Create Zustand store, Zustand can have multiples stores
export default create(
  (setState: SetState<MyState>, getState: GetState<MyState>): MyState => {
    return {
      users: [],
      userDetail: undefined,
      userPosts: [],
      isLoading: false,
      getUsers: async () => {
        setState({ isLoading: true });
        const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await result.json();
        setState({ users, isLoading: false });
        console.log(result);
      },
      getUserDetail: async (userId: string | number) => {
        setState({ isLoading: true });
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userDetail = await result.json();
        setState({ userDetail, isLoading: false })
      },
      getUserPosts: async (userId: string | number) => {
        setState({ isLoading: true });
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const userPosts = await result.json();
        setState({ userPosts, isLoading: false })
      }
    }
  }
);