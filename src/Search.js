import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { db } from "./FirebaseConfig";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
function Search() {
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
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setposts2(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);
  const [posts, setposts] = useState(null);
  const [posts2, setposts2] = useState(null);

  const [inp, setInp] = useState("");
  const [inpt, setInpt] = useState("");

  const onPress = () => {
    setInpt(inp);
  };
  return (
    <div>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row pt-4">
              <div className=" col-4 mx-auto d-flex justify-content-center flex-column">
                <InputGroup className="p-1">
                  <div className="col-10">
                    <select
                      defaultValue="Category"
                      onChange={(e) => setInp(e.target.value)}
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
                      {posts &&
                        posts.map((avin) => (
                          <option className="maincolor" key={avin.id}>
                            {avin.post.text}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-2">
                    <InputGroup.Append>
                      <Button variant="outline-primary" onClick={onPress}>
                        Search
                      </Button>
                    </InputGroup.Append>
                  </div>
                </InputGroup>
              </div>
            </div>
            <div
              style={{ border: "2px solid #2089dc" }}
              className="container-fluid pt-2 pb-1 mt-4"
            >
              {inpt && (
                <div>
                  <center>
                    <h1 className="maincolor">Search Results</h1>{" "}
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        setInpt("");
                        setInp("");
                      }}
                    >
                      Clear
                    </button>
                  </center>
                  {posts2 &&
                    posts2.map((avin, index) => {
                      if (avin.post.category === inpt) {
                        return (
                          <PostCodeTemplate
                            key={index}
                            UseTitle={avin.post.title}
                            videoLink={avin.post.video}
                            UsePara={avin.post.para}
                            codee={avin.post.code}
                            imgsrc={avin.post.img}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                </div>
              )}
              {!inpt && (
                <center>
                  <h6 style={{ color: "grey" }}>
                    Search Results will be displayed here.
                  </h6>
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
