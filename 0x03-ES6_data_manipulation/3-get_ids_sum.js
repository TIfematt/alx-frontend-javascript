/*eslint-disable */
import getListStudents from "./0-get_list_students.js";

export default function getStudentIdsSum (arr) {
    const initialValue = 0;
    const ids = arr.map(id => id.id).reduce(
        (accumulator, currectValue) => accumulator + currectValue,
        initialValue
    )
    return ids
}

