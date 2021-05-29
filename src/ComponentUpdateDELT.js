import React,{useEffect, useState} from 'react'
import "./index.css";
import {storage,auth, db} from "./FirebaseConfig"
import {Redirect, useHistory} from "react-router-dom"
import Template from './Template';
import TemplateBlue from './TemplateBlue';
import {Row,Toast} from "react-bootstrap"

import {motion} from "framer-motion"
import MiniCard,{MiniCard2} from './MiniCard';
function ComponentUpdateDELT({rexx}) {

    const [state, setstate] = useState({email:null,password:null});
    const [suser,setuser]=useState(null);
    const [posts,setposts]=useState('');
    const [posts2,setposts2]=useState('');


    const [success, setSuccess] = useState(null);
    const [failure, setfailure] = useState(null);
    const [showtost, setClose] = useState(false);

    const ButtonCvarients2={init1:{y:'100vw'},anim1:{y:0,transition:{duration:0.5}}};
    const btnHover={hovers:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",transition:{yoyo:Infinity,duration:0.4,type:"spring",stiffness:520}}}
    const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1,ease:"easeInOut"}}};

    const [Error, setError] = useState(null)
  const handlein=(e)=>{
        const name=e.target.id;
        const value=e.target.value;
        setstate((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value
                }
            })
        }
        useEffect(()=>{
          db.collection("posts").onSnapshot((snapshot)=>{
            setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
          });

          },[]);
          useEffect(()=>{
            db.collection("menu").onSnapshot((snapshot)=>{
              setposts2(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
            })
            },[]);
        const submit=(e)=>{
            e.preventDefault();
    console.log(state);
    auth.signInWithEmailAndPassword(
     state.email,
      state.password
    ).then(() => {
      console.log('LOGIN_SUCCESS');
      setSuccess("done")
    }).catch((err) => {
      console.log('LOGIN_failed');
      setfailure(err)
      setClose(true)
    });
        }
       
if(!rexx){
return <Redirect push to="/login"/>
}
else{




    return (
       
        <div className="herobg">
        <div className="m-5">
     <h1 style={{textAlign:"center",color:"white"}}> Category </h1> 
     </div>
     <div className="container-fluid mb-5">
     <div className="row">
      <div className="col-10 mx-auto">
      <div className="container pl-4 pr-4">
 <div className="row gy-4">
 {posts2 && posts2.map((avin,index)=>{ 
        return (<MiniCard2 title={avin.post.text} key={avin.id} path={avin.post.path} data={avin}/>)
        })}


  </div> </div> </div> </div> </div>
        <div className="m-5">
     <h1 style={{textAlign:"center",color:"white"}}> Components </h1> 
     </div>
     <div className="container-fluid mb-5">
     <div className="row">
      <div className="col-10 mx-auto">
      <div className="container pl-4 pr-4">
 <div className="row gy-4">
 {posts && posts.map((avin,index)=>{ 
        return (<MiniCard title={avin.post.title} key={avin.id} category={avin.post.category} data={avin}/>)
        })}


  </div> </div> </div> </div> </div>
        </div>

        
    )}
}

export default ComponentUpdateDELT
