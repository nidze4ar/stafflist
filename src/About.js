import React from 'react';
import { Layout, Divider, Skeleton } from 'antd';
import 'antd/dist/antd.css';

export const About = () => {
  return( 
    <Layout>
    {new Array(8).fill(0).map(index => <Layout>
        <Skeleton key={index} loading={true} active />
        <Divider />
      </Layout>)}
    </Layout>
  )
}
  