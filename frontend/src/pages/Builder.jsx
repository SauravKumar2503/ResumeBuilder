import React, { useState, useEffect, useContext } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import AtsCheckerModal from '../components/AtsCheckerModal';
import axios from 'axios';
import { Save, Download, FileText, Target } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Builder = () => {
  const { user } = useContext(AuthContext);
  const [resumeId, setResumeId] = useState(null);
  const [isAtsModalOpen, setIsAtsModalOpen] = useState(false);
  const [resumeData, setResumeData] = useState({
    template: 'modern',
    personalInfo: {
      fullName: 'Alex Mitchell',
      jobTitle: 'Senior Software Engineer',
      email: 'alex.mitchell@example.com',
      phone: '+1 (415) 555-0198',
      address: 'San Francisco, CA',
      summary: 'Results-driven Senior Software Engineer with over 6 years of experience architecting scalable backend systems and responsive web applications. Proven ability to lead cross-functional teams, optimize database performance, and deliver high-quality software on schedule.'
    },
    experience: [
      {
        company: 'TechFlow Solutions',
        position: 'Lead Full Stack Developer',
        startDate: 'Jan 2021',
        endDate: 'Present',
        description: 'Spearheaded the migration of a legacy monolithic application to a microservices architecture using Node.js and Docker, reducing server costs by 30%. Managed a team of 4 engineers and implemented strict CI/CD pipelines.'
      },
      {
        company: 'Innovate Web Agency',
        position: 'Frontend Engineer',
        startDate: 'Jun 2018',
        endDate: 'Dec 2020',
        description: 'Developed interactive UI components for various high-profile clients using React and Redux. Improved core web vitals by optimizing bundle sizes and implementing lazy loading.'
      }
    ],
    education: [
      {
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science in Computer Science',
        startDate: 'Sep 2014',
        endDate: 'May 2018',
        description: 'Graduated with Honors. Vice President of the Coding Club.'
      }
    ],
    skills: ['JavaScript (ES6+)', 'React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL']
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch user's existing resume on load
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${user.token}` }
        };
        const res = await axios.get(`${API_URL}/api/resumes`, config);
        
        if (res.data.length > 0) {
          // Load the first resume for simplicity in this version
          setResumeData(res.data[0]);
          setResumeId(res.data[0]._id);
        }
      } catch (error) {
        console.error('Error fetching resume', error);
      }
      setIsLoading(false);
    };

    if (user && user.token) {
      fetchResume();
    }
  }, [user]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${user.token}` }
      };

      if (resumeId) {
        // Update existing resume
        await axios.put(`${API_URL}/api/resumes/${resumeId}`, resumeData, config);
        alert('Resume updated successfully!');
      } else {
        // Create new resume
        const res = await axios.post(`${API_URL}/api/resumes`, resumeData, config);
        setResumeId(res.data._id);
        alert('Resume created successfully!');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to save resume.');
    }
    setIsSaving(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const changeTemplate = (newTemplate) => {
    setResumeData(prev => ({ ...prev, template: newTemplate }));
  };

  if (isLoading) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Workspace...</div>;
  }

  return (
    <div className="builder-layout">
      {/* Sidebar Form Panel */}
      <div className="form-panel">
        <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
          <h2 className="flex items-center" style={{ gap: '0.5rem', fontSize: '1.25rem' }}>
            <FileText size={24} color="var(--primary)" />
            Edit Content
          </h2>
          <div className="flex" style={{ gap: '0.5rem' }}>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', borderColor: 'var(--accent)', color: 'var(--accent)' }} onClick={() => setIsAtsModalOpen(true)}>
              <Target size={16} />
              ATS Score
            </button>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }} onClick={handleSave} disabled={isSaving}>
              <Save size={16} />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }} onClick={handlePrint}>
              <Download size={16} />
              PDF
            </button>
          </div>
        </div>

        {/* Template Selector */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
          {['modern', 'classic', 'creative'].map(tpl => (
            <button
              key={tpl}
              onClick={() => changeTemplate(tpl)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: resumeData.template === tpl ? '2px solid var(--primary)' : '1px solid var(--border)',
                background: resumeData.template === tpl ? 'var(--primary-light)' : 'transparent',
                color: resumeData.template === tpl ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: '600',
                textTransform: 'capitalize',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tpl}
            </button>
          ))}
        </div>
        <ResumeForm data={resumeData} setData={setResumeData} />
      </div>

      {/* Workspace Preview Panel */}
      <div className="preview-panel">
        <ResumePreview data={resumeData} />
      </div>

      {isAtsModalOpen && (
        <AtsCheckerModal data={resumeData} onClose={() => setIsAtsModalOpen(false)} />
      )}
    </div>
  );
};

export default Builder;
