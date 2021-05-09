'use strict';

const e = React.createElement;
const title = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
class TitleText extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <h1>Hello World</h1>  
    );
  }
}

const domContainer = document.querySelector('#likeBtn');
const titleContainer = document.querySelector('#root');
ReactDOM.render(title(TitleText), titleContainer);
ReactDOM.render(e(LikeButton), domContainer);
