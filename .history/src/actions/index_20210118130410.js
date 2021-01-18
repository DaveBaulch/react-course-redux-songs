// action creator
export const selectSong = (song) => {
  // return an action
  console.log('clicked');
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
