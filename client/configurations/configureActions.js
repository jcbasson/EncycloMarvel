import MarvelCharacterMinerActionTypes from '../components/marvelCharacterMiner/constants/marvelCharacterMinerActionTypes';
import MarvelCharacterMinerActions from '../components/marvelCharacterMiner/actions/marvelCharacterMinerActions';
import AppActions from '../components/app/actions/appActions';

const marvelCharacterMinerActions = new MarvelCharacterMinerActions(MarvelCharacterMinerActionTypes);

export const appActions = new AppActions(null, marvelCharacterMinerActions);

