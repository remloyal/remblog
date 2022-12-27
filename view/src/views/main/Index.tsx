
import { Image, Divider, List, Typography, Avatar } from 'antd';
import { useState } from 'react';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const Lists = () => (
  <>
    <div className="home-list">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
          >
            <div className='item'>
              <div className='post_cover'>

                <img
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className='home-post-info'>
                <div>{item.title}</div>
                <div>{item.title}</div>
                <div>{item.title}</div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  </>
)

const Aside = () => {
  return <>
    <div className="home-aside">
      111111111111
    </div>
  </>
}


const Index = () => {
  return <>
    <div className="home">
      <Lists />
      <Aside />
    </div>
  </>
};
export default Index;