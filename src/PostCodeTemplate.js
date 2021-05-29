import React,{useState} from 'react'
import CopyToClipboard from "react-copy-to-clipboard"
import ReactPlayer from 'react-player'
import {motion } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Toaster from './Toaster';

function PostCodeTemplate({UseTitle,UsePara,codee,codee2,imgsrc,children,videoLink}) {
  const btnHover={hovers:{scale:1.05,transition:{duration:0.4,type:"spring",stiffness:520}}}

    const [cop, setcop] = useState(false);
const [cop1, setcop1] = useState(false);

const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);

  const  onCopy=()=> {
        setcop(true);
        setShow(true)
      }
      const  onCopy1=()=> {
        setcop1(true);
       
        setShow1(true)
      }
    return (
        <div>
      <div className="container  m-auto px-2 py-2">   
{UseTitle && <header><h1 className="maincolor" style={{textTransform:"capitalize"}}>{UseTitle}</h1></header>
}{UsePara && <p style={{fontSize:"16px",display: "block"}}>{UsePara}</p>
}

<br/>
{children}
<br/>

{imgsrc &&         <div className="ml-auto mr-auto" style={{maxWidth:"80%",marginBottom:"45px"}}>
<br/>
<img style={{width:"100%",height:"300px",objectFit:"contain"}} src={`${imgsrc}`} alt="pics"/>
<br/>
</div>}
{videoLink && <div className="row">
<div className="text_center col-md-8 col-sm-10 ml-auto mr-auto pt-5 pt-lg-0 d-flex justify-content-center flex-column">
<ReactPlayer width="100%" url={videoLink} />
<br/></div></div>}

{codee &&<div>
<motion.div className="container d-block" variants={btnHover} whileHover="hovers" onClick={onCopy}>   
 <CopyToClipboard text={codee} onCopy={cop}>

<SyntaxHighlighter language="javascript"  wrapLines={true} wrapLongLines codetag='true' pretag="true"  style={a11yDark}>
{codee}</SyntaxHighlighter>  
      </CopyToClipboard>
</motion.div>
    <Toaster close={() => setShow(false)} show={show} styled={{color:"green",marginTop:"20px",marginBottom:"20px"}} text="Copied" />   

</div>}

{codee2 &&<div>
<motion.div className="container d-block"  variants={btnHover} whileHover="hovers" onClick={onCopy1}>    
<CopyToClipboard text={codee2} onCopy={cop1}>

<SyntaxHighlighter language="javascript"  wrapLines={true} wrapLongLines codetag='true' pretag="true"   style={a11yDark}>
{codee2}</SyntaxHighlighter>  
      </CopyToClipboard>
</motion.div>
  <Toaster close={() => setShow1(false)} show={show1} styled={{color:"green",marginTop:"20px",marginBottom:"20px"}} text="Copied" />   



</div>}
</div>

         
        </div>
    )
}

export default PostCodeTemplate

