// action creator
export const selectSong = (song) => {
  // return an action
  alert('');
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
