import React, { Component, createContext } from 'react';

const context = createContext({});

const { Provider, Consumer } = context;

const WizardButton = ({ id, children }) => (
  <Consumer>
    {({ changePage }) => <div onClick={() => changePage(id)}>{children}</div>}
  </Consumer>
)

const WizardPage = ({ whenActive, children }) => (
  <Consumer>
    {({ activePageId }) => (activePageId === whenActive ? children : null)}
  </Consumer>
)

class WizardSwitcher extends Component {
  
  state = {
    activePageId: 'a'
  }

  changePage = newPageId => {
    this.setState({ activePageId: newPageId });
  };

  render() {
    return (
      <Provider value={{
        activePageId: this.state.activePageId,
        changePage: this.state.changePage
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default WizardSwitcher;
export { WizardButton, WizardPage };