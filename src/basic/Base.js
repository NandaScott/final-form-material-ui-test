import React from "react";
import { Form, Field } from "react-final-form";
import CustomCheckbox from "../assets/CustomCheckbox";
import CustomRadio from "../assets/CustomRadio";
import CustomTextField from "../assets/CustomTextField";
import { Typography, Button, Paper } from '@material-ui/core';


class Base extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            values: this.props.initialValues || {},
            button: 0
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUpdateState = this.onChangeUpdateState.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate = (values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        }
        return errors;
    }

    nextPage = () => {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage = () => {
        this.setState({ page: this.state.page - 1});
    }

    handleSubmit = (values) => {
        
    }

    onSubmit = (values) => {
        window.alert(JSON.stringify(values, 0, 2));
    }

    onChangeUpdateState = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div style={{ marginTop: '5em', marginLeft: '5em' }}>
                <Paper style={{ padding: '5em' }}>
                    <Typography variant='h2' gutterBottom>Simple Form</Typography>
                    <Form
                        onSubmit={this.onSubmit}
                        initialValues={{ employed: true, stooge: "larry" }}
                        validate={this.validate}
                        render={({ handleSubmit, reset, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '1em' }}>
                                    <Field
                                    name="firstName"
                                    component={CustomTextField}
                                    type="text"
                                    label="First Name"
                                    variant="outlined"
                                    />
                                </div>
                                <div style={{ marginBottom: '1em' }}>
                                    <Field
                                    name="lastName"
                                    component={CustomTextField}
                                    type="text"
                                    label="Last Name"
                                    variant="outlined"
                                    />
                                </div>
                                <div style={{ marginBottom: '1em' }}>
                                    <Field
                                    name="email"
                                    component={CustomTextField}
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    />
                                </div>
                                <div>
                                    <Field name="employed" component={CustomCheckbox} type="checkbox" />
                                    <label>Employed?</label>
                                </div>
                                <div>
                                    <div>
                                        <label>Favorite Stooge?</label>
                                    <label>
                                        <Field
                                        name="stooge"
                                        component={CustomRadio}
                                        type="radio"
                                        value="larry"
                                        />{" "}
                                        Larry
                                    </label>
                                    <label>
                                        <Field
                                        name="stooge"
                                        component={CustomRadio}
                                        type="radio"
                                        value="moe"
                                        />{" "}
                                        Moe
                                    </label>
                                    <label>
                                        <Field
                                        name="stooge"
                                        component={CustomRadio}
                                        type="radio"
                                        value="curly"
                                        />{" "}
                                        Curly
                                    </label>
                                    </div>
                                </div>
                                <div>
                                    <label>Sauces</label>
                                    <div>
                                    <label>
                                        <Field
                                        name="sauces"
                                        component={CustomCheckbox}
                                        type="checkbox"
                                        value="ketchup"
                                        />{" "}
                                        Ketchup
                                    </label>
                                    <label>
                                        <Field
                                        name="sauces"
                                        component={CustomCheckbox}
                                        type="checkbox"
                                        value="mustard"
                                        />{" "}
                                        Mustard
                                    </label>
                                    <label>
                                        <Field
                                        name="sauces"
                                        component={CustomCheckbox}
                                        type="checkbox"
                                        value="salsa"
                                        />{" "}
                                        Salsa
                                    </label>
                                    <label>
                                        <Field
                                        name="sauces"
                                        component={CustomCheckbox}
                                        type="checkbox"
                                        value="guacamole"
                                        />{" "}
                                        Guacamole
                                    </label>
                                    </div>
                                </div>
                                <div>
                                    <Field name="notes" component={CustomTextField} multiline label="Notes" variant='outlined' style={{ marginBottom: '1em' }} />
                                </div>
                                <div className="buttons">
                                    <Button variant='contained' onClick={reset} style={{ marginRight: '1em' }}>Reset</Button>
                                    <Button variant='contained' color='primary' type='submit' >Submit</Button>
                                </div>
                                <pre style={{ backgroundColor: 'lightgray', padding: '1em', boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.4)'}}
                                    >{JSON.stringify(values, 0, 2)}</pre>
                            </form>
                        )}
                    />
                </Paper>
            </div>
        )
    }
}

export default Base;