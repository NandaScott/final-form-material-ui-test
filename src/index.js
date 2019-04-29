import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Base from './Base';
import WizardIndex from './WizardIndex';
import { Grid } from '@material-ui/core';
import FinalFormExample from './FinalFormExample';
import AutosuggestAddress from './AutosuggestAddress';

const App = () => (
    <div style={{ margin: '10em' }}>
        <Grid container spacing={16}>
            <Grid item xs={12}>
                <AutosuggestAddress />
            </Grid>
            <Grid item xs={12}>
                <FinalFormExample />
            </Grid>
            <Grid item xs={6}>
                <Base />
            </Grid>
            <Grid item xs={6}>
                <WizardIndex />
            </Grid>
        </Grid>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

