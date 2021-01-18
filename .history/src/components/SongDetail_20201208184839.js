import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  //console.log(props);
  return (
    <div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
