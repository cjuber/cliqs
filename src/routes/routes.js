import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from '../components/auth/Auth'
import FindGroup from '../components/findGroup/FindGroup'
import AddGroup from '../components/addGroup/AddGroup'
import Group from '../components/group/Group'
import NewPost from '../components/newPost/NewPost'
import Profile from '../components/profile/Profile'
import Dashboard from '../components/dashboard/Dashboard'


export default (
<Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/find_group' component={FindGroup} />
    <Route path='/add_group' component={AddGroup} />
    <Route exact path='/group/:id' component={Group} />
    <Route path='/group/:id/post' component={NewPost} />
    <Route path='/profile/:id' component={Profile} />
    <Route path='/dashboard' component={Dashboard} />
</Switch>

)