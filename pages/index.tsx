import type { NextPage } from 'next'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteUser, fetchUserList } from '../api';
import UserList from '../components/userList'
import { UserModel } from '../model/user.model';
import { match } from 'ts-pattern';

const Home: NextPage = () => {

  const queryClient = useQueryClient();
  
  const { status, data } = useQuery('userList', fetchUserList);
  const { mutate } = useMutation('deleteUserList', deleteUser, 
  { onSuccess: () => queryClient.invalidateQueries('userList') })

  function handleDelete(user: UserModel){
      console.log(`I have to delete ${user.name}`);
      mutate(user.id)
  }

  return <>

    { 
      match(status)
      .with('error', () => `<div>Error fetching data</div>`)
      .with('loading', () => `<div>Loading data...</div>`)
      .with('idle', () => {})
      .with('success', () => <UserList data={data} handleDelete={handleDelete} />)
      .exhaustive()
    }
   
  </>
}

export default Home
