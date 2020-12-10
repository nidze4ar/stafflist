import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd'; 
import 'antd/dist/antd.css';

import './menu.css'
const Menu = () => {
  return(
    <Layout className='menu'>
      <ul>
        <li><Link to='/about'>О платформе</Link></li>
        <li><Link to='/'>Загрузка пользователей</Link></li>
        <li><Link to='/users'>Список пользователей</Link></li>
        <li><p>Техподдержка</p></li>
      </ul>
      <br/>
    </Layout>
  )
}

export default Menu