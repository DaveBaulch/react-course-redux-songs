// action creator
export const selectSong = (song) => {
  // return an action
  console.log('');
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
