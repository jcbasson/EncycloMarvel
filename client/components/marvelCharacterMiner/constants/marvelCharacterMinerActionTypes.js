class MarvelCharacterMinerActionTypes{
    static get GET_NEXT_BATCH_OF_CHARACTERS()
    {
        return 'GET_NEXT_BATCH_OF_CHARACTERS';
    }
    static get STARTED_MINING_CHARACTERS()
    {
        return 'STARTED_MINING_CHARACTERS';
    }
    static get FIRST_BATCH_OF_CHARACTERS_RETRIEVED()
    {
        return 'FIRST_BATCH_OF_CHARACTERS_RETRIEVED';
    }
    static get FINISHED_MINING_CHARACTERS()
    {
        return 'FINISHED_MINING_CHARACTERS';
    }
    static get SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS()
    {
        return 'SUCCESS_RETRIEVING_NEXT_BATCH_OF_CHARACTERS';
    }
    static get ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS()
    {
        return 'ERROR_RETRIEVING_NEXT_BATCH_OF_CHARACTERS';
    }
}
export default MarvelCharacterMinerActionTypes;