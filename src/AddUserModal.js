import React from 'react';
import { Layout, Modal, Input, DatePicker, Button, Typography } from 'antd';
import moment from 'moment'
import 'antd/dist/antd.css';
const dateFormat = 'YYYY/MM/DD';
const { Text } = Typography;

const style = {  
  marginTop: 5,
  marginBottom: 10,
  marginLeft: '20%',
  width: '45%',
  fontSize: '0.8rem',
}
const fontStyle = {color: 'blue', fontWeight: 'bold' }
const inputLabels = [
  ['ФИО', 'Введите ФИО участника', 'name'],
  ['Должность', 'Введите должность', 'position'],
  ['Почта(логин)', 'Введите почтовый адрес', 'mail'],
  ['Пароль', 'Введите пароль', 'password'],
  ['Телефон, привязанный к меседжеру', 'Введите телефон, привязанный к меседжеру', 'phone'],
]
export const AddUserModal = ({addUser, isAddModalVisible, add, user, cancelAdd}) => {  
  const handleChange = e => add(e.target.id, e.target.value)
  const dateChange = e => add('data', e.format(dateFormat) )
  return(
    <Layout>
    <Modal
    title='Добавление данных об экспертах и оценке их руководителей'
    width='45%' 
    visible={isAddModalVisible}
    centered={true}
    onCancel={cancelAdd}
    footer={<Layout className="footer">
              <Button onClick={addUser} type="primary" style={style}>Сохранить</Button>
            </Layout>}>
      <Input.Group>    
        <div>
          <Text style={{...style, ...fontStyle}}>Дата регистрации</Text>
          <DatePicker defaultValue={moment('2018/01/01', dateFormat)} format={dateFormat} onChange={dateChange} style={style} />
        </div>
        {
          inputLabels.map( (inputlabel, index) => 
          <Layout key={index} >
            <Text style={{...style, ...fontStyle}}>{inputlabel[0]}</Text>    
            <Input style={style} onChange={handleChange} required 
            id={inputlabel[2]} placeholder={inputlabel[1]} value={user[inputlabel[2]]} /> 
          </Layout> 
        )}
      </Input.Group>
  </Modal>
  </Layout>
  )
}
  