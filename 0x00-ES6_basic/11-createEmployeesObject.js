/* eslint-disable */
export default function createEmployeesObject(departmentName, employees) {
    const obj = {
        [departmentName]: employees,
    };
    return obj;
}

console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));