import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = ({}) => {
  const renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  //return state;
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
// the connect component connects to the store provider
// and passes as props to the SongList component
