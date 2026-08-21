"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown, BookOpen, Stethoscope, Building2, FlaskConical, Target, ShieldCheck, Globe } from 'lucide-react';

export default function LMIWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const programs = [
    { name: "BS Nursing", duration: "4 Years[cite: 2]" },
    { name: "BS Emergency / ICU Technology", duration: "4 Years[cite: 2]" },
    { name: "BS Cardiology Technology", duration: "4 Years[cite: 2]" },
    { name: "BS Radiology Technology", duration: "4 Years[cite: 2]" },
    { name: "BS Respiratory Therapy Technology", duration: "4 Years[cite: 2]" },
    { name: "BS Surgical Technology", duration: "4 Years[cite: 2]" },
    { name: "BS Clinical Psychology", duration: "4 Years[cite: 2]" },
    { name: "Certified Nursing Assistant (CNA)", duration: "2-Year Diploma[cite: 2]" },
    { name: "Lady Health Visitor (LHV)", duration: "2-Year Diploma[cite: 2]" },
  ];

  const coreValues = [
    { title: "Learner-Centredness", desc: "Placing the needs, growth, and success of every learner at the heart of our teaching and support[cite: 2]." },
    { title: "Excellence", desc: "Pursuing the highest academic and clinical standards in everything we do[cite: 2]." },
    { title: "Compassion", desc: "Fostering empathy, respect, and patient-centred care in every interaction[cite: 2]." },
    { title: "Integrity", desc: "Upholding honesty, ethics, and professional accountability at all times[cite: 2]." },
    { title: "Innovation", desc: "Embracing new ideas, technology, and evidence-based practice to advance healthcare education[cite: 2]." },
    { title: "Professionalism", desc: "Cultivating discipline, competence, and workplace readiness in every graduate[cite: 2]." },
  ];

  const laboratories = [
    "Nursing Skills Lab[cite: 2]",
    "Science Laboratory[cite: 2]",
    "Anatomy Museum[cite: 2]",
    "Radiology Laboratory[cite: 2]",
    "Surgical Laboratory[cite: 2]",
    "Cardiology Laboratory[cite: 2]",
    "Respiratory Therapy Laboratory[cite: 2]"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-red-700 border-r-2 border-slate-300 pr-4 mr-4">LMI</span>
              <span className="text-lg font-semibold text-blue-900 hidden sm:block">
                Lifecare Medical Institute
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              
              {/* About Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('about')}
                  className="flex items-center text-slate-600 hover:text-red-700 font-medium focus:outline-none"
                >
                  About LMI <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-slate-100 py-2">
                    <a href="#overview" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Overview</a>
                    <a href="#vision" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Vision, Mission & Values</a>
                    <a href="#quality" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Quality Assurance</a>
                  </div>
                )}
              </div>

              {/* Academics Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('academics')}
                  className="flex items-center text-slate-600 hover:text-red-700 font-medium focus:outline-none"
                >
                  Academics <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {openDropdown === 'academics' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-slate-100 py-2">
                    <a href="#programs" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Current Provision</a>
                    <a href="#expansion" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Future UK Qualifications</a>
                  </div>
                )}
              </div>

              {/* Facilities Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('facilities')}
                  className="flex items-center text-slate-600 hover:text-red-700 font-medium focus:outline-none"
                >
                  Campus <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {openDropdown === 'facilities' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-slate-100 py-2">
                    <a href="#facilities" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Infrastructure</a>
                    <a href="#labs" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Specialised Laboratories</a>
                  </div>
                )}
              </div>

              <a href="#clinical" className="text-slate-600 hover:text-red-700 font-medium">Clinical Training</a>
              <button className="bg-red-700 text-white px-5 py-2 rounded-md font-medium hover:bg-red-800 transition">Admissions</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 focus:outline-none">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#overview" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium">About LMI</a>
              <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium">Academic Programmes</a>
              <a href="#facilities" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium">Campus & Facilities</a>
              <a href="#clinical" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium">Clinical Training</a>
              <a href="#quality" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium">Quality Assurance</a>
              <button className="bg-red-700 text-white px-5 py-2 rounded-md font-medium text-left">Admissions</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Preparing Healthcare Professionals <br/> for a Global Future[cite: 2].
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            A project of Academic Max (Pvt.) Ltd. delivering high-quality education and clinical excellence in Peshawar[cite: 2].
          </p>
          <div className="flex justify-center gap-4">
            <a href="#programs" className="bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition">
              Explore Programmes
            </a>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Located on a purpose-built campus on Ring Road, Peshawar, Pakistan, LMI delivers nursing and allied health education under formal university affiliation and government regulatory approval[cite: 2]. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our degree programmes are approved by Khyber Medical University (KMU), Peshawar, and the institute is approved by the Higher Education Regulatory Authority (HERA)[cite: 2].
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">25 Kanal</h3>
                <p className="text-sm text-slate-600">Total Campus Area[cite: 2]</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">350</h3>
                <p className="text-sm text-slate-600">Bed Teaching Hospital[cite: 2]</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">9</h3>
                <p className="text-sm text-slate-600">Academic Programmes[cite: 2]</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">7</h3>
                <p className="text-sm text-slate-600">Specialised Laboratories[cite: 2]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Core Values */}
      <section id="vision" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">Our Vision & Mission</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              To become a leading centre of excellence in healthcare and professional education—placing learners at the heart of everything we do—recognised nationally and internationally for academic quality, innovation, and graduate employability[cite: 2].
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Table */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Current Academic Provision</h2>
            <p className="text-slate-600 mt-4">Delivered under the academic framework of Khyber Medical University[cite: 2].</p>
          </div>
          <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Programme</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Duration / Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {programs.map((prog, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{prog.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{prog.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Facilities & Clinical Training */}
      <section id="facilities" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Infrastructure & Clinical Practice</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
              <Building2 className="w-10 h-10 text-red-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Classrooms</h3>
              <p className="text-slate-600">34 fully furnished classrooms, each with a seating capacity of 75 students, equipped with whiteboards and multimedia/projection systems[cite: 2].</p>
            </div>
            <div className="bg-white p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
              <BookOpen className="w-10 h-10 text-red-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Extensive Library</h3>
              <p className="text-slate-600">A well-stocked library housing over 8,500 books covering nursing, allied health sciences and general subjects[cite: 2].</p>
            </div>
            <div id="clinical" className="p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-blue-900 text-white">
              <Stethoscope className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Life Care Hospital</h3>
              <p className="text-slate-300">Students undertake their clinical practice and work placement at our fully operational 350-bed, fourteen-floor general hospital in Hayatabad, Peshawar[cite: 2].</p>
            </div>
          </div>

          <div id="labs" className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center mb-6">
              <FlaskConical className="w-8 h-8 text-blue-900 mr-3" />
              <h3 className="text-2xl font-bold text-slate-900">7 Specialised Laboratories</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {laboratories.map((lab, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                  <span className="text-slate-700 font-medium">{lab}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance & Future Expansion */}
      <section id="quality" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Quality Framework */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <ShieldCheck className="w-10 h-10 text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality Assurance</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                LMI's internal Quality Framework provides a clear benchmark for academic and operational practice[cite: 2].
              </p>
              <p className="text-slate-600 leading-relaxed">
                The framework covers accurate pre-entry information, fair admissions, induction, teaching, assessment, learner support, completion and progression[cite: 2].
              </p>
            </div>

            {/* Strategic Expansion */}
            <div id="expansion" className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <Globe className="w-10 h-10 text-red-700 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Expansion</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                LMI's international development strategy is to establish a phased portfolio of qualifications from recognised UK awarding organisations[cite: 2].
              </p>
              <p className="text-slate-600 leading-relaxed">
                The initial portfolio may include Healthcare Management, Health and Social Care, Business, Leadership and Management, Computing and Digital Skills[cite: 2].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Lifecare Medical Institute</h2>
          <p className="mb-6">Ring Road, Peshawar, Pakistan[cite: 2]</p>
          <p className="text-sm">© 2026 Academic Max (Pvt.) Ltd. All rights reserved[cite: 2].</p>
        </div>
      </footer>
    </div>
  );
}