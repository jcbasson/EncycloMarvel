import {Observable} from 'rxjs';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {createLogger} from 'redux-logger'
import {marvelCharacterMinerEpic} from '../components/marvelCharacterMiner/epics/marvelCharacterMinerEpic';
import {marvelCharacterService} from './configureServices';
import {appActions} from "./configureActions";

//Combine all the application epics
const appEpic = combineEpics(marvelCharacterMinerEpic);

//Create redux-observable Epic middleware
export const epicMiddleware = createEpicMiddleware(appEpic, {
    dependencies: {
        marvelCharacterService,
        Observable,
        actions: appActions
    }
});
//Create logging middleware for tracing
export const loggerMiddleware = createLogger();