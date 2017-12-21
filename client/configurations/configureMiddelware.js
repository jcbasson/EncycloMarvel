import {Observable} from 'rxjs';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {createLogger} from 'redux-logger'
import {marvelCharacterMinerEpic} from '../components/marvelCharacterMiner/epics/marvelCharacterMinerEpic';
import {marvelCharacterService} from './configureServices';
import marvelCharacterMinerComponent from '../components/marvelCharacterMiner/marvelCharacterMinerComponent';


//Combine all the application epics
const appEpic = combineEpics(marvelCharacterMinerEpic);

//Create redux-observable Epic middleware
export const epicMiddleware = createEpicMiddleware(appEpic, {
    dependencies: {
        marvelCharacterService,
        Observable,
        marvelCharacterMinerComponent
    }
});
//Create logging middleware for tracing
export const loggerMiddleware = createLogger();