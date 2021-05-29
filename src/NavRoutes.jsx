import React from "react";
import ReactNavbar from "./ReactNavbar";

import {useLocation} from "react-router-dom";
import SideNavTest from "./SideNavTest"
import Routess from "./Routess";

function NavRoutes({status,data}){
    const location =useLocation().pathname;
    return(<div>
    
{(location.match("/home"|| "/"))?
  <div> <ReactNavbar userStatus={status}/>
  <Routess userStatus={status} data={data}/>
  </div>:(location.match("/about"))?
  <div> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </div>:(location.match("/upload"))?
  <div> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </div>:(location.match("/addCategory"))?
  <div> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </div>:(location.match("/ComponentMod"))?
  <div> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </div>:(location.match("/login"))?
  <div> <ReactNavbar  userStatus={status}/>
  <Routess userStatus={status}/>
  </div>:(location.match("/searchComponent"))?
  <div> <ReactNavbar userStatus={status}/>
   <Routess userStatus={status} data={data}/>
  </div>:
  <SideNavTest userStatus={status}>
   <Routess userStatus={status} data={data}/>

   </SideNavTest>

}
         

    </div>);
    }
    export default NavRoutes; 