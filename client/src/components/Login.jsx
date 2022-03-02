import {useEffect, useState} from "react"
import {Grid, Button, TextField, Box} from '@material-ui/core'
import LoginIcon from '@material-ui/icons/AccountCircle';
import { getUser } from '../services';
import { atom, useRecoilState } from 'recoil'
import { user as userAtom} from '../recoil/atom'
import UserPosts from "./UserPosts";
import UserText from "./UserText";

function Login(props) {
  const [user, setUser] = useRecoilState(userAtom);
  const [isUser, setIsUser] = useState(false)

  const handleUser = (e) => {
    
    return new Promise((resolve, reject) => {
      try {
        // do db call  or API endpoint axios call here and return the promise.
       getUser(user.name)
        .then((res) => {
          setUser(prev => res);
          setIsUser(true)
        })
          .catch((err) => {
            setUser({}); 
            reject("Request error!");
          });
      } catch (error) {
        console.error("GetTest error!==", error);
        reject("Test error!");
      }
    });

  }

  return (
    <>
    <Grid  container spacing={4} direction='row'  justifyContent="center" alignItems="center" style={{marginTop:'1em'}}>
      <Grid item>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue=""
          onChange={(e)=>setUser({name:e.target.value})}
        />
      </div>
      </Box>
      </Grid>
      <Grid item>
        <Button startIcon={<LoginIcon />} color="primary" variant="contained" onClick={handleUser}>
          Login
        </Button>  
      </Grid> 
      <Grid item>
        { isUser && <div className="logged_in">Logged in As {user.name}</div>}
      </Grid>
    </Grid>
    {/* { user && <UserPosts /> } */}
    <div className="text_container">
          <UserText />
      </div>
      {isUser  && <UserPosts /> } 
    </>
  )
}

export default Login