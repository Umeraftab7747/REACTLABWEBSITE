import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 305,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "grey",width:"250px",height:"250px"
  },
}));

export default function DeveloperCard({name,role,href1,href2,href3,href4,avatarr}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{    background: "linear-gradient(#2089dc, #79b6e4)",borderRadius:"25px",padding:"10px"}}>
     <center>
          <Avatar aria-label="recipe" src={`${avatarr}`} className={classes.avatar}>
            {name}
          </Avatar>
        </center>
       

            
    <CardContent>
    <h2>{name}</h2>
    <h4 style={{color:"white"}}>{role}</h4>
        </CardContent>


      <CardActions disableSpacing>



        <IconButton href={href1} aria-label="add to favorites">
          <FacebookIcon />
        </IconButton>
        <IconButton href={href2} aria-label="share">
          <InstagramIcon />
        </IconButton>
        <IconButton href={href3} aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton href={href4} aria-label="share">
          <GitHubIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Skills:</Typography>
          <Typography paragraph>Experience:</Typography>
          <Typography paragraph>Portfolio:</Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}