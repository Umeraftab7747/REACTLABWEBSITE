import React, { useEffect, useState } from "react";
import "./index.css";
import { storage, auth, db } from "./FirebaseConfig";
import { Redirect, useHistory } from "react-router-dom";
import Template from "./Template";
import TemplateBlue from "./TemplateBlue";
import { Row, Toast } from "react-bootstrap";

import { motion } from "framer-motion";
function Login({ rexx }) {
  const [state, setstate] = useState({ email: null, password: null });
  const [suser, setuser] = useState(null);
  const [success, setSuccess] = useState(null);
  const [failure, setfailure] = useState(null);
  const [showtost, setClose] = useState(false);

  const ButtonCvarients2 = {
    init1: { y: "100vw" },
    anim1: { y: 0, transition: { duration: 0.5 } },
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

  const [Error, setError] = useState(null);
  const handlein = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setstate((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .then(() => {
        console.log("LOGIN_SUCCESS");
        setSuccess("done");
      })
      .catch((err) => {
        console.log("LOGIN_failed");
        setfailure(err);
        setClose(true);
      });
  };

  if (rexx) {
    return <Redirect push to="/upload" />;
  } else {
    return (
      <TemplateBlue>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8%",
            marginBottom: "7%",
            paddingBottom: "auto",
            paddingTop: "auto",
          }}
        >
          <motion.form
            variants={exitDiv}
            exit="animat"
            initial="init"
            animate="anim"
            className="container"
            style={{
              backgroundColor: "white",
              padding: "30px",
              margintop: "20px",
              borderRadius: "25px",
            }}
            onSubmit={submit}
          >
            <h1
              className="blacksimpletxt"
              style={{ color: "#2089dc", textAlign: "center" }}
            >
              Authorized Only
            </h1>
            <br />
            <div className="form-group mb-3">
              <motion.input
                type="email"
                className="form-control"
                variants={btnHover}
                whileHover="hovers"
                onChange={handlein}
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                id="email"
                autoComplete="off"
                placeholder="User Email"
              />
            </div>
            <div className="form-group mb-3">
              <motion.input
                type="password"
                className="form-control"
                variants={btnHover}
                whileHover="hovers"
                minLength="6"
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                onChange={handlein}
                id="password"
                autoComplete="off"
                placeholder="User Password"
              />
            </div>

            {failure && (
              <Row>
                <Toast
                  onClose={() => {
                    setClose(false);
                  }}
                  show={showtost}
                  delay={4000}
                  autohide
                  animation
                >
                  <center>
                    <motion.p
                      variants={ButtonCvarients2}
                      initial="init1"
                      animate="anim1"
                      style={{ color: "red", fontSize: "14px" }}
                    >
                      Login Failed{" "}
                    </motion.p>
                    <motion.p
                      variants={ButtonCvarients2}
                      initial="init1"
                      animate="anim1"
                      style={{ fontSize: "12px", color: "red" }}
                    >
                      ({failure.message})
                    </motion.p>
                  </center>
                </Toast>
              </Row>
            )}
            {success && <Redirect push to="/upload" />}

            <br />
            <motion.button
              type="submit"
              variants={btnHover}
              whileHover="hovers"
              className="btn bttn btn-outline-primary"
            >
              Login
            </motion.button>
          </motion.form>
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
        </div>
      </TemplateBlue>
    );
  }
}

export default Login;
