"use client";
import React from "react";
import { useFormData } from "@/context/FormDataContext";

export default function ResultsPage() {
  const { formData } = useFormData();

  if (!formData) {
    return <p>No data available. Please submit the form first.</p>;
  }

  return (
    <div className="max-w-3xl w-full mx-auto p-4">
      <h2 className="font-bold text-xl">Submitted Data</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <strong>First Name:</strong> {formData.firstName}
        </li>
        <li>
          <strong>Last Name:</strong> {formData.lastName}
        </li>
        <li>
          <strong>Email:</strong> {formData.email}
        </li>
        <li>
          <strong>GitHub:</strong> {formData.github}
        </li>
        <li>
          <strong>Website:</strong> {formData.website}
        </li>
        <li>
          <strong>Uploaded Files:</strong>{" "}
          {formData.files.length > 0
            ? formData.files.map((file, index) => <p key={index}>{file.name}</p>)
            : "No files uploaded."}
        </li>
      </ul>
    </div>
  );
}
