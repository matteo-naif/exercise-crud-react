/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { UserModel } from '../model/user.model'
import Table, { TableConfig } from './Table/table'

type Props = {
	data: UserModel[] | undefined
	handleDelete: (user: UserModel) => void
}

const UserList: FC<Props> = ({ data, handleDelete }) => {
	const tableConfig: TableConfig<UserModel>[] = [
		{
			columnName: '',
			columnProperty: 'imageUrl',
			render: (e) => (
				<img
					src={e.imageUrl || '/vercel.svg'}
					className="inline-block h-14 w-14 rounded-full"
					alt=""
				/>
			),
		},
		{
			columnName: 'Name',
			columnProperty: 'name',
		},
		{
			columnName: 'Email',
			columnProperty: 'email',
		},
		{
			columnName: '',
			columnProperty: 'id',
			render: (e) => (
				<button
					className="text-red-600 hover:text-red-900"
					onClick={() => handleDelete(e)}
				>
					Delete
				</button>
			),
		},
	]

	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8 mt-6">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-xl font-semibold text-gray-900">Users</h1>
						<p className="mt-2 text-sm text-gray-700">
							A list of all the users in your account including their name,
							title, email and role.
						</p>
					</div>
					<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
				</div>

				<Table data={data} tableConfig={tableConfig} />
			</div>
		</>
	)
}

export default UserList
