/*eslint-disable */
import getListStudents from "./0-get_list_students.js";

export default function getStudentsByLocation (arr, city) {
    const getLocation = arr.filter(student => student.location === city)

    return getLocation
}
