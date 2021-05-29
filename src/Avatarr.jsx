import React,{useEffect,useState} from "react";
import CodeTemplate from "./CodeTemplate";
import PostCodeTemplate from "./PostCodeTemplate";
import {db} from "./FirebaseConfig";
import {motion} from "framer-motion"

function Avatarr({titlell,parar}){
  const [posts,setposts]=useState("");
  const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};
  useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>{
      setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
    })
    },[]);
    return(<motion.div variants={exitDiv} exit="animat" initial="init" animate="anim" >
    
      <CodeTemplate title={titlell} titlepara={parar}>
      <h1 className="maincolor">Usage</h1>
      {posts && posts.map((avin,index)=>{ 
        if (avin.post.category=== titlell){
          return <PostCodeTemplate key={index} UseTitle={avin.post.title} videoLink={avin.post.video} UsePara={avin.post.para} codee={avin.post.code} imgsrc={avin.post.img}/>

        }
        else{
          return null;
        }})}
      </CodeTemplate>
    </motion.div>);
}
export default Avatarr;