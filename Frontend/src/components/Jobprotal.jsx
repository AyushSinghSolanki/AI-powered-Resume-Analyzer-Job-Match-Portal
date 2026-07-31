import React, { useState } from "react";

const Jobportal = () => {
  const [activeTab, setActiveTab] = useState("matching");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  // Mock database of jobs matching a Computer Science Engineering student profile
  const jobs = [
    {
      id: 1,
      title: "Backend Developer Intern",
      company: "TechCorp Solutions",
      location: "Remote / Jaipur",
      stipend: "₹25,000 / month",
      matchScore: "96%",
      type: "Internship",
      description:
        "Looking for a proactive Computer Science student proficient in Java, Node.js, and databases like PostgreSQL and MongoDB to build scalable backend services.",
      requirements: [
        "Java / Node.js",
        "PostgreSQL / MongoDB",
        "Data Structures & Algorithms",
      ],
      perks: [
        "Flexible working hours",
        "PPO (Pre-Placement Offer) opportunity",
        "Mentorship from senior architects",
      ],
    },
    {
      id: 2,
      title: "AI & Full Stack Developer Intern",
      company: "InnoVate AI Labs",
      location: "Bangalore / Hybrid",
      stipend: "₹35,000 / month",
      matchScore: "92%",
      type: "Internship",
      description:
        "Join our core product team to develop AI-powered application features using Python, React.js, and modern LLM integrations.",
      requirements: [
        "Python",
        "React.js",
        "RESTful APIs",
        "Basic Machine Learning concepts",
      ],
      perks: [
        "Certificate",
        "High conversion rate to full-time",
        "Learning budget",
      ],
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "NextGen Dynamics",
      location: "Jaipur, Rajasthan",
      stipend: "₹20,000 / month",
      matchScore: "88%",
      type: "Internship",
      description:
        "Seeking energetic engineering students with strong foundations in software design patterns, JavaScript/Java, and problem-solving skills.",
      requirements: ["JavaScript / Java", "Problem Solving", "Git & GitHub"],
      perks: [
        "Direct collaboration with founders",
        "Snacks and modern office space",
      ],
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "PixelCraft Digital",
      location: "Remote",
      stipend: "₹30,000 / month",
      matchScore: "85%",
      type: "Full-time",
      description:
        "Build interactive web interfaces and high-performance client applications using React, HTML, and Tailwind CSS.",
      requirements: ["HTML/CSS/Tailwind", "React.js", "JavaScript (ES6+)"],
      perks: [
        "Remote work flexibility",
        "Health insurance",
        "Annual performance bonus",
      ],
    },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-32 pb-16 px-4 font-sans flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#111827] mb-3 tracking-tight">
            AI-Curated Job Portal
          </h1>
          <p className="text-[#6B7280] text-lg">
            Matched directly with your resume's technical skills, projects, and
            career goals.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <svg
              className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by role, company, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("matching")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "matching" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              Best Match For You
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeTab === "all" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              All Openings
            </button>
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Cards List */}
          <div className="md:col-span-7 space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl text-center border border-gray-100">
                <p className="text-gray-500">
                  No jobs found matching your search keyword.
                </p>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`bg-white p-6 rounded-2xl shadow-sm border transition cursor-pointer relative ${selectedJob?.id === job.id ? "border-emerald-500 ring-2 ring-emerald-500/10" : "border-gray-100 hover:border-gray-300"}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                        {job.matchScore} Match
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2">
                        {job.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {job.company} • {job.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900 block">
                        {job.stipend}
                      </span>
                      <span className="text-xs text-gray-400 capitalize">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.requirements.map((req, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Detailed Job View & Quick Apply */}
          <div className="md:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
            {selectedJob ? (
              <div>
                <div className="border-b border-gray-100 pb-4 mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {selectedJob.matchScore} Resume Match
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {selectedJob.stipend}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedJob.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {selectedJob.company} — {selectedJob.location}
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      About the Role
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedJob.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Requirements
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Perks & Benefits
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {selectedJob.perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <button
                    onClick={() =>
                      alert(
                        `Application submitted successfully for ${selectedJob.title} at ${selectedJob.company} using your optimized resume!`,
                      )
                    }
                    className="w-full bg-black text-white py-3 rounded-xl font-medium shadow-md hover:bg-gray-800 transition flex items-center justify-center"
                  >
                    Apply with 1-Click (Optimized Resume)
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="w-12 h-12 text-gray-300 mx-auto mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Select a Job Listing
                </h3>
                <p className="text-xs text-gray-500">
                  Click on any job card from the left to view requirements,
                  stipend, and match breakdown.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobportal;
