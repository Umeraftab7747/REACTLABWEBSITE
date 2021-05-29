import React,{ useState,useEffect} from 'react'
import "./index.css";
import {storage, db} from "./FirebaseConfig"
import {Redirect} from "react-router-dom"
import TemplateBlue from './TemplateBlue';
import {motion} from "framer-motion"
function UploadPost({rexx}) {
    const [state, setstate] = useState({title:null,img:null,video:null,para:null,code:null,category:null});
    const [fs,setf]=useState(null);
    const [posts, setposts] = useState(null)
    let [filef,setfilf]=useState("");
    const [rex, setR] = useState(false)
    const [fimg,setfimg]=useState(null);
    const ButtonCvarients2={init1:{y:'100vw'},anim1:{y:0,transition:{delay:1,duration:1.5}}};
    const btnHover={hovers:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",transition:{yoyo:Infinity,duration:0.4,type:"spring",stiffness:110}}}
    const exitDiv={init:{x:'-100vw'},anim:{x:0,transition:{duration:1}},animat:{x:"-100vw",transition:{duration:1.5,ease:"easeInOut"}}};

let constt="";
useEffect(()=>{
  db.collection("menu").orderBy('text',"asc").get().then((snapshot)=>{
    setposts(snapshot.docs.map(doc=>(({id:doc.id,post:doc.data()}))))
  })
    
},[]);
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
            const submit=(e)=>{
                e.preventDefault();
        console.log(state);

        if(state.category){
          db.collection('posts').add({
            title:state.title,
            video:state.video,
            para:state.para,
            code:state.code,
             img:state.img,
             category:state.category
         }).then(()=>{console.log("------datasaved--posted---"); 
          setR(true)
         });
        }
        else{
          alert("Category Is Not Selected ")
        }

                 
             
           
              
            
                  }

            const handleUploadSuccess = filename => {
              storage.ref("images/") 
                .child(filename)
                .getDownloadURL()
                .then(url => { state.img= url.toString();
     setfimg(url);setf("success")

              }
                );
            };

         
                   const fileSelector = (e) => {
                      console.log(e.target.files[0]);
                                    setfilf(e.target.files[0]);  
                                    filef=e.target.files[0]
                  console.log(e.target.files[0].name)
                                    storage.ref("images/").child(e.target.files[0].name).put(filef).then(()=> {
                                      console.log('Uploaded');
                                      constt=filef.name
                                    handleUploadSuccess(constt);
                                    }); 
                  
                                   
                                          };  
                                          
                                          if (rexx)
                                           {return(
                                            <TemplateBlue>
                                                  
                                      
                                            {rex && <Redirect push to="/home"/>}
                                              <motion.form variants={exitDiv} exit="animat" initial="init" animate="anim" className="container" style={{ width:"40%",maxHeight:"80vh",overflowY:"auto",backgroundColor:"white",padding:"30px",margintop:"25px",borderRadius:"25px"}} onSubmit={submit}>
                                      <h2 className="blacksimpletxt" style={{color:"#2089dc",textAlign:"center"}}>Upload Component</h2><br/>
                                      <div className="form-group mb-3">
                                          <motion.input variants={btnHover} whileHover="hovers" type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="title" autoComplete="off" placeholder="Title" required/>
                                        </div>
                                        <div className="form-group mb-3">
                                          <motion.textarea variants={btnHover} whileHover="hovers" type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="para" autoComplete="off" placeholder="Description"  required/>
                                        </div>
                                        <div className="form-group mb-3">
                                          <motion.textarea variants={btnHover} whileHover="hovers" type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc",height:"250px"}} onChange={handlein} id="code" autoComplete="off" placeholder="Code"/>
                                        </div>
                                        <div className="form-group mb-3">
                                          <motion.input variants={btnHover} whileHover="hovers"  type="text" className="form-control" style={{border:"2px solid #2089dc",color:"#2089dc"}} onChange={handlein} id="video" autoComplete="off" placeholder="Video Link"/>
                                        </div>
                                        <div className="form-group mb-3">
                                                                      <div className="col-12">
                                                                       <select defaultValue="Category" onChange={handlein} style={{width:"100%",height:"40px",backgroundColor:"transparent",border:"2px solid #2089dc",color:"#2089dc"}} name="cars" id="category">
                                                                       <option  disabled>Category</option>
                                                                      {posts && posts.map((avin)=><option  className="maincolor" key={avin.id} >{avin.post.text}</option>) }
                                                                      <option  className="maincolor">Others</option>
                                                                       </select></div></div>
                                                                      
                                       
                                        <div className="form-group mb-3">
                                      
                                              
                                      <motion.input type="file"  className="form-control" variants={btnHover} whileHover="hovers"  style={{color:"#2089dc",border:"2px solid #2089dc"}}  onChange={fileSelector}/>
                                        </div>
                                       
                                      { fimg && <img style={{width:"100%",height:"100px",objectFit:"contain"}} src={`${fimg}`} alt="pjo"/>
                                      } 
                                       {(fs)? <div> <br/><motion.p  variants={ButtonCvarients2} initial="init1" animate="anim1"  style={{textAlign:"center",color:"green"}}>Image Uploaded</motion.p></div>:<motion.p variants={ButtonCvarients2} initial="init1" animate="anim1" className="maincolor" >Select Image For Preview</motion.p> }
                                            
                                      
                                        <motion.button type="submit" variants={btnHover} whileHover="hovers"  className="btn bttn btn-outline-primary">Upload Post</motion.button>
                                      </motion.form>
                                   
                                      </TemplateBlue>
                                          )}
                                          else
                                          {return (<Redirect push to="/login"/>)}        
                    
    










}

export default UploadPost
