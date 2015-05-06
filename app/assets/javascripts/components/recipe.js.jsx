var Recipe = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    backgroundUrl: React.PropTypes.string.isRequired
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
