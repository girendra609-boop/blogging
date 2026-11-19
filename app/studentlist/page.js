import Link from "next/link";
import { students } from "./students";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link href={`/studentlist/${student.id}`}>
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}