import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from '../components/auth/Auth'
import FindGroup from '../components/findGroup/FindGroup'
import AddGroup from '../components/addGroup/AddGroup'
import Group from '../components/group/Group'
import NewPost from '../components/newPost/NewPost'
import Profile from '../components/profile/Profile'
import Dashboard from '../components/dashboard/Dashboard'
import Post from '../components/post/Post'
import MyPosts from '../components/myPosts/MyPosts'


export default (
<Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/find_group' component={FindGroup} />
    <Route path='/find_group/:id' component={FindGroup} />
    <Route path='/add_group' component={AddGroup} />
    <Route exact path='/group/:id' component={Group} />
    <Route exact path='/post' component={NewPost} />
    <Route path='/profile/:id' component={Profile} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/post/:id' component={Post} />
    <Route path='/myposts/:id' component={MyPosts} />
    
</Switch>

)