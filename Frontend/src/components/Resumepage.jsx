import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";

const Resumepage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [analysis, setAnalysis] = useState(null);
  const [oldScore, setOldScore] = useState(null);
  const [newScore, setNewScore] = useState(null);

  const getStrokeOffset = (score) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    return circumference - (score / 100) * circumference;
  };

  const [currentView, setCurrentView] = useState("upload");

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    if (
      droppedFile &&
      (droppedFile.type === "application/pdf" ||
        droppedFile.name.endsWith(".docx"))
    ) {
      setFile(droppedFile);
      toast.success("Resume uploaded successfully!");
    } else {
      toast.error("Please upload a PDF or DOCX file.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (
      selectedFile.type === "application/pdf" ||
      selectedFile.name.endsWith(".docx")
    ) {
      setFile(selectedFile);
      toast.success("Resume uploaded successfully!");
    } else {
      toast.error("Please upload a PDF or DOCX file.");
    }
  };

  const handleCheckScore = async () => {
    if (!file) {
      toast.error("Please upload your resume first!");
      return;
    }

    try {
      setCurrentView("reading");

      const formData = new FormData();
      formData.append("resume", file);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const token = localStorage.getItem("token");

      const response = await api.post("/resume/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const resumeData = response.data.resume;

      console.log("Resume Data:", resumeData);

      setAnalysis(resumeData);
      setOldScore(resumeData.atsScore);

      setCurrentView("analyzing");

      setTimeout(() => {
        setNewScore(resumeData.improvedScore);

        setCurrentView("fixes");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const ProgressBar = ({ step }) => (
    <div className="w-full max-w-2xl mx-auto mb-16 mt-8 relative">
      <style>
        {`
          @keyframes move-line {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
        `}
      </style>

      <svg
        className="absolute top-2.75 left-[10%] w-[80%] h-2 z-0 overflow-visible"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#E5E7EB" strokeWidth="4" />

        <line
          x1="0"
          y1="0"
          x2="50%"
          y2="0"
          stroke="#10B981"
          strokeWidth="4"
          strokeDasharray={step === "reading" ? "8, 8" : "none"}
          style={
            step === "reading"
              ? { animation: "move-line 0.5s linear infinite" }
              : {}
          }
        />

        {(step === "analyzing" || step === "fixes") && (
          <line
            x1="50%"
            y1="0"
            x2="100%"
            y2="0"
            stroke="#10B981"
            strokeWidth="4"
            strokeDasharray={step === "analyzing" ? "8, 8" : "none"}
            style={
              step === "analyzing"
                ? { animation: "move-line 0.5s linear infinite" }
                : {}
            }
          />
        )}
      </svg>

      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col items-center w-[20%]">
          <div className="bg-white px-2 mb-2">
            {step === "reading" ? (
              <div className="w-6 h-6 rounded-full border-4 border-emerald-500 bg-white shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"></div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            )}
          </div>
          <span
            className={`text-xs font-medium ${step === "reading" ? "text-emerald-500" : "text-gray-400"}`}
          >
            Reading
          </span>
        </div>

        <div className="flex flex-col items-center w-[20%]">
          <div className="bg-white px-2 mb-2">
            {step === "reading" ? (
              <div className="w-6 h-6 rounded-full border-4 border-gray-200 bg-white"></div>
            ) : step === "analyzing" ? (
              <div className="w-6 h-6 rounded-full border-4 border-emerald-500 bg-white shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"></div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            )}
          </div>
          <span
            className={`text-xs font-medium ${step === "analyzing" ? "text-emerald-500" : "text-gray-400"}`}
          >
            Analysing
          </span>
        </div>

        <div className="flex flex-col items-center w-[20%]">
          <div className="bg-white px-2 mb-2">
            {step === "fixes" ? (
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border-4 border-gray-200 bg-white"></div>
            )}
          </div>
          <span
            className={`text-xs font-medium ${step === "fixes" ? "text-emerald-500" : "text-gray-400"}`}
          >
            Preparing fixes
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-32 pb-16 px-4 font-sans flex justify-center">
      <div className="max-w-5xl w-full">
        {currentView === "upload" && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#111827] mb-4 tracking-tight">
                Run your free ATS check
              </h1>
              <p className="text-[#6B7280] text-lg">
                Drop your resume below - your score and the highest-impact fixes
                appear in <br /> under 30 seconds.
              </p>
            </div>

            <div className="space-y-6">
              <div
                className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center transition-colors duration-200 ${
                  isDragging
                    ? "border-gray-500 bg-gray-100"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept=".pdf,.docx"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div
                  className="bg-gray-100 p-4 rounded-xl mb-6 cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => fileInputRef.current.click()}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {file ? file.name : "Drop your resume to start the scan"}
                </h3>
                <p className="text-sm text-gray-500 mb-8">
                  PDF or DOCX, up to 5 MB. Analysis starts automatically.
                </p>
                <button
                  onClick={handleCheckScore}
                  className="bg-black text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-800 transition-colors focus:ring-4 focus:ring-gray-300"
                >
                  Check ATS Score
                </button>
              </div>
            </div>
          </div>
        )}

        {currentView === "reading" && (
          <div className="flex flex-col items-center w-full max-w-lg mx-auto animate-in fade-in duration-500 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <ProgressBar step="reading" />
            <div className="w-16 h-16 border-4 border-gray-100 border-t-emerald-500 rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Reading your resume
            </h2>
            <p className="text-gray-500 text-sm mb-8">Parsing every section</p>

            <div className="w-full space-y-2">
              {[
                "Contact details",
                "Work experience",
                "Education",
                "Skills",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-emerald-50/50 rounded-lg text-sm text-gray-800 border border-emerald-100"
                >
                  <svg
                    className="w-4 h-4 text-emerald-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </div>
              ))}
              <div className="flex items-center p-3 bg-gray-50 rounded-lg text-sm text-gray-500 border border-gray-100">
                <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin mr-3"></div>
                Projects
              </div>
            </div>
          </div>
        )}

        {currentView === "analyzing" && (
          <div className="flex flex-col items-center w-full max-w-lg mx-auto animate-in fade-in duration-500 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <ProgressBar step="analyzing" />

            <div className="relative flex items-center justify-center w-32 h-32 mb-6">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  className="stroke-gray-100"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  className="stroke-emerald-500"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={251.2}
                  strokeDashoffset={getStrokeOffset(oldScore || 0)}
                  style={{
                    transition: "stroke-dashoffset 1s ease",
                  }}
                />
              </svg>
              <div className="absolute text-4xl font-bold text-gray-900">
                {oldScore || 0}
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your ATS score is {analysis?.atsScore} out of 100
            </h2>
            <p className="text-rose-500 text-sm mb-8 text-center max-w-xs">
              Below 75, most resumes are auto-rejected before a recruiter sees
              them.
            </p>

            <div className="flex items-center justify-center space-x-1.5 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
            <p className="text-blue-500 text-sm font-medium">
              Generating improvements & fixes...
            </p>
          </div>
        )}

        {currentView === "fixes" && (
          <div className="w-full mx-auto animate-in fade-in zoom-in-95 duration-500">
            <div className="max-w-2xl mx-auto mb-8">
              <ProgressBar step="fixes" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center sticky top-28">
                <h3 className="text-lg font-semibold text-gray-600 mb-8 text-center">
                  Score Improved!
                </h3>

                <div className="flex items-center justify-center gap-4 w-full mb-10">
                  <div className="flex flex-col items-center">
                    <div className="relative flex items-center justify-center w-16 h-16">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          className="stroke-gray-200"
                          strokeWidth="6"
                        />

                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          className="stroke-orange-400"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeDasharray={251.2}
                          strokeDashoffset={getStrokeOffset(oldScore || 0)}
                          style={{
                            transition: "stroke-dashoffset 1s ease",
                          }}
                        />
                      </svg>

                      <div className="absolute text-xl font-bold text-gray-700">
                        {oldScore}
                      </div>
                    </div>
                  </div>

                  <svg
                    className="w-8 h-8 text-emerald-500 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>

                  <div className="relative flex items-center justify-center w-28 h-28 shadow-[0_0_25px_rgba(16,185,129,0.2)] rounded-full">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        className="stroke-gray-100"
                        strokeWidth="6"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        className="stroke-emerald-500"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray={251.2}
                        strokeDashoffset={getStrokeOffset(newScore || 0)}
                        style={{
                          transition: "stroke-dashoffset 1.2s ease",
                        }}
                      />
                    </svg>
                    <div className="absolute text-3xl font-bold text-gray-900">
                      {newScore || 0}
                    </div>
                  </div>
                </div>

                <div className="w-full mt-auto">
                  <button className="w-full bg-emerald-500 text-white py-3.5 rounded-lg font-medium shadow-md hover:bg-emerald-600 transition flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Fixed Resume
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border-2 border-rose-100 overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-sm">
                    Issue Detected
                  </div>

                  <div className="p-8 bg-[#fdfdfd]">
                    <div className="text-center border-b-[1.5px] border-gray-300 pb-5 mb-5">
                      <h1 className="text-2xl font-serif text-gray-900 tracking-widest uppercase">
                        {analysis?.analysis?.candidate?.name}
                      </h1>
                      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-gray-700 mt-3 font-serif">
                        <span className="flex items-center">
                          {analysis?.analysis?.candidate?.phone}
                        </span>
                        <span className="flex items-center">
                          ✉ {analysis?.analysis?.candidate?.email}
                        </span>
                        <span className="flex items-center">
                          📍 {analysis?.analysis?.candidate?.location}
                        </span>
                      </div>
                    </div>

                    <div className="mb-2">
                      <h2 className="text-[15px] font-bold border-b border-black pb-1 mb-2 font-serif">
                        Summary
                      </h2>
                      <div className="bg-rose-100/70 border border-rose-300 text-rose-900 p-3 text-sm font-serif leading-relaxed">
                        {analysis?.analysis?.summary}
                      </div>
                      <p className="text-xs text-rose-600 mt-2 font-sans font-medium flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Weak ATS impact. Uses generic phrases and lacks
                        measurable achievements.
                      </p>
                    </div>

                    <div className="blur-[3px] opacity-50 select-none mt-6 pointer-events-none">
                      <h2 className="text-[15px] font-bold border-b border-black pb-1 mb-2 font-serif">
                        Education
                      </h2>
                      <div className="flex justify-between text-sm font-serif mb-1">
                        <strong>Poornima University, Jaipur</strong>
                        <span>Jan 2024 - Jan 2028</span>
                      </div>
                      <p className="text-sm font-serif">
                        Bachelor of Technology (B.Tech) - Computer Science &
                        Engineering
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl shadow-sm border-2 border-emerald-200 p-6 relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-emerald-500 text-white p-1.5 rounded-full shadow-sm">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <h3 className="font-bold text-emerald-900 text-lg">
                      AI-Optimized Summary
                    </h3>
                  </div>

                  <div className="bg-white text-gray-800 p-4 rounded-lg border border-emerald-100 shadow-sm text-sm font-serif leading-relaxed">
                    {analysis?.analysis?.summary}
                  </div>
                  <h3 className="font-bold mt-5 text-emerald-900">Strengths</h3>

                  <div className="space-y-2 mt-2">
                    {analysis?.analysis?.strengths?.map((item, index) => (
                      <p key={index} className="text-sm text-gray-700">
                        ✅ {item}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-start mt-4 bg-emerald-100/50 p-3 rounded-lg">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <p className="text-sm text-emerald-800 font-medium">
                      Added strong action verbs ("Results-driven", "Optimizing")
                      and structured keywords to pass ATS parsers instantly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resumepage;
