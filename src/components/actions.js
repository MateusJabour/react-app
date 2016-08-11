'use strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>See repositories</button>
    <button onClick={getStarred}>See starreds</button>
  </div>
)

export default Actions
