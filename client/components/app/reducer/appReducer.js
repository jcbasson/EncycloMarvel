class AppReducer {
    constructor(Immutable, DefaultAppState, AppActionTypes, MarvelCharacterMinerReducer) {
        this.immutable = Immutable;
        this.defaultAppState = DefaultAppState;
        this.marvelCharacterMinerReducer = MarvelCharacterMinerReducer;

        /**
         * @desc Creates the central app reducer function to be added to the redux store
         * @param {Immutable.Map} state
         * @param {Object} action
         * @returns {Object}
         */
        return (state = this.defaultAppState, action) => {
            const marvelCharacterMinerActionTypes = this.marvelCharacterMinerReducer.actionTypes;
            switch (action.type) {
                case marvelCharacterMinerActionTypes.GET_NEXT_BATCH_OF_CHARACTERS:
                case marvelCharacterMinerActionTypes.STARTED_MINING_CHARACTERS:
                case marvelCharacterMinerActionTypes.FIRST_BATCH_OF_CHARACTERS_RETRIEVED:
                case marvelCharacterMinerActionTypes.FINISHED_MINING_CHARACTERS:
                case marvelCharacterMinerActionTypes.SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
                case marvelCharacterMinerActionTypes.ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS:
                    return this.marvelCharacterMinerReducer.miningMarvelCharacters(state, action);
                default:
                    return state
            }
        };
    }
}

export default AppReducer;