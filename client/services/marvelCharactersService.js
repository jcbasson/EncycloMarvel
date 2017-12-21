class MarvelCharactersService{
    constructor(ApiConfigurationSettings)
    {
        this.ApiConfigurationSettings = ApiConfigurationSettings;
        this.maxAmountOfCharacterPerRequestCount = 100;
    }

    fetchCharacters(offset, limit) {
        const requestHeaders = new Headers();
        requestHeaders.append('Content-Type', 'application/json; charset=utf-8');
        const requestOptions = {
            method: 'GET',
            headers: requestHeaders,
        };
        const getUrl = generateCharactersGetUrl(this.ApiConfigurationSettings, offset, limit? limit : this.maxAmountOfCharacterPerRequestCount );
        const request = new Request(getUrl, requestOptions);
        //Execute request to GetPlaces endpoint
        return fetch(request).then((response) => {
            //Check if request was successful
            if (response.ok && response.status === 200) return response.json();
            return null;
        }).then((places) => {
            return places;
        }).catch(error => {
            //TODO: Log this error
            console.log('Error occurred fetching characters : ',error);
            return null;
        });
    };
}

const generateCharactersGetUrl = (apiConfigurationSettings, offset, limit) =>
{
    const {ApiBaseUrl, ApiKey, ApiKeyParamName} = apiConfigurationSettings;
    return `${ApiBaseUrl}characters?limit=${limit}&offset=${offset}&${ApiKeyParamName}=${ApiKey}`;
};

export default MarvelCharactersService