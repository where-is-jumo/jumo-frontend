import React, { Fragment, useEffect } from 'react'
import { inject, observer } from 'mobx-react'

const UserPage = ({ repoStore: { loadRepos, repoNames } }) => {
	useEffect(() => {
		loadRepos();
	}, [])
	return (
		<Fragment>
			<ul>
				{
					repoNames.map((name: string) =>
						<li key={name}>repo name: {name} </li>
					)
				}
			</ul>
		</Fragment>
	);
}

export default inject('repoStore')(observer(UserPage));