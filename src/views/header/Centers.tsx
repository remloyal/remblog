import React, { useState } from 'react';
import { Button, Image, Space, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

const Center: React.FC = () => {
    return (
        <div className='site-info'>
            <div>
                <Image
                    width={100}
                    height={100}
                    src="https://api.zbcode.cn/ecy/rand.php"
                    preview={false}
                /></div>
            <div>多看书，多看报；少玩电脑，多睡觉</div>
            <div>联系方式</div>
        </div>
    );
};

export default Center;