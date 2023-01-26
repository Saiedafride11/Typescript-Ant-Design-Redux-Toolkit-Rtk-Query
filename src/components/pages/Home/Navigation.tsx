import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navigation = () => {
      return (
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <Link to="/">
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
                </Link>
                <Link to="/">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(1).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: "Home",
                        }))}
                    />
                </Link>
            </Header>
      );
};

export default Navigation;