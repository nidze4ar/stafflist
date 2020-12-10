import React from 'react';
import { Divider, Table, Button, Typography, Layout, Select, Row, Col } from 'antd';
import {useState} from 'react'
import { AddUserModal } from './AddUserModal.js'
import 'antd/dist/antd.css';
import './users.css'
const {Text} = Typography
const { Option } = Select;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};
export const Users = ({addUser, users, filter, isApplyFilters, isAddModalVisible, setAddModalVisible, 
  addUserProps, user, cancelAdd, applyFilter, addFilter}) => {
  const [selectionType, setSelectionType] = useState('checkbox');

  const filterUsers = (user, filter) => {
    let isPassed = true
    for (var key in filter) {
      if(filter[key] && user[key] !== filter[key]) {
        isPassed = false
      }
    }
    return isPassed
  }
  const filterID = value => addFilter('id', value)
  const filterName = value => addFilter('name', value)
  const filterPosition = value => addFilter('position', value)
  const filterMail = value => addFilter('mail', value)

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      width: '5%',
    },
    {
      title: 'Дата регистрации',
      dataIndex: 'data',
      width: '10%',
    },
    {
      title: 'ФИО',
      dataIndex: 'name',
      width: '15%',
    },
    {
      title: 'Должность',
      dataIndex: 'position',
      width: '10%',
    },
    {
      title: 'Почта(логин)',
      dataIndex: 'mail',
      width: '20%',
    },
    {
      title: 'Пароль',
      dataIndex: 'password',
      width: '20%',
    },
    {
      title: 'Телефон, привязанный к меседжеру',
      dataIndex: 'phone',
      width: '20%',
    },
  ];
  return(
    <Layout className='users'>
    <AddUserModal isAddModalVisible={isAddModalVisible} filter={filter} user={user} addUser={addUser} 
      cancelAdd={cancelAdd} add={addUserProps}/>
    <Layout className='filter'>
    <Divider style={{fontWeight: 'bold'}}>Список экспертов по оценке и руководителей</Divider>
      <Row className="gutter-row"  justify="space-around">
        <Col className="gutter-col" span={4} offset={1}>
          <Text className='filter-text'>ID</Text>
        </Col>
        <Col className="gutter-col" span={4} offset={1}>
          <Text className='filter-text'>ФИО</Text>
        </Col>
        <Col className="gutter-col" span={4} offset={1}>
          <Text className='filter-text'>Должность</Text>
        </Col>
        <Col className="gutter-col" span={4} offset={1}>
          <Text className='filter-text'>Почта(логин)</Text>
        </Col>
      </Row>
      <Row className="gutter-row"  justify="space-around" gutter={16}>      
        <Col className="gutter-col" span={4} offset={15}>
          <Select
          showSearch
          style={{ width: '25vh' }}
          placeholder="Введите ID участника"
          optionFilterProp="children"
          onChange={filterID}>
            {users.map(user => user.id).map((id, index) => <Option value={id} key={index}>{id}</Option>)}
          </Select>
        </Col>
       < Col className="gutter-col" span={4} offset={1}>
          <Select
          showSearch
          style={{ width: '25vh' }}
          placeholder="Введите ФИО участника"
          optionFilterProp="children"
          onChange={filterName}>
            {users.map(user => user.name).map( (name, index) => <Option value={name} key={index}>{name}</Option>)}
          </Select>
        </Col>
       < Col className="gutter-col" span={4} offset={1}>
          <Select
          showSearch
          style={{ width: '25vh' }}
          placeholder="Введите должность участника"
          optionFilterProp="children"
          onChange={filterPosition}>
            {users.map(user => user.position).map((position, index) => <Option value={position} key={index}>{position}</Option>)}
          </Select>
        </Col>
       < Col className="gutter-col" span={4} offset={1}>
          <Select
          showSearch
          style={{ width: '25vh' }}
          placeholder="Введите почту участника"
          optionFilterProp="children"
          onChange={filterMail}>
            {users.map(user => user.mail).map((mail, index) => <Option value={mail} key={index}>{mail}</Option>)}
          </Select>
        </Col>
      </Row>
      <Button type="primary" className='applybtn' onClick={applyFilter}>Применить фильтры</Button>
      <Divider></Divider>
    </Layout>
      <Table columns={columns} pagination={{ position: ['none', 'bottomCenter'] }}
        dataSource={isApplyFilters? users.filter(user => filterUsers(user, filter) ): users} 
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
      />
      <Button type="primary" className='addbtn' onClick={setAddModalVisible} >Добавить пользователя</Button>
    </Layout>
  )
}
  