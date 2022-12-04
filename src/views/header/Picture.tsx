import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';

const Picture: React.FC = () => {
  const [image,setImage] = useState('https://api.zbcode.cn/ecy/rand.php');
  
  return (
    <div className='image' style={{background:`url(${image}) no-repeat scroll 50% 0 transparent`,backgroundSize:'100% 100%'}}></div>
  );
};

export default Picture;