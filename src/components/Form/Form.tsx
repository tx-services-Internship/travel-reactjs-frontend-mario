import React from 'react'
import {  Grid, TextField, Typography, Select, MenuItem, InputLabel, FormControl, TextareaAutosize } from '@mui/material'
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles'
import './Form.css'

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: '#06da91',
  fontSize: "1.5rem",
  width:"10vw",
  marginTop: '1vh',
  marginBottom: '3vh',
  minWidth: "10rem",
  borderRadius: "15px",
  whiteSpace: "nowrap",
  '&:hover': {
    backgroundColor: "#116F59",
    color: "#F0F0F0",
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.75rem",
  },
}));

const Form = () => {
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

  return (    
    <div className='Form'>
      <form>
      <Grid container style={{ marginLeft: "10%", width:"80%"}}>
        <Grid className='form-group responsive' spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} container style={{marginBottom: '30px'}}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography className='blackColor' variant='h5'>Personal data:</Typography>
            </Grid>
          <Grid item xs={12} sm={6} md={6}>  
            <TextField className='white responsive' required type="text" variant='outlined'  label="Name and surname / Ime i prezime" style={{width: '50%', marginLeft: "200px"}} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField className='white responsive' required type="text" variant='outlined' label="Department / Odeljenje" style={{width: '50%', marginRight:"200px"}}  />
          </Grid>

          <Grid  item xs={12} sm={6} md={6}> 
            <TextField className='white responsive' required type="number" variant='outlined'  label="Passport No. / Broj pasosa" style={{width: '50%', marginLeft: "200px"}} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField className='white responsive' required type="text" variant='outlined' label="ID No. / Broj licne karte" style={{width: '50%', marginRight:"200px"}}  />
          </Grid>
        </Grid>


        <Grid className='form-group responsive' spacing={2}  container columnSpacing={{xs: 1, sm: 2, md: 2}}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant='h5' className='blackColor whiteBold responsive' style={{marginTop: '10px', marginBottom: '10px'}}>Travel info:</Typography>
            </Grid>
          <Grid item xs={12} sm={6} md={6}> 
            <TextField className='white responsive' required type="date" variant='outlined' InputLabelProps={{shrink: true}}  label="Departure date / Datum polaska:" style={{width: '50%',marginLeft:"200px" }} />
          </Grid>
          <Grid item  xs={12} sm={6} md={6}>
            <TextField className='white responsive' required type="time" variant='outlined' InputLabelProps={{shrink: true}} label="Departure time / Vreme polaska:" style={{width: '50%', marginRight:"200px"}}  />
          </Grid>

          <Grid item xs={12} sm={6} md={6}> 
            <TextField className='white responsive' required type="date" variant='outlined' InputLabelProps={{shrink: true}}  label="Business trip end date / Datum zavrsetka sl. puta:" style={{width: '50%', marginLeft:"200px"}} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField className='white responsive' 
            InputLabelProps={{shrink: true}}
            required type="time" variant='outlined' label="Business trip end time / Vreme zavrsetka sl. puta:" style={{width: '50%', marginRight:"200px"}}  />
          </Grid>

          <Grid item  xs={12} sm={6} md={6}>
            <TextField className='white responsive' required type="date" InputLabelProps={{shrink: true}} variant='outlined' label="Arrival date / Datum povratka:" style={{width: '50%', marginLeft:"200px"}}  />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <TextField className='white responsive' required type="text" variant='outlined' label="Country and place / Zemlja i mesto:" style={{width: '50%', marginRight:"200px"}}  />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <FormControl className='white responsive' style={{width: '60%'}}>
              <InputLabel>Type of Accomodation / Vrsta smestaja:</InputLabel>
              <Select>
                  <MenuItem value={1}>Hotel</MenuItem>
                  <MenuItem value={2}>Private Accomodation</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        

        <Grid className='form-group responsive' container spacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}} >
            <Grid className="responsive" item xs={12} sm={12} md={12} style={{  marginTop: '2%', marginBottom: '2%'}}>
              <Typography variant='h5' className='blackColor' >Number of meals provided during business trip / Broj obroka obezbedjenih tokom trajanja sluzbenog putovanja:</Typography>
            </Grid>
          <Grid item  xs={12} columnSpacing={{xs: 1, sm: 2, md: 2}}>
              <FormControl className='white responsive' style={{width: '60%'}}>
                <InputLabel>Breakfast</InputLabel>
                <Select>
                    {numbers.map((number, index) => (
                      <MenuItem key={index} value={number}>{number}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item  xs={12} columnSpacing={{xs: 1, sm: 2, md: 2}}>
              <FormControl className='white responsive' style={{width: '60%'}}>
                <InputLabel>Lunch</InputLabel>
                <Select>
                {numbers.map((number, index) => (
                      <MenuItem key={index} value={number}>{number}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item  xs={12} sm={12} md={12}>
              <FormControl className='white responsive' style={{width: '60%'}}>
                <InputLabel>Dinner</InputLabel>
                <Select>
                {numbers.map((number, index) => (
                      <MenuItem key={index} value={number}>{number}</MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid className='form-group responsive' container spacing={1} columnSpacing={{xs: 1, sm: 2, md: 2}}>
              <Grid className='responsive' item xs={12} sm={12} md={12}>
                <Typography className='blackColor' variant='h5'>Transport details</Typography>
              </Grid>
            <Grid item  xs={12} sm={6} md={6}>
                <FormControl className='white responsive' style={{width: '50%', marginLeft: "200px"}}>
                  <InputLabel>Type of transport / Nacin transporta:</InputLabel>
                  <Select>
                      <MenuItem value={1}>Airplane</MenuItem>
                      <MenuItem value={2}>Car</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
              <TextField className='white responsive' required type="text" variant='outlined' label="Vehicle registration number / Reg. broj vozila:" style={{width: '50%', marginRight:"200px"}}  />
            </Grid>
          </Grid>

          <Grid className='form-group responsive' container spacing={1} columnSpacing={{xs: 1, sm: 1, md: 1}}>
              <Grid item xs={12} sm={12} md={12} direction="row">
                <InputLabel className='blackColor' style={{fontSize: "20px", }}>Purpose of Travel / Namena sluzbenog putovanja:</InputLabel>
                <TextareaAutosize
                    minRows={5}
                    placeholder="Purpose of travel"
                    style={{ width: 800 }}
                    className='responsive'
                  />
              </Grid>
          </Grid>
      </Grid>

    {/* <Grid style={{border: '1px solid black'}} columnSpacing={{xs: 1, sm: 3, md: 3}} container spacing={3}>
      <Grid  item xs={12} sm={12} md={12}>
        <Typography className='whiteColor whiteBold responsive' variant='h5'>Expense claim / Refundacija troskova:</Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
              <FormControl className='white responsive' style={{width: "60%"}}>
              <InputLabel variant='standard'>Expense claim / Refundacija troskova:</InputLabel>
                <Select>
                    <MenuItem value={1}>Accommodation costs / Trosak smestaja:</MenuItem>
                    <MenuItem value={2}>Transportaion cost / Troskovi prevoza:</MenuItem>
                    <MenuItem value={3}>Representation cost / Troskovi reprezentacije:</MenuItem>
                    <MenuItem value={4}>Other travel cost / Ostali putni troskovi</MenuItem>
                </Select>
              </FormControl>
      </Grid>

      <Grid  item xs={12} sm={4} md={4}>
            <InputLabel className='responsive' style={{fontSize: "20px", fontWeight: 'bold', color: 'white'}}>Expense description / Opis troska:</InputLabel>
            <TextareaAutosize
                minRows={5}
                placeholder="Purpose of travel"
                style={{ width: 300 }}
                className="responsive"
              />
      </Grid>

      <Grid item container spacing={2} xs={12} sm={4} md={4}>
      <Grid  item xs={12} sm={6} md={6}>
          <TextField className='white' required type="text" variant='outlined' label="Amount / Iznos:" style={{width: '80%'}}  />
      </Grid>
      <Grid  item xs={6}>
          <TextField className='white' required type="text" variant='outlined' label="Currency / Valuta:" style={{width: '80%'}}  />
      </Grid>
      </Grid>
      
    </Grid> */}
    


      <ColorButton>Submit</ColorButton>
    </form>
    </div>
  )
}

export default Form