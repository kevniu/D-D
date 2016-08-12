import React, { Component, PropTypes } from 'react';

import HeaderContainer from './Header/HeaderContainer'

class App extends Component {

  render() {
    return (
      <div>
        <HeaderContainer />

        { this.props.children }

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
