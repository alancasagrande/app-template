import React from 'react';


export default React.createClass({
  getInitialState: function () {
    return { message: 'App template is running.' };
  },

  render () {
    return (
      <div className='main'>
        {this.state.message}
      </div>
    );
  }
});
