import React, { Component, createContext } from 'react';

const context = createContext({
  activePageId: '',
  nextPage: () => {},
  previousPage: () => {}
});

const { Provider, Consumer } = context;

const WizardButton = ({ mode, children }) => {
  if (mode === 'next') {
    return (
      <Consumer>
        {({ nextPage }) => <div onClick={() => nextPage()}>{children}</div>}
      </Consumer>

    )
  }
  else if (mode === 'previous') {
    return (
      <Consumer>
        {({ previousPage }) => <div onClick={() => previousPage()}>{children}</div>}
      </Consumer>
    )
  }
}

const WizardPage = ({ whenActive, children }) => (
  <Consumer>
    {({ activePageId }) => (activePageId === whenActive ? children : null)}
  </Consumer>
)

class WizardSwitcher extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activePageId: '',
      previousPageId: '',
      nextPageId: '',
      payload: undefined,
      currentIndex: undefined,
      pages: undefined
    }
  }

  componentDidMount(props) {
    let fakePayload = this.props.formData.sort((a, b) => (a.page > b.page) ? 1 : -1)

    // Creates a list of integers that are unique.
    let pages = Array.from(new Set(fakePayload.questions.map((value, index) => {
      return value.page;
    })))

    this.setState({
      payload: fakePayload,
      activePageId: pages[0],
      nextPageId: pages[1],
      currentIndex: 0,
      pages: pages
    });
  }

  changePage = newPageId => {
    this.setState({ activePageId: this.state.nextPageId });
  };

  getNextElement = (arr, index) => {
    if (index >=0 && index < arr.length - 1) {
      return arr.indexOf(arr[index + 1])
    } else {
      return arr.indexOf(arr[index])
    }
  }

  getPreviousElement = (arr, index) => {
    if (index >= 0 && index > arr.length - 1) {
      return arr.indexOf(arr[index - 1])
    } else {
      return arr.indexOf(arr[index])
    }
  }

  nextPage = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      activePageId: this.getNextElement(this.state.pages, this.state.currentIndex),
      nextPage: this.getNextElement(this.state.pages, this.state.currentIndex + 1),
      previousPageId: this.state.activePageId
    })
  }

  previousPage = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
      activePageId: this.getPreviousElement(this.state.pages, this.state.currentIndex),
      nextPage: this.state.activePageId,
      previousPage: this.getNextElement(this.state.pages, this.state.currentIndex - 1)
    })
  }

  render() {
    return (
      <Provider value={{
        activePageId: this.state.activePageId,
        nextPage: this.nextPage,
        previousPage: this.previousPage
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export default WizardSwitcher;
export { WizardButton, WizardPage };