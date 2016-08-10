'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repository'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='starred'
        title='Starred'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: Proptypes.object.isRequired,
  repos: Proptypes.array.isRequired,
  starred: Proptypes.array.isRequired,
}

export default AppContent
