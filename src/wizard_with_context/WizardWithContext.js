import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import WizardSwitcher, { WizardButton, WizardPage } from './WizardPage';

const faker = require('faker');

class WizardWithContext extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      response: undefined
    }
  }

  componentDidMount() {
    /* Fakes a payload from an API.
      {
        questions: [
          {
            questionNumber: 1,
            questionId: asdf1234,
            ref: qwer5678,
            title: 'the question to ask',
            type: 'question type',
            page: 1,
            options: ([] or ["", "", ""])
          },
          [...{}]
        ]
      }
    */
    let fakePayload = {
      questions: (() => {
        let fakeAnswers = [];
        for (let i = 1; i < 31; i++) {
          fakeAnswers.push({
            questionNumber: i,
            questionId: faker.random.alphaNumeric(10),
            ref: faker.random.alphaNumeric(10),
            title: faker.lorem.sentence(),
            type: 'null',
            page: faker.random.number({ min: 1, max: 30 }),
            options: ((faker.random.number({ max:1 }) > 0) ? [] : Array(15).join('.').split('.'))
          })
        }
        return fakeAnswers;
      })()
    }

    this.setState({ response: fakePayload });

    console.log(this.state)
  }

  render() {
    return (
      <div style={{ marginTop: '5em', marginBottom: '5em' }}>
        <Paper style={{ padding: '5em' }}>
          <Typography variant='h2'>Wizard With Context</Typography>
          <WizardSwitcher formData={this.state.response.questions}>
            <div>
              <WizardPage whenActive='1'>
                <Typography variant='body2'>Page A</Typography>
              </WizardPage>

              <WizardPage whenActive='2'>
                <Typography variant='body2'>Page B</Typography>
              </WizardPage>
            </div>

            <div>
              <WizardButton id='1'>
                <Button variant='contained'>Page A</Button>
              </WizardButton>

              <WizardButton id='2'>
                <Button variant='contained'>Page B</Button>
              </WizardButton>
            </div>
          </WizardSwitcher>
        </Paper>
      </div>
    )
  }
}

export default WizardWithContext;