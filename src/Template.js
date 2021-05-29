import React from 'react'

function Template({children}) {
    return (
        <div>
           <section id="header" >
<div className="container-fluid"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="row">
<div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 p-2 mx-auto">
<div className="row">
{children}


</div>
</div>
</div>
</div>
</section> 
        </div>
    )
}

export default Template
