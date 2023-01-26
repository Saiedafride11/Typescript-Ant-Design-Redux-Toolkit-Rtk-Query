import Flights from "./Flights/Flights";
import { Breadcrumb, Layout } from 'antd';
import Navigation from "./Navigation";
const { Content, Footer } = Layout;

export default function Home() {
    
    return (
        <Layout>
            <Navigation/>

            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <Flights/>
            </Content>

            <Footer style={{ textAlign: 'center', background: "#000", color: '#fff', marginTop: '10px' }}>SpaceX ©2023</Footer>
        </Layout>
    );
}
