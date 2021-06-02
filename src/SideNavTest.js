import React, { useEffect, useState } from "react";
import sideManuItems from "./sideManuItems";
import { sideManuItem2, sideManuItem3 } from "./sideManuItems";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import AppsIcon from "@material-ui/icons/Apps";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./images/logo.png";
import NavLists, { NavLists2 } from "./NavLists";
import ReactNavbar from "./ReactNavbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { db } from "./FirebaseConfig";

function SideNavTest({ userStatus, children }) {
  const ButtonCvarients2 = {
    init1: { y: "100vw" },
    anim1: { y: 0, transition: { delay: 3, duration: 3 } },
  };
  const btnHover = {
    hovers: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration: 0.4,
        type: "spring",
        stiffness: 520,
      },
    },
  };
  const exitDiv = {
    init: { x: "-100vw" },
    anim: { x: 0, transition: { duration: 1 } },
    animat: { x: "-100vw", transition: { duration: 1, ease: "easeInOut" } },
  };
  const [posts, setposts] = useState(null);
  useEffect(() => {
    db.collection("menu")
      .orderBy("text", "asc")
      .get()
      .then((snapshot) => {
        setposts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);
  return (
    <motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <ReactNavbar userStatus={userStatus} />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div className="col-12">
          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-3 col-lg-2 col-xl-2  order-1">
              <div style={{ overflowY: "auto", maxHeight: "89vh" }}>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: "10px",
                      }}
                    >
                      <Navbar.Brand href="/home">
                        <motion.h5
                          style={{ color: "#3578e5" }}
                          variants={btnHover}
                          whileHover="hovers"
                        >
                          Create Something New
                        </motion.h5>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>

                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                        <div>
                          <NavLists
                            title="It Starts Basic"
                            item={sideManuItems}
                          />
                          {posts && (
                            <NavLists2 title="Components" item={posts} />
                          )}
                        </div>
                      </Nav>
                    </Navbar.Collapse>
                  </div>
                </Navbar>
              </div>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 order-2">
              <div style={{ overflowY: "auto", maxHeight: "89vh" }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SideNavTest;
