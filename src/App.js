import { useState } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu.js'
import { About } from './About.js'
import { Users } from './Users.js'
import { LoadUsers } from './LoadUsers.js'
import { default_users } from './data.js'
import './App.css';
import 'antd/dist/antd.css';
const { Content } = Layout;

const defaultUserProps = {
  id: 0,
  data: '',
  name: '',
  position: '',
  external_expert: '',
  mail: '',
  password: '',
  phone: ''
}

function App() {
  const [users, setUsers] = useState(default_users)
  const [isApplyFilters, setIsApplyFilters] = useState(false)
  const [filter, setFilter] = useState({ id: '', name: '', position: '', mail: '' })
  const [isAddModalVisible, setAddModalVisible] = useState(false)
  const [addedUserProps, setAddUserProps] = useState(defaultUserProps)
  const addUser = () => {
    let userId = users.sort( (a, b) => b.id - a.id)[0].id + 1
    setUsers([...users, {...addedUserProps, id: userId}])
    setAddUserProps(defaultUserProps)
    setAddModalVisible(false)
  }
  const addUserModalCancel = () => {
    setAddUserProps(defaultUserProps)
    setAddModalVisible(false)
  }
  const addUserProps = (userProp, userPropValue) => setAddUserProps({...addedUserProps, [userProp]: userPropValue})
  const addFilter = (filterName, filterValue) => setFilter({...filter, [filterName]: filterValue})
  const applyFilter = () => setIsApplyFilters(!isApplyFilters)
  return (
    <Layout className='layout'>
      <Content className='content'>
        <Menu />
        <Switch>
          <Route path='/' exact render={props => <LoadUsers {...props} users={users} />} />
          <Route path='/about' component={About} />
          <Route path='/users' render={props => <Users {...props} users={users} isApplyFilters={isApplyFilters}             
             filter={filter} isAddModalVisible={isAddModalVisible} addUserProps={addUserProps} addUser={addUser}
             setAddModalVisible={setAddModalVisible} user={addedUserProps} cancelAdd={addUserModalCancel}
             addFilter={addFilter} applyFilter={applyFilter}
             />} />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
