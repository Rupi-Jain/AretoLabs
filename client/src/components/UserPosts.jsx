import { useEffect } from 'react';
import { TextField, Button , Grid} from '@material-ui/core'
import { now } from 'moment';
import UserPostsList from './UserPostsList';
import DatePicker from './DatePicker';
import { getAllPost } from "../services";
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { user as userAtom, userPost as userPostAtom} from '../recoil/atom'

function UserPosts() {
 
  const [posts, setPosts] = useRecoilState(userPostAtom);
  const user = useRecoilValue(userAtom)

  useEffect(() => {
    console.log("user..", user.id)
    return new Promise((resolve, reject) => {
      try {
        // do db call  or API endpoint axios call here and return the promise.
       getAllPost(user.id)
        .then((res) => {
          setPosts(prev => res);
          // resolve(res);
        })
          .catch((err) => {
            setPosts([]); 
            reject("Request error!");
          });
      } catch (error) {
        console.error("GetTest error!==", error);
        reject("Test error!");
      }
    });
  }, []);
  

  return (
    <div className="posts_container"> 
      <DatePicker />
      <div>
        <Grid container spacing={4} direction='column' style={{marginTop:'2em'}}>  
          { 
            posts.map(post => <UserPostsList post={post} />)
          }   
        </Grid> 
      </div>
    </div>
  )
}

export default UserPosts