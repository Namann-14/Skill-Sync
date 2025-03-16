// // "use client";
// // import React, { useState } from "react";
// // import { Label } from "../ui/label";
// // import { Input } from "../ui/input";
// // import { storeDataOnBlockchain } from "@/utils/blockchain";
// // import { cn } from "@/lib/utils"; // Ensure this function is correctly imported
// // import {
// //   IconBrandGithub,
// //   IconBrandGoogle,
// //   IconBrandOnlyfans,
// //   IconBrandVercel,
// // } from "@tabler/icons-react";
// // import { FileUpload } from "@/components/ui/file-upload";

// // export default function SignupFormDemo() {
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     const formData = {
// //       firstname: document.getElementById("firstname").value,
// //       lastname: document.getElementById("lastname").value,
// //       email: document.getElementById("email").value,
// //       github: document.getElementById("github").value,
// //       website: document.getElementById("website").value,
// //     };
  
// //     console.log("Form Data:", formData);
// //     await storeDataOnBlockchain(formData);
// //   };
// //   const [files, setFiles] = useState([]);
// //   const handleFileUpload = (files) => {
// //     setFiles(files);
// //     console.log(files);
// //   };

// //   return (
// //     <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-12">
// //       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
// //         Welcome to SkillSync
// //       </h2>
// //       <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 ">
// //         Powered by Blockchain and AI, SkillSync analyzes your resumes and GitHub
// //         to provide personalized insights, helping you enhance your skills and
// //         improve your career opportunities.
// //       </p>
// //       <form className="my-8" onSubmit={handleSubmit}>
// //         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
// //           <LabelInputContainer>
// //             <Label htmlFor="firstname">First name</Label>
// //             <Input id="firstname" placeholder="John" type="text" />
// //           </LabelInputContainer>
// //           <LabelInputContainer>
// //             <Label htmlFor="lastname">Last name</Label>
// //             <Input id="lastname" placeholder="Doe" type="text" />
// //           </LabelInputContainer>
// //         </div>
// //         <LabelInputContainer className="mb-4">
// //           <Label htmlFor="email">Email Address</Label>
// //           <Input id="email" placeholder="johndoe@example.com" type="email" />
// //         </LabelInputContainer>

// //         <LabelInputContainer className="mb-4">
// //           <Label htmlFor="github" className="flex items-center gap-1">
// //             GitHub <IconBrandGithub />{" "}
// //           </Label>
// //           <Input
// //             id="github"
// //             placeholder="Enter GitHub Profile URL"
// //             type="url"
// //           />
// //         </LabelInputContainer>

// //         <LabelInputContainer className="mb-4">
// //           <Label htmlFor="website" className="flex items-center gap-1">
// //             Website/Portfolio <IconBrandGoogle />{" "}
// //           </Label>
// //           <Input
// //             id="website"
// //             placeholder="Enter your website/portfolio URL"
// //             type="url"
// //           />
// //         </LabelInputContainer>

// //         <LabelInputContainer className="mb-4">
// //           <Label htmlFor="certificates" className="flex items-center gap-1">
// //             Certificates / Resumes <IconBrandVercel />{" "}
// //           </Label>
// //           <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
// //             <FileUpload onChange={handleFileUpload} />
// //           </div>
// //         </LabelInputContainer>

// //         <button
// //           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
// //           type="submit"
// //         >
// //           Submit &rarr;
// //           <BottomGradient />
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // const BottomGradient = () => {
// //   return (
// //     <>
// //       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
// //       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
// //     </>
// //   );
// // };

// // const LabelInputContainer = ({ children, className }) => {
// //   return (
// //     <div className={cn("flex flex-col space-y-2 w-full", className)}>
// //       {children}
// //     </div>
// //   );
// // };

// "use client";
// import React, { useState } from "react";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { storeDataOnBlockchain } from "@/utils/blockchain";
// import { cn } from "@/lib/utils"; // Ensure this function is correctly imported
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
//   IconBrandVercel,
// } from "@tabler/icons-react";
// import { FileUpload } from "@/components/ui/file-upload";

// export default function SignupFormDemo() {
//   const [files, setFiles] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleFileUpload = (files) => {
//     setFiles(files);
//     console.log(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     try {
//       const formData = {
//         firstname: document.getElementById("firstname").value,
//         lastname: document.getElementById("lastname").value,
//         email: document.getElementById("email").value,
//         github: document.getElementById("github").value,
//         website: document.getElementById("website").value,
//         files: files, // Including the uploaded files
//       };
    
//       console.log("Form Data:", formData);
      
//       // Store data on blockchain
//       const result = await storeDataOnBlockchain(formData);
//       console.log("Blockchain storage result:", result);
      
//       setSubmitStatus({
//         success: true,
//         message: "Data successfully stored on blockchain!"
//       });
//     } catch (error) {
//       console.error("Error storing data on blockchain:", error);
//       setSubmitStatus({
//         success: false,
//         message: `Error: ${error.message || "Failed to store data on blockchain"}`
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-12">
//       <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
//         Welcome to SkillSync
//       </h2>
//       <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 ">
//         Powered by Blockchain and AI, SkillSync analyzes your resumes and GitHub
//         to provide personalized insights, helping you enhance your skills and
//         improve your career opportunities.
//       </p>
//       <form className="my-8" onSubmit={handleSubmit}>
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//           <LabelInputContainer>
//             <Label htmlFor="firstname">First name</Label>
//             <Input id="firstname" placeholder="John" type="text" required />
//           </LabelInputContainer>
//           <LabelInputContainer>
//             <Label htmlFor="lastname">Last name</Label>
//             <Input id="lastname" placeholder="Doe" type="text" required />
//           </LabelInputContainer>
//         </div>
//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="email">Email Address</Label>
//           <Input id="email" placeholder="johndoe@example.com" type="email" required />
//         </LabelInputContainer>

//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="github" className="flex items-center gap-1">
//             GitHub <IconBrandGithub />{" "}
//           </Label>
//           <Input
//             id="github"
//             placeholder="Enter GitHub Profile URL"
//             type="url"
//             required
//           />
//         </LabelInputContainer>

//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="website" className="flex items-center gap-1">
//             Website/Portfolio <IconBrandGoogle />{" "}
//           </Label>
//           <Input
//             id="website"
//             placeholder="Enter your website/portfolio URL"
//             type="url"
//           />
//         </LabelInputContainer>

//         <LabelInputContainer className="mb-4">
//           <Label htmlFor="certificates" className="flex items-center gap-1">
//             Certificates / Resumes <IconBrandVercel />{" "}
//           </Label>
//           <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
//             <FileUpload onChange={handleFileUpload} />
//           </div>
//         </LabelInputContainer>

//         <button
//           className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
//           type="submit"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Submitting..." : "Submit"} {!isSubmitting && "→"}
//           <BottomGradient />
//         </button>
        
//         {submitStatus && (
//           <div className={`mt-4 p-3 rounded-md text-center ${submitStatus.success ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
//             {submitStatus.message}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({ children, className }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { storeDataOnBlockchain } from "@/utils/blockchain";
import { cn } from "@/lib/utils"; // Ensure this function is correctly imported
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconBrandVercel,
} from "@tabler/icons-react";
import { FileUpload } from "@/components/ui/file-upload";

export default function SignupFormDemo() {
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const formData = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        github: document.getElementById("github").value,
        website: document.getElementById("website").value,
      };
  
      console.log("Form Data:", formData);
  
      // Store data on blockchain
      const result = await storeDataOnBlockchain(formData);
      console.log("Blockchain storage result:", result);
  
      // Store submitted data for display
      setSubmittedData({
        data: formData,
        timestamp: new Date().toLocaleString(),
        transactionHash: result.transactionHash,
        blockNumber: result.blockNumber,
      });
  
      setSubmitStatus({
        success: true,
        message: "Data successfully stored on blockchain!",
      });
    } catch (error) {
      console.error("Error storing data on blockchain:", error);
      setSubmitStatus({
        success: false,
        message: `Error: ${error.message || "Failed to store data on blockchain"}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black my-12">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Welcome to SkillSync
      </h2>
      <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300 ">
        Powered by Blockchain and AI, SkillSync analyzes your resumes and GitHub
        to provide personalized insights, helping you enhance your skills and
        improve your career opportunities.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Doe" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="johndoe@example.com" type="email" required />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="github" className="flex items-center gap-1">
            GitHub <IconBrandGithub />{" "}
          </Label>
          <Input
            id="github"
            placeholder="Enter GitHub Profile URL"
            type="url"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="website" className="flex items-center gap-1">
            Website/Portfolio <IconBrandGoogle />{" "}
          </Label>
          <Input
            id="website"
            placeholder="Enter your website/portfolio URL"
            type="url"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="certificates" className="flex items-center gap-1">
            Certificates / Resumes <IconBrandVercel />{" "}
          </Label>
          <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
            <FileUpload onChange={handleFileUpload} />
          </div>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"} {!isSubmitting && "→"}
          <BottomGradient />
        </button>
        
        {submitStatus && (
          <div className={`mt-4 p-3 rounded-md text-center ${submitStatus.success ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
            {submitStatus.message}
          </div>
        )}
      </form>

      {/* Blockchain Data Display Section */}
      {submittedData && (
        <div className="mt-8 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
            Blockchain Transaction Data
          </h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Transaction Hash:</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 break-all">
                  {submittedData.transactionHash}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Block Number:</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {submittedData.blockNumber}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Timestamp:</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {submittedData.timestamp}
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Stored Data:</p>
              <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto max-h-60">
                {JSON.stringify(submittedData.data, null, 2)}
              </pre>
            </div>
          </div>
          
          {submittedData.data.files && submittedData.data.files.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Uploaded Files ({submittedData.data.files.length}):
              </p>
              <ul className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
                {submittedData.data.files.map((file, index) => (
                  <li key={index} className="text-xs text-gray-600 dark:text-gray-400">
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};