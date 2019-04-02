import React from 'react'
import { Field } from 'react-final-form'
import Wizard from './Wizard'
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";
import CustomTextField from "./CustomTextField";
import { Paper, Typography, MenuItem } from '@material-ui/core';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const colors = [
    {
        value: '#ff0000',
        label: 'Red'
    },
    {
        value: '#0050ff',
        label: 'Blue'
    },
    {
        value: '#26ff00',
        label: 'Green'
    }
]

const toppings = [
    {
        value: 'ham',
        label: 'Ham'
    },
    {
        value: 'mushrooms',
        label: 'Mushrooms'
    },
    {
        value: 'cheese',
        label: 'Cheese'
    },
    {
        value: 'chicken',
        label: 'Chicken'
    },
    {
        value: 'pineapple',
        label: 'Pinapple'
    }
]

class WizardIndex extends React.Component {
    render() {
        return (
            <div style={{ margin: '5em' }}>
                <Paper style={{ padding: '5em' }}>
                    <Typography variant='h2' gutterBottom>Wizard Form</Typography>
                    <Wizard
                    initialValues={{ employed: true, stooge: 'larry' }}
                    onSubmit={onSubmit}
                    >
                        <Wizard.Page>
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
                                    variant='outlined'
                                />
                            </div>
                        </Wizard.Page>
                        <Wizard.Page
                            validate={values => {
                            const errors = {}
                            if (!values.email) {
                                errors.email = 'Required'
                            }
                            if (!values.favoriteColor) {
                                errors.favoriteColor = 'Required'
                            }
                            return errors
                            }}
                        >
                            <div>
                                <Field
                                    name="email"
                                    component={CustomTextField}
                                    placeholder="Email"
                                    variant='outlined'
                                    margin='normal'
                                />
                            </div>
                            <div>
                                <Field
                                    name='favoriteColor'
                                    component={CustomTextField}
                                    select
                                    variant='outlined'
                                    label='Favorite Color'
                                    style={{ width: '10em' }}
                                >
                                    { colors.map(option => (
                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Field>
                            </div>
                        </Wizard.Page>
                        <Wizard.Page
                            validate={values => {
                            const errors = {}
                            if (!values.toppings) {
                                errors.toppings = 'Required'
                            } else if (values.toppings.length < 1) {
                                errors.toppings = 'Choose one'
                            }
                            return errors
                            }}
                        >
                            <div>
                                <Field name="employed" component={CustomCheckbox} type="checkbox"/>
                                <label>Employed?</label>
                            </div>
                            <div>
                                <Field
                                    name='toppings'
                                    component={CustomTextField}
                                    select
                                    variant='outlined'
                                    label='Favorite Topping'
                                    fullWidth
                                >
                                    { toppings.map(option => (
                                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                    ))}
                                </Field>
                            </div>
                        </Wizard.Page>
                        <Wizard.Page
                            validate={values => {
                            const errors = {}
                            if (!values.notes) {
                                errors.notes = 'Required'
                            }
                            return errors
                            }}
                        >
                            <div>
                                <label>Favorite Stooge?</label>
                                <label>
                                    <Field
                                    name="stooge"
                                    component={CustomRadio}
                                    type="radio"
                                    value="larry"
                                    />
                                    Larry
                                </label>
                                <label>
                                    <Field
                                    name="stooge"
                                    component={CustomRadio}
                                    type="radio"
                                    value="moe"
                                    />
                                    Moe
                                </label>
                                <label>
                                    <Field
                                    name="stooge"
                                    component={CustomRadio}
                                    type="radio"
                                    value="curly"
                                    />
                                    Curly
                                </label>
                            </div>
                            <div>
                                <Field name="notes" component={CustomTextField} multiline label="Notes" variant='outlined' style={{ marginBottom: '1em' }} />
                            </div>
                        </Wizard.Page>
                    </Wizard>
                </Paper>
            </div>
        )
    }
}

export default WizardIndex;