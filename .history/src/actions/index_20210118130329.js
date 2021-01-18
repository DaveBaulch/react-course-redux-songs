// action creator
export const selectSong = (song) => {
  // return an action
  console.log('cloicked');
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
