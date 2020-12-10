import React from 'react';
import { Layout } from 'antd';
import { Skeleton, Divider } from 'antd';
import 'antd/dist/antd.css';

export const LoadUsers = () => {
  return(
    <Layout>
    {new Array(8).fill(0).map(index => <Layout>
        <Skeleton key={index} loading={true} active />
        <Divider />
      </Layout>)}
    </Layout>
  )
}
  