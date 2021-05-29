import React from "react";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion"

function Footer(){
  const ButtonCvarients1={init1:{x:'100vw'},anim1:{x:0,transition:{delay:1,duration:2}}};
  const ButtonCvarients2={init1:{x:'100vw'},anim1:{x:0,transition:{delay:1.5,duration:2}}};
  const ButtonCvarients3={init1:{x:'100vw'},anim1:{x:0,transition:{delay:2,duration:2}}};
  const ButtonCvarients4={init1:{y:'100vw'},anim1:{y:0,transition:{delay:3,duration:3}}};
  const containvarients={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}}};
  const exitDiv={animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};
  const btnHover={hovers:{scale:1.1,transition:{yoyo:Infinity,duration:0.4,type:"spring",stiffness:520}}}


    return(<motion.div variants={exitDiv} exit="animat">

<motion.section style={{marginBottom: "15rem!important",marginTop: "15rem!important",paddingTop:"30px",paddingBottom:"50px",background:"#303846"}}  variants={containvarients} initial="init" animate="anim">
<div className="container ml-auto mr-auto p-2">
<div className="row">
<br/>
    <br/>
<motion.div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto"  variants={ButtonCvarients1} initial="init1" animate="anim1">
<h4 className="whitecolor">Docs</h4>
<NavLink to="/docs">
<motion.p className="whitecolor"   variants={btnHover} whileHover="hovers">Getting Started</motion.p></NavLink>
<NavLink to="/overview">
<motion.p className="whitecolor"   variants={btnHover} whileHover="hovers">Components</motion.p></NavLink>
</motion.div>
<motion.div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto"  variants={ButtonCvarients2} initial="init1" animate="anim1">
<h4 className="whitecolor">Community</h4>
<motion.p className="whitecolor"   variants={btnHover} whileHover="hovers">Facebook</motion.p>
<motion.p className="whitecolor"   variants={btnHover} whileHover="hovers">Instagram</motion.p>
</motion.div>

<motion.div className="col col-10 col-lg-3 col-md-5 col-sm-8 col-xsm-10 mx-auto"  variants={ButtonCvarients3} initial="init1" animate="anim1">
<h4 className="whitecolor">More</h4>
<NavLink to="/about">
<motion.p className="whitecolor"   variants={btnHover} whileHover="hovers">About-Us</motion.p></NavLink>
</motion.div>
<br/>
<br/>
</div></div>
<br/>
  <div className="d-flex align-items-center">
<div className="container-fluid nav-bg">
    <div className="row">
<div className="col-2 mx-auto">
<div className="row" >
<NavLink to="/home">
<motion.div style={{flexDirection:"row",display:"flex",marginLeft:"10px"}}  variants={btnHover} whileHover="hovers">
  <img style={{height:"40px",marginRight: ".5rem",alignSelf:"center"}} alt="logo" src="https://reactnativeelements.com/img/logo-icon.svg"/>
  <h4 style={{alignSelf:"center",color:"white"}}>React Lab
  </h4></motion.div>
  </NavLink>
</div>
</div>
</div>
</div>
</div> 
</motion.section>
        
   </motion.div>);
}
export default Footer;