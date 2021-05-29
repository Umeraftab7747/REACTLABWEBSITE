import React from "react";

function TemplateBlue({ children }) {
  return (
    <section
      id="header"
      className="herobg d-flex overflow-hidden"
      style={{ height: "90vh" }}
    >
      <div
        className="container-fluid"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row my-auto">
              <div
                style={{
                  display: "flex",
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "auto",
                  paddingTop: "auto",
                  width: "100vw",
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TemplateBlue;
