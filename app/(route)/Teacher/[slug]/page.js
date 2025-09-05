import React from "react";
import { teachers } from "@/app/constant/Teacher.txt";
import Image from "next/image";
import Teacher_details from "@/app/modules/Teacher/Teacher_details";

const Page = async ({ params }) => {
  // params.slug dynamic URL se aata hai
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === params.slug);

  if (!teacher) {
    return <div className="p-10 text-red-500">Teacher not found!</div>;
  }

  return (
   <>
      <Teacher_details teacher={teacher}/>
    </>
  );
};

export default Page;
