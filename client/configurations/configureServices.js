import ApiConfigurationSettings from './constants/apiConfigurationSettings';
import MarvelCharactersService from '../services/marvelCharactersService';

export const marvelCharacterService = new MarvelCharactersService(ApiConfigurationSettings);
