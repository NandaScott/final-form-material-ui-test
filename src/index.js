import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Grid } from '@material-ui/core';

import Base from './basic/Base';
import WizardIndex from './wizard/WizardIndex';
import FinalFormExample from './ffexample/FinalFormExample';
import WizardWithContext from './wizard_with_context/WizardWithContext';

const App = () => (
    <React.Fragment>
        <Grid container spacing={24}>
            <Grid item xs>
                <Base />
            </Grid>
            <Grid item xs>
                <WizardIndex />
            </Grid>
            <Grid item xs>
                <FinalFormExample />
            </Grid>
            <Grid item xs>
                {/* <WizardWithContext /> */}
            </Grid>
        </Grid>
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'));

