export type TableConfig<T> = {
	columnName: string
	columnProperty: string
	render?: (e: T) => React.ReactNode
}

type Props<T> = {
	tableConfig: TableConfig<T>[]
	data: T[] | undefined
}

function renderRow<T>(row: T, config: TableConfig<T>): React.ReactNode {
	// Render cb has priority
	if (config.render) return config.render(row)
	// Check if key exist in propery
	if (typeof (row as any)[config.columnProperty] === 'undefined') return
	// return data as is
	return (row as any)[config.columnProperty]
}

const Table = <T extends object>({ tableConfig, data }: Props<T>) => {
	return (
		<>
			{!data && <div>No data</div>}

			{data && (
				<div className="">
					<div className="mt-8 flex flex-col">
						<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
								<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
									<table className="min-w-full divide-y divide-gray-300">
										<thead className="bg-gray-50">
											<tr>
												{tableConfig.map((el, i) => (
													<th
														scope="col"
														className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
														key={`header-${i}`}
													>
														{el.columnName}
													</th>
												))}
											</tr>
										</thead>

										<tbody className="divide-y divide-gray-200 bg-white">
											{data.map((row, indexRow) => (
												<tr key={`tr-${indexRow}`}>
													{tableConfig.map((config, indexColumn) => (
														<td
															className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
															key={`td-${indexRow}-${indexColumn}`}
														>
															{renderRow(row, config)}
														</td>
													))}
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Table
