/*eslint-disable */
import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds (arr) {

    if (!Array.isArray(arr)) {
        return []
    }
    const ids = arr.map(id => id.id)
    return ids;
}

