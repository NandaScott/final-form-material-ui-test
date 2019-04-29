import React from 'react';
import { Form, Field } from 'react-final-form';
import CustomTextField from './CustomTextField';
import {
  Typography,
  Paper,
  Grid,
  Button
} from '@material-ui/core';

// import { Icon_Visa, Icon_AmericanExpress, Icon_Discover, Icon_MasterCard } from 'material-ui-credit-card-icons';
import AmericanExpressIcon from './AmericanExpressIcon';
import MasterCardIcon from './MasterCardIcon';

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

export default function AutosuggestAddress() {
  return (
    <div>
      <Paper style={{ padding: '5em' }}>
        <Typography variant="h2" align="center" component="h1" gutterBottom>
          Autosuggest Address
        </Typography>
        <Form
          onSubmit={onSubmit}
          // validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={16} alignItems='flex-end'>
                <Grid container item spacing={16} xs={6}>
                  <Grid item xs={12}><Field fullWidth name="fullName" component={CustomTextField} type="text" label="Full Name" variant="outlined"/></Grid>
                  <Grid item xs={12}><Field fullWidth name="email" component={CustomTextField} type="email" label="Email" variant="outlined"/></Grid>
                  <Grid item xs={12}><Field fullWidth name="address" component={CustomTextField} type="text" label="Address" variant="outlined"/></Grid>
                  <Grid item xs={12}><Field fullWidth name="city" component={CustomTextField} type="text" label="City" variant="outlined"/></Grid>
                  <Grid item xs={6}><Field fullWidth name="state" component={CustomTextField} type="text" label="State" variant="outlined"/></Grid>
                  <Grid item xs={6}><Field fullWidth name="zip" component={CustomTextField} type="text" label="Zip Code" variant="outlined"/></Grid>
                </Grid>
                <Grid container item spacing={16} xs={6}>
                  <Grid item xs={12}>
                    <Typography variant='h6'>Accepted Credit Cards</Typography>
                    <Grid item xs>
                      <AmericanExpressIcon style={{ marginRight: '.5em' }}/>
                      <MasterCardIcon style={{ marginRight: '.5em' }}/>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}><Field fullWidth name="cardName" component={CustomTextField} type="text" label="Name on Card" variant="outlined"/></Grid>
                  <Grid item xs={12}><Field fullWidth name="cardNumber" component={CustomTextField} type="text" label="Card Number" variant="outlined"/></Grid>
                  <Grid item xs={12}><Field fullWidth name="expMonth" component={CustomTextField} type="text" label="Expiration Month" variant="outlined"/></Grid>
                  <Grid item xs={6}><Field fullWidth name="expYear" component={CustomTextField} type="text" label="Expiration Year" variant="outlined"/></Grid>
                  <Grid item xs={6}><Field fullWidth name="cvv" component={CustomTextField} type="text" label="CVV" variant="outlined"/></Grid>
                </Grid>
                <Grid container item alignItems='flex-start' spacing={8} xs={12}>
                  <Grid item xs={3} style={{ marginTop: 16 }}>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={reset}
                      disabled={submitting || pristine}
                      style={{ marginRight: '1em'}}
                    >
                      Reset
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <pre style={{ backgroundColor: 'lightgray', padding: '1em', boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.4)'}}>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )}
      />
      </Paper>
    </div>
  );
}