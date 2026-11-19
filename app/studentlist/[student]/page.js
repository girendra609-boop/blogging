import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "../students";

export default async function StudentDetails({ params }) {
  const { student: studentId } =    await params;
  const student = students.find((item) => item.id === studentId);

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>ID: {student.id}</p>
      <Link href="/studentlist">Back to student list</Link>
    </div>
  );
}