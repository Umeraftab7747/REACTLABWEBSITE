import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '40%',
    height:"auto",
    overflow:"scroll",
    background: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
}));

function MyModel({openModel,closeModel,children}) {
    const classes=useStyles();
    const [modalStyle]=useState(getModalStyle);
    return (
        <Modal
open={openModel}
onClose={closeModel}
>
   <div style={modalStyle} className={classes.paper}>
{children}
<br/>
    </div>
</Modal>
    )
}

 
export default MyModel