import React from 'react'
import {NavLink} from "react-router-dom"
import List from '@material-ui/core/List';

function NavLists({item,title}) {
    return (
        <div>
          {title &&  <h5 style={{marginLeft:"9px",color:"black"}}>{title}</h5>}
        <List>
          {item && item.map((avin, index) => (
            <NavLink exact activeClassName="active_class"  className="nav-link h6" style={{marginLeft:"12px",color:"#606770"}} key={index} to={avin.path}>{avin.text}</NavLink>
          ))}
        </List>
        </div>
    )
}
function NavLists2({item,title}) {

    return (
        <div>
          {title &&  <h5  style={{marginLeft:"9px",color:"black"}}>{title}</h5>}
        <List>
          {item && item.map((avin, index) => {
            return   (<NavLink exact activeClassName="active_class"  className="nav-link h6" style={{marginLeft:"12px",color:"#606770"}} key={avin.id} to={avin.post.path}>{avin.post.text}</NavLink>
)
            }
          )}
        </List>
        </div>
    )
}
export default NavLists;
export {NavLists2}