import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core'
import { properCase } from '../helpers/helpers';
import { createPost, getAllPost } from "../services";
import { now } from 'moment';
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { user as userAtom, userPost as userPostAtom} from '../recoil/atom'

function UserText() {
   const [text, setText] = useState('');
   const [time, setTime] = useState('');
   const [error, setError] = useState('')
   const user = useRecoilValue(userAtom)
   const [posts, setPosts] = useRecoilState(userPostAtom);

  
  const handleTextChange = (e) => {
    setError("")
    setText(prev => e.target.value)
  }
  

  const handleClick = () => {
    
    if(text === "") {
      setError("You can't leave Post Blank")
      return;
    }

    const user_text = properCase(text)
    const data = {
      text: user_text,
      time,
      user_id: user.id
    }

    return new Promise((resolve, reject) => {
      try {
        // do db call  or API endpoint axios call here and return the promise.
        createPost(data)
        .then((res) => { 
          // Make request to get all posts of logged in user
          try {
           getAllPost(user.id)
            .then((res) => {
              setPosts(prev => res);
            })
              .catch((err) => {
                setPosts([]); 
                reject("Request error!");
              });
          } catch (error) {
            console.error("GetTest error!==", error);
            reject("Test error!");
          }
        })
          .catch((err) => {
            reject("Request error!");
          });
      } catch (error) {
        console.error("GetTest error!==", error);
        reject("Test error!");
      }
    });

  }

  return (
    <div > 
      <div className="container">
        <TextField 
          label="Enter Text Message" 
          variant="filled" color="success" 
          focused  
          style={{marginBottom:'1em'}}
          onChange={handleTextChange}
          helperText={error}
        />
        <TextField style={{width: '20%'}}
          id="time"
          label="Select Time"
          type="time"
          defaultValue={time}
          value={time}
          onChange={(e)=> setTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="new_post">
        <Button color="primary" variant="contained" onClick={handleClick} >
          Post
        </Button>
      </div>
    </div>
  )
}

export default UserText