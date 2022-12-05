import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';

const Picture: React.FC = () => {
  const [image,setImage] = useState('https://api.zbcode.cn/ecy/rand.php');
  
  return (
    <div className='image' style={{backgroundImage:`url(${image})`,}}></div>
  );
};

export default Picture;