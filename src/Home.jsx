import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import {motion} from "framer-motion"
import AnimatedPar from "./AnimatedPar";
import AnimatedPar2 from "./AnimatedPar2";
import images1 from "./images/newImage.png"
const textvarients={init:{y:'-100vw'},anim:{y:0,transition:{delay:1,duration:2}}};
const containvarients={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}}};
const exitDiv={animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};
const textvarients2={init1:{y:'-100vw'},anim1:{y:0,transition:{delay:1.5,duration:2}}};
const ButtonCvarients2={init1:{y:'100vw'},anim1:{y:0,transition:{delay:2,duration:2}}};
const btnHover={hovers:{scale:1.3,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px black",transition:{yoyo:Infinity,duration:0.4,type:"spring",stiffness:520}}}
function Home(){
    return(<motion.div style={{overflow:"hidden"}} variants={exitDiv} exit="animat">
    <section>
<motion.div className="hero" style={{height:"80vh"}} variants={containvarients} initial="init" animate="anim">
<div style={{margin:"auto"}}>
<motion.h1 style={{color:"white",textAlign:"center",fontSize:"3rem",marginBottom:"10px"}} variants={textvarients} initial="init" animate="anim">React Lab</motion.h1>
<br/>
<motion.h3 style={{color:"white",textAlign:"center",fontSize:"1.5rem",marginBottom:"10px"}} variants={textvarients2} initial="init1" animate="anim1">Cross Platform React Native UI Toolkit</motion.h3>
<br/>
<motion.div  style={{display:"flex",flexDirection:"row",justifyItems:"center",margin:"auto",marginBottom:"10px"}} variants={ButtonCvarients2} initial="init1" animate="anim1">

<NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/docs">
<motion.button className="btn btn-outline-light" variants={btnHover} whileHover="hovers">Get Started</motion.button>
</NavLink><NavLink style={{textAlign:"center",marginLeft:"auto",marginRight:"auto"}} to="/overview">
<motion.button  className="btn btn-outline-light" variants={btnHover} whileHover="hovers">Read Docs</motion.button>
</NavLink></motion.div>
</div>
</motion.div>
</section>
<br/>
<br/>
<br/>
<br/>
<br/>
<section className="d-flex align-items-center" style={{marginBottom: "70px !important",marginTop: "80px !important",minHeight:"60vh"}} >
<div className="container=fluid">
<div className="row overflow-hidden">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-7 pt-1 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<div className="row">

<AnimatedPar title="Cross-Platform" subtitle="Consistent design across android, iOS, and web."/>
<AnimatedPar title="Easy to use" subtitle="Built completely in Javascript. Starting your react native app has never been easier."/>
<AnimatedPar2 title="Customizable" subtitle="Easily style any of our components just the way you want."/>
<AnimatedPar2 title="Community-Driven" subtitle="100% built by the community. We're here because we love open source."/>
</div>
</div>
<div data-aos="fade-in" data-aos-anchor-placement="top-center" data-aos-duration='650' className="col-lg-5 order-1 order-lg-2 header_img"  >
    <img style={{height:"500px"}}  src={`${images1}`} alt="header img" className="img-fluid animated"/>
</div>
</div>
</div>
</div>

</div></section>
<br/>
<br/>
<br/>
   <br/>
<br/>
<br/>
<br/>
<Footer/>   
    </motion.div>);
}
export default Home;