import React from "react";
import { Layout } from "antd";
import SideNavbar from "../Components/SideNavbar";
import FooterBar from "../Components/FooterBar";
import HeaderBar from "../Components/HeaderBar";
const { Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <SideNavbar/>
      <Layout>
        <HeaderBar/>
        <Content className="site-layout-first">
          <div style={{ padding: "2vw 2vw 0 1vw" }}>

          </div>
        </Content>
        <FooterBar/>
      </Layout>
    </Layout>
  );
};

export default Home;