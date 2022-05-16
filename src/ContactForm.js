import React, {useState} from "react";
import axios from 'axios'
import './Contactform.css';
import { RiMailSendFill } from 'react-icons/all'
import "animate.css/animate.min.css";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

const ContactForm = (props) => {
  const [state, setState] = useState({
    name:'',
    email:'',
    message:''
  });
  const [result, setResult] = useState(null);
  const sendEmail = event => {
    event.preventDefault();
    axios
     .post('/send', { ...state })
     .then(response => {
       setOpen(false);
       setResult(response.data);
       setOpenmodal(true)
       setState({ 
       name: '', 
       email: '', 
       message: '', 
      });
     })
     .catch(() => {
       setResult({ success: false, message: 'Something went wrong. Try again later'});    
       setOpen(false);
       setOpenmodal(false);
   })};
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 270,
    height: 280,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'center',
    alignItems:'flex-start',
    borderRadius:'10px'
  };
  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };
  const [openmodal, setOpenmodal] = React.useState(false);
  const handlemodalClose = () => setOpenmodal(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
      setOpen(!open);
    };

  return (  
    <div className="form">

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop> 
      <Modal
        open={openmodal}
        onClose={handlemodalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <MarkEmailReadIcon sx={{ color: '#02ad4d',
                           textAlign: 'center',
                           width: 50,
                           height: 50,
                           marginLeft:'35%',
                           mb:3
    }}/>
          <Typography id="modal-modal-title" sx={{ 
              fontFamily: 'Assistant, sans-serif',
              fontWeight:'500', fontSize:'14px'
        }} >     
            Thanks for contacting me, i will respond shortly.
          </Typography>
        </Box>
      </Modal>
    <form  onSubmit={sendEmail}>
    <h3>Hi! <span className="emoji">👋</span> Send Me A Message</h3>
    <p>You can text anything, code reviews, gig collaborations, et cetera, i will respond.</p>
    <div className="inputs">
        <div>
        <input 
            type="text" 
            name="name" 
            placeholder="Your fullname"
            required
            value={state.name}
            onChange={onInputChange}
        />
        </div>
        <div> 
        <input
            type="email" 
            name="email" 
            placeholder="Your email address"
            required
            onChange={onInputChange}
            value={state.email}
        />
        </div></div>
        <div>  
        <textarea
            name="message"
            placeholder="Format: Hi Ojochogwu, i am XYZ and i want to inquire on ------ , Kindly respond to this message."
            required
            value={state.message}
            onChange={onInputChange}
        />
        </div>
        <button onClick={handleToggle} type="submit">Send<div className="icons"> <RiMailSendFill/></div> </button>
    </form>     
    </div> 
  );
}

export default ContactForm;
