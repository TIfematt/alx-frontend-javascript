/* eslint-disbale */

import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName ) {
    const signup = signUpUser(fileName, lastName);
    const upload = uploadPhoto(fileName);
    const promises = [signup, upload]
    
    return Promise.allSettled(promises)
        .then((result) => {
            const newArr = []
            result.forEach((result) => {
                if (result.status == 'fulfilled') {
                    newArr.push({ status: result.status, value: result.value })
                } else {
                    newArr.push({
                        status: result.status,
                        value: `Error: ${result.reason.message}`,
                    });
                }
            });

            return newArr
        });
}
