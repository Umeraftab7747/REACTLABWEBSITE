import React from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import UploadPost from "./UploadPost";
import {motion} from "framer-motion"
import {overpara} from "./sideManuItems"
function About(){
  const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};

   
    return(<motion.div variants={exitDiv} exit="animat" initial="init" animate="anim">
      <CodeTemplate title="Overview" titlepara={overpara}>
<PostCodeTemplate UseTitle="Using React Native Elements" UsePara="Mobile Application development is very common nowadays, 
but also a very time-consuming and complex procedure. Especially in the designing stage, it takes a lot of time to create
 a reliable and beautiful design. So, it is very important to solve this problem so that developers can focus on the major
  features of
 the application except spending hours trying to get everything looking and working right across platforms and devices."
 >
<ul>
<h5>Our Objectives are:</h5>
  
<li style={{marginBottom:"10px"}}>To provide a responsive and consistent design for both iOS and android.</li>
<li style={{marginBottom:"10px"}}>To help beginners in developing stunning and robust themes using reusable components without having any prior knowledge of coding.</li>
<li style={{marginBottom:"10px"}}>To make the designing stage simple and less time consuming process.</li>
<li style={{marginBottom:"10px"}}>To reduce human effort towrite Code.</li>
<li style={{marginBottom:"10px"}}>To provide fully customized and interactive components for mobile applications.</li>
<li style={{marginBottom:"10px"}}>To decrease platform bugs.</li>
</ul>

 </PostCodeTemplate>
      </CodeTemplate>
     
    </motion.div>);
}
export default About;