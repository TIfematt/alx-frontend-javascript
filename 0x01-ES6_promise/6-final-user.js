/* eslint-disbale */

import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName ) {
    const promises = [signUpUser, uploadPhoto]
    
    return Promise.allSettled(promises)
        .then((result) => {
            result.forEach((result) => {
                return ({
                    status: result.status,
                    value: result.value
                })
            })
        })
        .catch((err) => console.log(err))
}
