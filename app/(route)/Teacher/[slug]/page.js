import React from "react";
import { teachers } from "@/app/constant/Teacher.txt";
import Image from "next/image";
import Teacher_details from "@/app/modules/Teacher/Teacher_details";

const Page = async ({ params }) => {
  // Get the slug from dynamic route
  const { slug } = await params;

  // Find teacher with matching slug
  const teacher = teachers.find((t) => t.slug === slug);

  // Handle not found case
  if (!teacher) {
    return <div className="p-10 text-red-500">Teacher not found!</div>;
  }

  // Render teacher details
  return (
    <>
      <Teacher_details teacher={teacher} />
    </>
  );
};

export default Page;
