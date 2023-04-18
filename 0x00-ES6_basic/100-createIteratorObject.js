/* eslint-disable */
export default function createIteratorObject(report) {
    const allEmps = [];
    // eslint-disable-next-line
    for (const dep of Object.keys(report.allEmployees)) {
      // eslint-disable-next-line
      for (const emp of report.allEmployees[dep]) {
        allEmps.push(emp);
      }
    }
  
    return allEmps;
}
