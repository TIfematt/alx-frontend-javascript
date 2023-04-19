/* eslint-disable */
export default function signUpUser(firstName, lastName) {
    return new Promise((resolve, reject) => {
        if (firstName != null) {
            resolve({
                firstName,
                lastName
            })
        } else {
            reject(new Error)
        }
    })
}
