import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  //return state;
  return { songs: state.songs };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {

    },
    dispatch
  );


export default connect(mapStateToProps, bindActionCreators)(SongList);
// the connect component connects to the store provider
// and passes as props to the SongList component
