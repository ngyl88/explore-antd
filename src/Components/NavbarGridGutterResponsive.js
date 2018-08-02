import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { routes } from "../Config";
import "./NavbarGridGutterResponsive.css";

const Navbar = () => {
  const gutterObject = { xs: 1, sm: 2, md: 8 };
  return (
    <div className="gutter-example">
      <Row gutter={gutterObject} type="flex" justify="space-around" align="middle">
        {routes.map(route => {
          return (
            <Col key={route.path} className="gutter-row" xs={5} sm={4}>
              <Link to={route.path}>
                <div className="gutter-box">{route.name}</div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Navbar;
