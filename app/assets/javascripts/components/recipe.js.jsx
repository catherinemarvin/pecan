var Recipe = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    backgroundUrl: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Background Url: {this.props.backgroundUrl}</div>
      </div>
    );
  }
});
