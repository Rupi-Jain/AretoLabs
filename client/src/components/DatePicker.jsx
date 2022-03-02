import { TextField, Grid, IconButton } from '@material-ui/core'
import DoubleArrowTwoToneIcon from '@material-ui/icons/DoubleArrowTwoTone';
import { now } from 'moment';
import { getFilteredPost } from '../services';
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { user as userAtom, userPost as userPostAtom, dateFrom as dateFromAtom, dateTo as dateToAtom} from '../recoil/atom'

function DatePicker(props) {
  const currentDate = new Date();
  const [selectedDateFrom, setSeletedDateFrom] = useRecoilState(dateFromAtom);
  const [selectedDateTo, setSeletedDateTo] = useRecoilState(dateToAtom);
  const [posts, setPosts] = useRecoilState(userPostAtom);
  const user = useRecoilValue(userAtom)

  const handlePosts = (event) => {

    return new Promise((resolve, reject) => {
      try {
        // do db call  or API endpoint axios call here and return the promise.
        getFilteredPost(selectedDateFrom, selectedDateTo, user.id)
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
  }

  return (
    <div>
      <Grid container spacing={4} justify='flex-end' justifyContent="center" alignItems="center">
        <Grid item >
          <TextField
            id="date"
            label="Filter Date From"
            type="date"
            defaultValue={currentDate}
            value={selectedDateFrom}
            onChange={(e)=> setSeletedDateFrom(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </Grid>
          <Grid item>
            <TextField
              id="date"
              label="To"
              type="date"
              defaultValue={currentDate.getDate()}
              value={selectedDateTo}
              onChange={(e)=> setSeletedDateTo(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        <Grid item>
          <IconButton  onClick={handlePosts} >
            <DoubleArrowTwoToneIcon fontSize="large"  />    
          </IconButton>    
        </Grid>
      </Grid>
    </div>
  )
}

export default DatePicker