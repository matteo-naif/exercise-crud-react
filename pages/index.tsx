import type { NextPage } from 'next'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deleteUser, fetchUserList } from '../api'
import UserList from '../components/userList'
import { UserModel } from '../model/user.model'
import { match } from 'ts-pattern'

const Home: NextPage = () => {
	const queryClient = useQueryClient()

	let { data, status } = useQuery('userList', fetchUserList, {})

	const { mutate } = useMutation('deleteUserList', deleteUser, {
		onSuccess: (response) => {
			console.log(`Utente ${response.id} cancellato con successo`)
			queryClient.invalidateQueries('userList')
		},
	})

	const handleDelete = (user: UserModel) => mutate(user.id)

	return (
		<>
			{match(status)
				.with('error', (e) => `Error fetching data: ${e}`)
				.with('loading', () => `Loading data...`)
				.with('idle', (e) => {})
				.with('success', (e) => (
					<UserList data={data} handleDelete={handleDelete} />
				))
				.exhaustive()}
		</>
	)
}

export default Home
