import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Base from './Base';
import WizardIndex from './WizardIndex';
import { Grid } from '@material-ui/core';
import FinalFormExample from './FinalFormExample';

const App = () => (
    <React.Fragment>
        <Grid container xs={12} spacing={24}>
            <Grid item xs>
                <Base />
            </Grid>
            <Grid item xs>
                <WizardIndex />
            </Grid>
            <Grid item xs>
                <FinalFormExample />
            </Grid>
        </Grid>
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'));

