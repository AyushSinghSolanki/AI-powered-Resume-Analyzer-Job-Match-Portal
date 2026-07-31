import React, { useState } from "react";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const resourceCategories = [
    {
      id: "resume",
      title: "Resume Resources",
      icon: "📄",
      description:
        "Craft ATS-optimized resumes with expert guides, templates, and domain-specific examples.",
      items: [
        { name: "ATS Resume Guide", type: "Guide", badge: "Essential" },
        { name: "Resume Writing Tips", type: "Tips", badge: "Popular" },
        { name: "Resume Templates", type: "Templates", badge: "Download" },
        {
          name: "Resume Examples (Fresher, SDE, Frontend, Backend)",
          type: "Examples",
          badge: "Updated",
        },
        {
          name: "Common Resume Mistakes",
          type: "Checklist",
          badge: "Critical",
        },
      ],
    },
    {
      id: "interview",
      title: "Interview Preparation",
      icon: "🎯",
      description:
        "Ace HR and technical rounds with curated questions, core CS notes, and system design basics.",
      items: [
        { name: "HR Interview Questions", type: "Q&A", badge: "Behavioral" },
        {
          name: "Technical Interview Questions",
          type: "Q&A",
          badge: "Core CS",
        },
        { name: "DSA Interview Questions", type: "Practice", badge: "Coding" },
        {
          name: "System Design Basics",
          type: "Architecture",
          badge: "Advanced",
        },
        {
          name: "OOPS, DBMS, OS, CN Notes",
          type: "Cheat Sheet",
          badge: "Must Read",
        },
      ],
    },
    {
      id: "roadmaps",
      title: "Learning Roadmaps",
      icon: "🗺️",
      description:
        "Step-by-step career tracks for full-stack, backend, frontend, Python, and AI/ML engineering.",
      items: [
        { name: "MERN Roadmap", type: "Roadmap", badge: "Fullstack" },
        { name: "Java Roadmap", type: "Roadmap", badge: "Backend" },
        { name: "Python Roadmap", type: "Roadmap", badge: "General" },
        { name: "Backend Developer Roadmap", type: "Roadmap", badge: "Scale" },
        { name: "Frontend Developer Roadmap", type: "Roadmap", badge: "UI/UX" },
        { name: "AI/ML Roadmap", type: "Roadmap", badge: "Trending" },
      ],
    },
    {
      id: "dsa",
      title: "DSA Resources",
      icon: "⚡",
      description:
        "Master data structures and algorithms topic-wise with top-tier problems and LeetCode sheets.",
      items: [
        { name: "Arrays", type: "Topic", badge: "Fundamental" },
        { name: "Strings", type: "Topic", badge: "Fundamental" },
        { name: "Linked List", type: "Topic", badge: "Linear" },
        { name: "Stack & Queue", type: "Topic", badge: "Linear" },
        { name: "Trees", type: "Topic", badge: "Hierarchical" },
        { name: "Graphs", type: "Topic", badge: "Advanced" },
        { name: "Dynamic Programming", type: "Topic", badge: "Complex" },
        {
          name: "LeetCode Sheet (150 Questions)",
          type: "Curated",
          badge: "Top 150",
        },
      ],
    },
    {
      id: "aptitude",
      title: "Aptitude Preparation",
      icon: "📊",
      description:
        "Strengthen quantitative aptitude, logical reasoning, and verbal skills for campus placements.",
      items: [
        { name: "Quantitative Aptitude", type: "Practice", badge: "Math" },
        { name: "Logical Reasoning", type: "Practice", badge: "Analytical" },
        { name: "Verbal Ability", type: "Practice", badge: "English" },
        { name: "Mock Tests", type: "Assessment", badge: "Real-time" },
      ],
    },
  ];

  const filteredCategories = resourceCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cat.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((cat) => activeTab === "all" || cat.id === activeTab)
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pt-32 pb-16 px-4 font-sans flex justify-center">
      <div className="max-w-6xl w-full">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
            Knowledge Hub
          </span>
          <h1 className="text-4xl font-bold text-[#111827] mt-3 mb-3 tracking-tight">
            Curated Engineering Resources
          </h1>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
            Everything you need to build high-impact resumes, master data
            structures, pass technical interviews, and accelerate your career.
          </p>
        </div>

        {/* Search and Category Filter Navigation */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
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
              placeholder="Search guides, roadmaps, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition ${activeTab === "all" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              All Resources
            </button>
            <button
              onClick={() => setActiveTab("resume")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition ${activeTab === "resume" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              Resume
            </button>
            <button
              onClick={() => setActiveTab("interview")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition ${activeTab === "interview" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              Interviews
            </button>
            <button
              onClick={() => setActiveTab("roadmaps")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition ${activeTab === "roadmaps" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              Roadmaps
            </button>
            <button
              onClick={() => setActiveTab("dsa")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition ${activeTab === "dsa" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              DSA & LeetCode
            </button>
            <button
              onClick={() => setActiveTab("aptitude")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition ${activeTab === "aptitude" ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              Aptitude
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl p-2 bg-gray-50 rounded-xl border border-gray-100">
                  {category.icon}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => alert(`Opening resource: ${item.name}`)}
                    className="group bg-gray-50 hover:bg-emerald-50/40 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 transition cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-white text-gray-600 rounded border border-gray-200 group-hover:border-emerald-200">
                        {item.type}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-800 text-sm group-hover:text-emerald-900 transition mb-4">
                      {item.name}
                    </h3>

                    <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-emerald-600">
                      <span>Access Material</span>
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
