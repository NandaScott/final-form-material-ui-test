import React from 'react'
import { Form } from 'react-final-form'
import { Button } from '@material-ui/core';

export default class Wizard extends React.Component {
  static Page = ({ children }) => children

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {},
      activeStep: 0
    }
  }
  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
      activeStep: this.state.activeStep + 1
    }))

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0),
      activeStep: this.state.activeStep - 1
    }))

  /**
 * NOTE: Both validate and handleSubmit switching are implemented
 * here because 🏁 Redux Final Form does not accept changes to those
 * functions once the form has been defined.
 */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = values => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values)
    } else {
      this.next(values)
    }
  }

  render() {
    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}>
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2em' }}>
              {activePage}
            </div>
            <div className="buttons">
              {page > 0 && <Button variant='contained' onClick={this.previous} style={{ marginRight: '1em' }}>Previous</Button>}
              {!isLastPage && <Button variant='contained' type='submit' style={{ marginRight: '1em' }}>Next</Button>}
              {isLastPage && <Button variant='contained' color='primary' type='submit' style={{ marginRight: '1em' }}>Submit</Button>}
            </div>
            <pre style={{ backgroundColor: 'lightgray', padding: '1em', boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.4)'}}>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      </Form>
    )
  }
}
