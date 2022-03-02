import React from "react"
import {Grid} from '@material-ui/core'

function UserPostsList(props) {

  return (
    <Grid  item className='post' style={{marginBottom:'1em'}}>
      {props.post.text}   
    </Grid>
  )
}

export default UserPostsList