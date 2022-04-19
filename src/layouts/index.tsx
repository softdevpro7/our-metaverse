import { Layout, Menu, Divider } from 'antd';
import { contractAddress } from '@/constants';
import { Link, useIntl, setLocale, getLocale } from 'umi';
import { css } from '@emotion/css';

const { Header, Content, Footer } = Layout;

const CommonLayout: React.FC = ({ children }) => {
  const { formatMessage } = useIntl();
  return (
    <Layout>
      <Header>
        <a
          href="/"
          className={css`
            float: left;
            height: 31px;
            line-height: 31px;
            margin: 16px 24px 16px 0;
            cursor: pointer;
            font-size: 28px;
            color: white;
          `}
        >
          OurMetaverseDAO
        </a>
        <Menu
          theme="dark"
          mode="horizontal"
          className={css`
            float: right;
          `}
        >
          <Menu.Item key="read">
            <Link to="/read">
              {formatMessage({
                id: 'read',
              })}
            </Link>
          </Menu.Item>
          <Menu.Item key="whitepaper">
            <Link to="/whitepaper">
              {formatMessage({
                id: 'wihte_paper',
              })}
            </Link>
          </Menu.Item>
          <Menu.Item key="nfts">
            <Link to="/nfts">NFTs</Link>
          </Menu.Item>
          <Menu.Item key="community">
            <Link to="/community">
              {formatMessage({
                id: 'community',
              })}
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a
              onClick={() => {
                if (getLocale() === 'zh-CN') {
                  setLocale('en-US');
                } else {
                  setLocale('zh-CN');
                }
              }}
            >
              {formatMessage({ id: 'lang_switch' })}
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className={css`
          padding: 0 50px;
        `}
      >
        <div
          className={css`
            float: left;
            margin: 16px 24px 16px 0;
            background: rgba(255, 255, 255, 0.3);
          `}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a href="https://etherscan.io/address/${contractAddress}">Contract</a>
        <Divider />
        OurMetaverseDAO ©2022
      </Footer>
    </Layout>
  );
};

export default CommonLayout;
