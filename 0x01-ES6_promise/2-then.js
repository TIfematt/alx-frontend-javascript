/* eslint-disable */ 

export default function handleResponseFromAPI(promise) {
    promise.then(() => {
        console.log('Got a response from the API');
    }).catch((err) => {
        console.log('');
    });
}
