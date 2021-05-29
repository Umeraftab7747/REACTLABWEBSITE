import React, { useState, useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";
import MyModel from "./MyModel";
import { motion } from "framer-motion";
import { storage, db } from "./FirebaseConfig";

function MiniCard({ title, category, data }) {
  const [Udata, setUdata] = useState(data.post);
  const [UdataID, setUdataID] = useState(data.id);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [menu, setmenu] = useState("");
  const delate = (e) => {
    e.preventDefault();
    db.collection("posts")
      .doc(`${UdataID}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  const submitform = (e) => {
    e.preventDefault();
    db.collection("posts")
      .doc(`${UdataID}`)
      .update({
        title: Udata.title,
        video: Udata.video,
        para: Udata.para,
        code: Udata.code,
        img: Udata.img,
        category: Udata.category,
      })
      .then(() => {
        console.log("updated");
        setModal2(false);
      });
  };
  useEffect(() => {
    db.collection("menu")
      .orderBy("text", "asc")
      .get()
      .then((snapshot) => {
        setmenu(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  const btnHover = {
    hovers: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration: 0.4,
        type: "spring",
        stiffness: 110,
      },
    },
  };
  return (
    <React.Fragment>
      <div className="col-4">
        <div
          className="container"
          style={{
            backgroundColor: "white",
            height: "auto",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <br />
          <h5 style={{ color: "#3498db" }}>Title: {title}</h5>
          <h6 style={{ color: "#3498db" }}>Category: {category}</h6>

          <br />
          <div className="col">
            <button
              className="btn btn-outline-primary "
              style={{ marginRight: "15px" }}
              onClick={() => setModal2(true)}
            >
              <CreateIcon />
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                setModal3(true);
              }}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        </div>
      </div>

      <MyModel openModel={modal2} closeModel={() => setModal2(false)}>
        <div>
          <motion.form
            className="container"
            style={{
              overflowY: "auto",
              backgroundColor: "white",
              padding: "30px",
              margintop: "25px",
              borderRadius: "25px",
            }}
            onSubmit={submitform}
          >
            <h2
              className="blacksimpletxt"
              style={{ color: "#2089dc", textAlign: "center" }}
            >
              Update Component
            </h2>
            <br />
            <div className="form-group mb-3">
              <motion.input
                variants={btnHover}
                whileHover="hovers"
                type="text"
                value={Udata.title}
                className="form-control"
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                onChange={(e) => setUdata({ ...Udata, title: e.target.value })}
                id="title"
                autoComplete="off"
                placeholder="Title"
                required
              />
            </div>
            <div className="form-group mb-3">
              <motion.textarea
                variants={btnHover}
                whileHover="hovers"
                type="text"
                value={Udata.para}
                className="form-control"
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                onChange={(e) => setUdata({ ...Udata, para: e.target.value })}
                id="para"
                autoComplete="off"
                placeholder="Description"
                required
              />
            </div>
            <div className="form-group mb-3">
              <motion.textarea
                variants={btnHover}
                whileHover="hovers"
                type="text"
                value={Udata.code}
                className="form-control"
                style={{
                  border: "2px solid #2089dc",
                  color: "#2089dc",
                  height: "250px",
                }}
                onChange={(e) => setUdata({ ...Udata, code: e.target.value })}
                id="code"
                autoComplete="off"
                placeholder="Code"
              />
            </div>
            <div className="form-group mb-3">
              <motion.input
                variants={btnHover}
                whileHover="hovers"
                type="text"
                value={Udata.video}
                className="form-control"
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                onChange={(e) => setUdata({ ...Udata, video: e.target.value })}
                id="video"
                autoComplete="off"
                placeholder="Video Link"
              />
            </div>
            <div className="form-group mb-3">
              <div className="col-12">
                <select
                  value={Udata.category}
                  onChange={(e) =>
                    setUdata({ ...Udata, category: e.target.value })
                  }
                  style={{
                    width: "100%",
                    height: "40px",
                    backgroundColor: "transparent",
                    border: "2px solid #2089dc",
                    color: "#2089dc",
                  }}
                  name="cars"
                  id="category"
                >
                  <option disabled>Category</option>
                  {menu &&
                    menu.map((avin, index) => (
                      <option className="maincolor" key={index}>
                        {avin.text}
                      </option>
                    ))}
                  <option className="maincolor">Others</option>
                </select>
              </div>
            </div>

            <img
              style={{ width: "100%", height: "100px", objectFit: "contain" }}
              src={`${Udata.img}`}
              alt="pjo"
            />

            <motion.button
              type="submit"
              variants={btnHover}
              whileHover="hovers"
              className="btn bttn btn-outline-primary"
            >
              Upload Post
            </motion.button>
          </motion.form>
        </div>
      </MyModel>
      <MyModel openModel={modal3} closeModel={() => setModal3(false)}>
        <div>
          <div className="container">
            <center>
              <h5
                style={{
                  color: "tomato",
                  textTransform: "capitalize",
                  marginTop: "30px",
                }}
              >
                Are you sure? You want to delete this!!
              </h5>
              <br />
              <div className="col">
                <button
                  className="btn btn-outline-success "
                  style={{ marginRight: "15px" }}
                  onClick={delate}
                >
                  Yes
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setModal3(false)}
                >
                  No
                </button>
              </div>
            </center>
          </div>
        </div>
      </MyModel>
    </React.Fragment>
  );
}

function MiniCard2({ title, path, data }) {
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
  const [Mdata, setMdata] = useState(data.post);
  const [MdataID, setMdataID] = useState(data.id);

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const submitform = (e) => {
    e.preventDefault();
    db.collection("menu")
      .doc(`${MdataID}`)
      .update({
        text: Mdata.text,
        path: "/" + Mdata.text,
        para: Mdata.para,
      })
      .then(() => {
        console.log("updated");
        setModal(false);
      });
  };
  const delate = (e) => {
    e.preventDefault();
    db.collection("menu")
      .doc(`${MdataID}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <React.Fragment>
      <div className="col-4">
        <div
          className="container"
          style={{
            backgroundColor: "white",
            height: "auto",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <br />
          <h5 style={{ color: "#3498db" }}>Title: {title}</h5>
          <h6 style={{ color: "#3498db" }}>Path: {path}</h6>

          <br />
          <div className="col">
            <button
              className="btn btn-outline-primary "
              style={{ marginRight: "15px" }}
              onClick={() => setModal(true)}
            >
              <CreateIcon />
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => setModal2(true)}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        </div>
      </div>
      <MyModel openModel={modal} closeModel={() => setModal(false)}>
        <div>
          <motion.form
            variants={exitDiv}
            exit="animat"
            initial="init"
            animate="anim"
            className="container"
            style={{
              overflowY: "auto",
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "25px",
            }}
            onSubmit={submitform}
          >
            <h2
              className="blacksimpletxt"
              style={{ color: "#2089dc", textAlign: "center" }}
            >
              Update Category
            </h2>
            <br />
            <div className="form-group mb-3">
              <motion.input
                variants={btnHover}
                whileHover="hovers"
                type="text"
                value={Mdata.text}
                className="form-control"
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                onChange={(e) => setMdata({ ...Mdata, text: e.target.value })}
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
                value={Mdata.para}
                className="form-control"
                style={{ border: "2px solid #2089dc", color: "#2089dc" }}
                onChange={(e) => setMdata({ ...Mdata, para: e.target.value })}
                id="para"
                autoComplete="off"
                placeholder="Enter Category Introductory Paragraph"
                required
              />
            </div>

            <motion.button
              type="submit"
              variants={btnHover}
              whileHover="hovers"
              className="btn bttn btn-outline-primary"
            >
              Update
            </motion.button>
          </motion.form>
        </div>{" "}
      </MyModel>
      <MyModel openModel={modal2} closeModel={() => setModal2(false)}>
        <div>
          <div className="container">
            <center>
              <h5
                style={{
                  color: "tomato",
                  textTransform: "capitalize",
                  marginTop: "30px",
                }}
              >
                Are you sure? You want to delete this!!
              </h5>
              <br />
              <div className="col">
                <button
                  className="btn btn-outline-success "
                  style={{ marginRight: "15px" }}
                  onClick={delate}
                >
                  Yes
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setModal2(false)}
                >
                  No
                </button>
              </div>
            </center>
          </div>
        </div>
      </MyModel>
    </React.Fragment>
  );
}

export default MiniCard;
export { MiniCard2 };
