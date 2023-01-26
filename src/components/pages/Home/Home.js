import Flights from "./Flights/Flights";
import { Breadcrumb, Layout, Menu, Image } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Home() {
    
    return (
        <Layout>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <div
                    style={{
                        float: 'left',
                        textAlign: 'left',
                        width: 120,
                        marginTop: '5px',
                    }}
                    >
                    <img src="https://images2.imgbox.com/40/e3/GypSkayF_o.png" alt="logo" style={{width: "20%"}} />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(1).fill(null).map((_, index) => ({
                    key: String(index + 1),
                    label: "Home",
                    }))}
                />
            </Header>

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
