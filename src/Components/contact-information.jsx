import React from 'react'
import { Grid, TextField } from '@material-ui/core'



const ContactInformation = ({name,setName,phone,phoneHelper,email,emailHelper,message,setMessage,onChange,confirmTextField}) => {

    return (
        <React.Fragment  >
          <Grid item>
              <TextField className={confirmTextField} style={{marginTop:'2rem'}}
              id="name"
              label="name"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
              fullWidth

              />
          </Grid>
          <Grid item>
              <TextField className={confirmTextField}
                  id="phone"
                  label="phone"
                  error= {phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  value={phone}
                  onChange={onChange}
                  fullWidth
              />
          </Grid>
          <Grid item>
              <TextField className={confirmTextField}
                  id="email"
                  label="email"
                  error= {emailHelper.length !== 0}
                  helperText={emailHelper}
                  value={email}
                  onChange={onChange}
                  fullWidth
              />
          </Grid>
          <Grid item>
              <TextField className={confirmTextField} style={{marginTop:'6rem'}}
                  id="letter"
                  value={message}
                  onChange={(e) => {setMessage(e.target.value)}}
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
              />
          </Grid>
        </React.Fragment>
    )
}

export default ContactInformation