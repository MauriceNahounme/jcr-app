import React from "react";
import { useSelector } from "react-redux";
import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { Container, Nav, Navbar } from "react-bootstrap";
import axios from "axios";

const Topbar = () => {
  const userData = useSelector((state) => state.userReducer);
  const saulsData = useSelector((state) => state.saulsReducer);

  return (
    <div className="topbar container-fluid col-16">
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JCR</Navbar.Brand>
          <Nav style={{ padding: "8px" }}>
            <Nav.Link href="#home">
              <span
                className="avatar-item"
                style={{
                  marginRight: "10px",
                  position: "relative",
                  bottom: "4px",
                }}
              >
                <Badge count={saulsData.length}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
              </span>
              {userData.first_name + " " + userData.last_name}
            </Nav.Link>

            <PoweroffOutlined
              style={{
                color: "white",
                marginLeft: "10px",
                position: "relative",
                top: "15px",
              }}
              onClick={() => {
                axios.post("http://localhost:5000/users/logout");
              }}
            />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
