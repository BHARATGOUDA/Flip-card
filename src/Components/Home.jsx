import React, { useState, useRef } from 'react';
import styles from './home.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Toolbar, AppBar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Home = () => {
  const navigate = useNavigate();
  const {index}=useParams();
  const [isFlipped, setIsFlipped] = useState(false);
  const [front, setFront] = useState(
    'https://lh6.ggpht.com/EoH-UNwa_XRNuk0jB7UQDVQdTSigPu4B5zrb3I5iXk289KYfGZOzJgfwP8Y9DEA1O_k%3Dh900'
  );
  const [back, setBack] = useState(
    'https://lh6.ggpht.com/EoH-UNwa_XRNuk0jB7UQDVQdTSigPu4B5zrb3I5iXk289KYfGZOzJgfwP8Y9DEA1O_k%3Dh900'
  );
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);
  const handleFrontImageChange = (e) => {
    setFront(URL.createObjectURL(e.target.files[0]));
  };
  const handleBackImageChange = (e) => {
    setBack(URL.createObjectURL(e.target.files[0]));
  };
  const handleFrontImageButtonClick = () => {
    frontInputRef.current.click();
  };
  const handleBackImageButtonClick = () => {
    backInputRef.current.click();
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            Navbar
          </Typography>
          <Button color="inherit" onClick={() => navigate('/list')}>
            List
          </Button>
        </Toolbar>
      </AppBar>
      <div className={styles.main}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onDoubleClick={handleFlip}>
          <div className={`${styles.front} ${styles.face}`}>
            <div className={styles['centered-container']}>
              <img src={front} alt="" className={styles['centered-image']} />
            </div>
            <input type="file" accept="image/*" ref={frontInputRef} onChange={handleFrontImageChange} style={{ display: 'none' }} />
            <Button variant="contained" color="primary" onClick={handleFrontImageButtonClick}>
              Change Photo
            </Button>
          </div>
          <div className={`${styles.back} ${styles.face}`}>
            <div className={styles['centered-container']}>
              <img src={back} alt="" className={styles['centered-image']} />
            </div>
            <input type="file" accept="image/*" ref={backInputRef} onChange={handleBackImageChange} style={{ display: 'none' }} />
            <Button variant="contained" color="primary" onClick={handleBackImageButtonClick}>
              Change Photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
