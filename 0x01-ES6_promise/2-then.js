/* eslint-disable */ 

export default function handleResponseFromAPI(promise) {
    const obj = {'status': 200, 'body': 'Success'}
    return promise
        .then(() => obj)
        .catch(() => new Error())
        .finally(() => { console.log('Got a response from the API'); });
}


const promise = Promise.resolve();
handleResponseFromAPI(promise);