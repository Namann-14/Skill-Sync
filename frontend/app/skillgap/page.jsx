// "use client";
// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FileUpload } from "@/components/ui/file-upload";
// import {
//   SparklesIcon,
//   UploadIcon,
//   AirplayIcon as AnalysisIcon,
//   TrendingUpIcon,
//   BookOpenIcon,
//   CodeIcon,
// } from "lucide-react";
// import { Timeline } from "@/components/ui/timeline";
// import Navbar from "@/components/Navbar";

// const StarBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const stars = Array.from({ length: 250 }, () => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       z: Math.random() * 1500,
//       size: Math.random() * 3,
//       speed: Math.random() * 4 + 1,
//       color: `rgba(${Math.random() > 0.5 ? "138, 79, 255" : "219, 85, 211"}, ${
//         Math.random() * 0.8 + 0.2
//       })`,
//       pulse: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//     }));

//     const animate = () => {
//       ctx.fillStyle = "rgba(10, 10, 26, 0.15)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       stars.forEach((star1, i) => {
//         stars.slice(i + 1).forEach((star2) => {
//           const dx = (star1.x - star2.x) * (800 / star1.z) * (800 / star2.z);
//           const dy = (star1.y - star2.y) * (800 / star1.z) * (800 / star2.z);
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(138, 79, 255, ${
//               (1 - distance / 100) * 0.15
//             })`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(
//               (star1.x - canvas.width / 2) * (800 / star1.z) + canvas.width / 2,
//               (star1.y - canvas.height / 2) * (800 / star1.z) +
//                 canvas.height / 2
//             );
//             ctx.lineTo(
//               (star2.x - canvas.width / 2) * (800 / star2.z) + canvas.width / 2,
//               (star2.y - canvas.height / 2) * (800 / star2.z) +
//                 canvas.height / 2
//             );
//             ctx.stroke();
//           }
//         });
//       });

//       stars.forEach((star) => {
//         star.z -= star.speed;
//         star.pulse += star.pulseSpeed;

//         if (star.z <= 0) {
//           star.z = 1500;
//           star.x = Math.random() * canvas.width;
//           star.y = Math.random() * canvas.height;
//         }

//         const x =
//           (star.x - canvas.width / 2) * (800 / star.z) + canvas.width / 2;
//         const y =
//           (star.y - canvas.height / 2) * (800 / star.z) + canvas.height / 2;
//         const size =
//           (1 - star.z / 1500) * star.size * (1 + Math.sin(star.pulse) * 0.5);

//         const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
//         gradient.addColorStop(0, star.color);
//         gradient.addColorStop(1, "rgba(138, 79, 255, 0)");

//         ctx.beginPath();
//         ctx.fillStyle = gradient;
//         ctx.arc(x, y, size * 2, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.beginPath();
//         ctx.fillStyle = star.color;
//         ctx.arc(x, y, size, 0, 2 * Math.PI);
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed left-0 w-full h-full pointer-events-none"
//       style={{ zIndex: -1 }}
//     />
//   );
// };

// const SkillSyncPage = () => {
//   const [files, setFiles] = useState([]);
//   const [job, setJob] = useState("");
//   const [analysis, setAnalysis] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [roadmap, setRoadmap] = useState([
//     {
//       title: "Week 1-2",
//       content: (
//         <div className="space-y-4">
//           <p className="text-neutral-200 text-sm font-medium">
//             Quick wins and foundational learning 🚀
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-purple-900/30 p-3 rounded-lg flex items-center space-x-3">
//               <CodeIcon className="text-purple-400" />
//               <span className="text-xs text-neutral-200">
//                 <strong className="text-green-400">87%</strong> learned basics
//                 in just 10 days
//               </span>
//             </div>
//             <div className="bg-purple-900/30 p-3 rounded-lg flex items-center space-x-3">
//               <TrendingUpIcon className="text-green-400" />
//               <span className="text-xs text-neutral-200">
//                 <strong className="text-green-400">3</strong> micro-projects
//                 completed
//               </span>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Week 3-4",
//       content: (
//         <div className="space-y-4">
//           <p className="text-neutral-200 text-sm font-medium">
//             Rapid skill acceleration phase 🎯
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-purple-900/30 p-3 rounded-lg flex items-center space-x-3">
//               <BookOpenIcon className="text-blue-400" />
//               <span className="text-xs text-neutral-200">
//                 <strong className="text-blue-400">92%</strong> success rate in
//                 assessments
//               </span>
//             </div>
//             <div className="bg-purple-900/30 p-3 rounded-lg flex items-center space-x-3">
//               <SparklesIcon className="text-pink-400" />
//               <span className="text-xs text-neutral-200">
//                 Ready for job transition
//               </span>
//             </div>
//           </div>
//           <div className="mt-4 bg-green-900/30 p-3 rounded-lg border border-green-500/30">
//             <p className="text-xs text-green-300">
//             &quot;I landed my dream job in just 6 weeks!&quot; - Recent Success Story
//             </p>
//           </div>
//         </div>
//       ),
//     },
//   ]);

//   const handleFileUpload = (files) => {
//     setFiles(files);
//   };

//   const handleSubmit = async () => {
//     if (!files.length || !job) {
//       alert("Please upload your resume and specify a job title.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const mockAnalysis = {
//         matchPercentage: Math.floor(Math.random() * 30) + 70,
//         skillGaps: [
//           "Advanced Cloud Architecture",
//           "Machine Learning Integration",
//           "Scalable System Design",
//         ],
//         recommendedLearning: [
//           "Advanced AWS Certification",
//           "TensorFlow & Deep Learning Masterclass",
//           "System Design Intensive Workshop",
//         ],
//       };

//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       setAnalysis(mockAnalysis);
//       setLoading(false);
//     } catch (error) {
//       console.error("Analysis failed", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen relative overflow-hidden bg-[#0A0A1A] bg-gradient-to-b from-purple-900/10 to-pink-900/10 py-24">
//         <StarBackground />
//         <div className="max-w-4xl mx-auto py-12 px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-purple-900/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(138,79,255,0.1)] border border-purple-500/20 hover:border-purple-500/30 transition-all"
//           >
//             <motion.h1
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               className="text-6xl font-bold text-center mb-8 text-white"
//             >
//               Skill Gap Analysis
//             </motion.h1>

//             {!analysis ? (
//               <div className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="flex items-center text-sm font-medium text-purple-200 mb-3">
//                       <UploadIcon className="mr-2 text-purple-300" />
//                       Upload Resume
//                     </label>
//                     <FileUpload onChange={handleFileUpload} />
//                   </div>
//                   <div>
//                     <label className="flex items-center text-sm font-medium text-purple-200 mb-3">
//                       <SparklesIcon className="mr-2 text-purple-300" />
//                       Target Job Title
//                     </label>
//                     <input
//                       type="text"
//                       value={job}
//                       onChange={(e) => setJob(e.target.value)}
//                       placeholder="e.g., Senior Cloud Architect"
//                       className="w-full px-4 py-3 bg-purple-800/50 text-white rounded-xl border border-purple-500/30 focus:border-purple-400 transition-colors"
//                     />
//                   </div>
//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium transition-all hover:opacity-90 disabled:opacity-50"
//                 >
//                   {loading ? "Analyzing..." : "Start Analysis"}
//                 </motion.button>
//               </div>
//             ) : (
//               <div className="space-y-8">
//                 <div className="bg-purple-900/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
//                   <h2 className="text-2xl font-bold text-purple-300 mb-4">
//                     Skills Analysis
//                   </h2>
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-purple-200">Job Match</span>
//                     <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//                       {analysis.matchPercentage}%
//                     </span>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="text-xl font-semibold text-purple-300 mb-3">
//                       Key Skill Gaps
//                     </h3>
//                     {analysis.skillGaps.map((gap, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="flex items-center mb-2 text-purple-200"
//                       >
//                         <SparklesIcon
//                           className="mr-2 text-pink-400"
//                           size={16}
//                         />
//                         <span>{gap}</span>
//                       </motion.div>
//                     ))}
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-semibold text-purple-300 mb-3">
//                       Recommended Learning
//                     </h3>
//                     {analysis.recommendedLearning.map((course, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="flex items-center mb-2 text-purple-200"
//                       >
//                         <BookOpenIcon
//                           className="mr-2 text-green-400"
//                           size={16}
//                         />
//                         <span>{course}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>

//                 <Timeline data={roadmap} />

//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setAnalysis(null)}
//                   className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium transition-all hover:opacity-90"
//                 >
//                   Start New Analysis
//                 </motion.button>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SkillSyncPage;



"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileUpload } from "@/components/ui/file-upload";
import {
  SparklesIcon,
  UploadIcon,
  AirplayIcon as AnalysisIcon,
  TrendingUpIcon,
  BookOpenIcon,
  CodeIcon,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import Navbar from "@/components/Navbar";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1500,
      size: Math.random() * 3,
      speed: Math.random() * 4 + 1,
      color: `rgba(${Math.random() > 0.5 ? "138, 79, 255" : "219, 85, 211"}, ${
        Math.random() * 0.8 + 0.2
      })`,
      pulse: Math.random() * 0.5 + 0.5,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 26, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star1, i) => {
        stars.slice(i + 1).forEach((star2) => {
          const dx = (star1.x - star2.x) * (800 / star1.z) * (800 / star2.z);
          const dy = (star1.y - star2.y) * (800 / star1.z) * (800 / star2.z);
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(138, 79, 255, ${
              (1 - distance / 100) * 0.15
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(
              (star1.x - canvas.width / 2) * (800 / star1.z) + canvas.width / 2,
              (star1.y - canvas.height / 2) * (800 / star1.z) +
                canvas.height / 2
            );
            ctx.lineTo(
              (star2.x - canvas.width / 2) * (800 / star2.z) + canvas.width / 2,
              (star2.y - canvas.height / 2) * (800 / star2.z) +
                canvas.height / 2
            );
            ctx.stroke();
          }
        });
      });

      stars.forEach((star) => {
        star.z -= star.speed;
        star.pulse += star.pulseSpeed;

        if (star.z <= 0) {
          star.z = 1500;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }

        const x =
          (star.x - canvas.width / 2) * (800 / star.z) + canvas.width / 2;
        const y =
          (star.y - canvas.height / 2) * (800 / star.z) + canvas.height / 2;
        const size =
          (1 - star.z / 1500) * star.size * (1 + Math.sin(star.pulse) * 0.5);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, "rgba(138, 79, 255, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, size * 2, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};
// ... existing imports

const SkillSyncPage = () => {
  const [files, setFiles] = useState([]);
  const [job, setJob] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [roadmap, setRoadmap] = useState([]);

  const handleFileUpload = (files) => {
    setFiles(files);
  };

  const handleSubmit = async () => {
    if (!files.length || !job) {
      alert("Please upload your resume and specify a job title.");
      return;
    }
  
    setLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('resume', files[0]);
      formData.append('jobTitle', job);
  
      // Use the full URL to your backend during development
      // Adjust port if needed
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3002/api/skillgap/analyze'
        : '/api/skillgap/analyze';
      
      console.log(`Sending request to: ${apiUrl}`);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });
  
      console.log(`Response status: ${response.status}`);
      
      // Check if it's not JSON - get the text and log it
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.error('Non-JSON response received:', textResponse);
        throw new Error(`Server returned non-JSON response: ${response.status} ${response.statusText}`);
      }
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze resume');
      }
  
      const analysisData = await response.json();
      
      // Format the roadmap data and update state as before
      const formattedRoadmap = analysisData.roadmap.map(item => ({
        // ...existing implementation
      }));
      
      setRoadmap(formattedRoadmap);
      setAnalysis(analysisData);
    } catch (err) {
      console.error("Analysis failed:", err);
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden bg-[#0A0A1A] bg-gradient-to-b from-purple-900/10 to-pink-900/10 py-24">
        <StarBackground />
        <div className="max-w-4xl mx-auto py-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-purple-900/10 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(138,79,255,0.1)] border border-purple-500/20 hover:border-purple-500/30 transition-all"
          >
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="text-6xl font-bold text-center mb-8 text-white"
            >
              Skill Gap Analysis
            </motion.h1>

            {!analysis ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-purple-200 mb-3">
                      <UploadIcon className="mr-2 text-purple-300" />
                      Upload Resume
                    </label>
                    <FileUpload onChange={handleFileUpload} />
                    {files.length > 0 && (
                      <p className="text-green-400 text-xs mt-2">
                        {files[0].name} uploaded successfully
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-purple-200 mb-3">
                      <SparklesIcon className="mr-2 text-purple-300" />
                      Target Job Title
                    </label>
                    <input
                      type="text"
                      value={job}
                      onChange={(e) => setJob(e.target.value)}
                      placeholder="e.g., Senior Cloud Architect"
                      className="w-full px-4 py-3 bg-purple-800/50 text-white rounded-xl border border-purple-500/30 focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-900/30 border border-red-500/30 text-red-300 p-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium transition-all hover:opacity-90 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing Resume...</span>
                    </>
                  ) : (
                    "Start Analysis"
                  )}
                </motion.button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-purple-900/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                  <h2 className="text-2xl font-bold text-purple-300 mb-4">
                    Skills Analysis
                  </h2>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-purple-200">Job Match</span>
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                      {analysis.matchPercentage}%
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">
                      Key Skill Gaps
                    </h3>
                    {analysis.skillGaps.map((gap, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center mb-2 text-purple-200"
                      >
                        <SparklesIcon
                          className="mr-2 text-pink-400"
                          size={16}
                        />
                        <span>{gap}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">
                      Recommended Learning
                    </h3>
                    {analysis.recommendedLearning.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center mb-2 text-purple-200"
                      >
                        <BookOpenIcon
                          className="mr-2 text-green-400"
                          size={16}
                        />
                        <span>{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-300 mb-4">
                    Your Personalized Learning Roadmap
                  </h3>
                  <Timeline data={roadmap} />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setAnalysis(null)}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium transition-all hover:opacity-90"
                >
                  Start New Analysis
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillSyncPage;
