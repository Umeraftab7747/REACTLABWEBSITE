import React, { useState } from "react";
import "./index.css";
import { db } from "./FirebaseConfig";
import { Redirect } from "react-router-dom";
import TemplateBlue from "./TemplateBlue";
import { motion } from "framer-motion";
import Toaster from "./Toaster";
function UploadCategory({ rexx }) {
  const [state, setstate] = useState({ title: "", para: "" });
  const [fail, setfail] = useState(null);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const btnHover = {
    hovers: {
      scale: 1.05,
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
    animat: { x: "-100vw", transition: { duration: 1.5, ease: "easeInOut" } },
  };
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
    db.collection("menu")
      .add({
        text: state.title.replace(/\s+/g, ""),
        path: "/" + state.title.replace(/\s+/g, ""),
        para: state.para,
      })
      .then(() => {
        console.log("------datasaved--posted---");
        setShow(true);
      })
      .catch((e) => {
        setfail("error" + e);
        setShow1(true);
      });

    setstate({ title: "", para: "" });
  };

  if (rexx) {
    return (
      <TemplateBlue>
        <motion.form
          variants={exitDiv}
          exit="animat"
          initial="init"
          animate="anim"
          className="container"
          style={{
            width: "40%",
            maxHeight: "80vh",
            overflowY: "auto",
            backgroundColor: "white",
            padding: "30px",
            margintop: "25px",
            borderRadius: "25px",
          }}
          onSubmit={submit}
        >
          <h2
            className="blacksimpletxt"
            style={{ color: "#2089dc", textAlign: "center" }}
          >
            Add Category
          </h2>
          <br />
          <div className="form-group mb-3">
            <motion.input
              variants={btnHover}
              whileHover="hovers"
              type="text"
              value={state.title}
              className="form-control"
              style={{ border: "2px solid #2089dc", color: "#2089dc" }}
              onChange={handlein}
              id="title"
              autoComplete="off"
              placeholder="Enter Category Name You Want To Add"
              required
            />
          </div>
          <div className="form-group mb-3">
            <motion.textarea
              variants={btnHover}
              whileHover="hovers"
              type="text"
              value={state.para}
              className="form-control"
              style={{ border: "2px solid #2089dc", color: "#2089dc" }}
              onChange={handlein}
              id="para"
              autoComplete="off"
              placeholder="Enter Category Introductory Paragraph"
              required
            />
          </div>
          <Toaster
            close={() => setShow(false)}
            show={show}
            styled={{ color: "green", marginTop: "20px", marginBottom: "20px" }}
            text="Successfully Added"
          />
          <Toaster
            close={() => setShow1(false)}
            show={show1}
            styled={{ color: "red", marginTop: "20px", marginBottom: "20px" }}
            text={fail}
          />

          <motion.button
            type="submit"
            variants={btnHover}
            whileHover="hovers"
            className="btn bttn btn-outline-primary"
          >
            Add
          </motion.button>
        </motion.form>
      </TemplateBlue>
    );
  } else {
    return <Redirect push to="/login" />;
  }
}

export default UploadCategory;
