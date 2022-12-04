
import Footer from "./footer";
import Header from "../header/header";
import Main from "./main";
import Float from "./Float";
import { ConfigProvider, Button, theme } from 'antd';
import Menu from "../header/Menu";

const Index = () => {
    return <div className="blog">
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}>
            <Menu />
            <Header />
            <Main />
            <Footer />
            <Float />
        </ConfigProvider>
    </div>
}

export default Index;