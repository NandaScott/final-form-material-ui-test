import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Base from './Base';
import WizardIndex from './WizardIndex';
import Wizard from './Wizard';

const App = () => (
    <React.Fragment>
        <Base />
        <WizardIndex />
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'));

