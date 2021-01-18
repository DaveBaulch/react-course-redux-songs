import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'No scrubs',
      duration: '4.05'
    },
    {
      title: 'Macarena',
      duration: '2.30'
    },
    {
      title: 'All Star',
      duration: '3.35'
    },
    {
      title: 'I Want it that way',
      duration: '1.45'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    comsole.log('payload')
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
