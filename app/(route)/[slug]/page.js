import { courses } from "@/app/constant/Edunity.txt";
import Course_Details from "@/app/modules/Course_Details/Course_Details";

export default async  function CoursePage ({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <div className="p-10 text-red-500">Course not found</div>;
  }

  return (
   <>
   <Course_Details course={course} />
   </>
  );
}
