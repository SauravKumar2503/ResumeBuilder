import React from 'react';

const ResumePreview = ({ data }) => {
  const { template, personalInfo, experience, education, skills } = data;
  
  // Default to modern if not set
  const currentTemplate = template || 'modern';

  // --- MODERN EXECUTIVE TEMPLATE (Default) ---
  if (currentTemplate === 'modern') {
    return (
      <div className="resume-a4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Header */}
        <div style={{ paddingBottom: '2rem', marginBottom: '2rem', borderBottom: '2px solid #0f172a' }}>
          <h1 className="font-playfair" style={{ margin: '0 0 0.5rem 0', fontSize: '3rem', color: '#0f172a', letterSpacing: '-0.02em', lineHeight: '1' }}>
            {personalInfo.fullName || 'Your Name'}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 1rem 0', color: '#4f46e5', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {personalInfo.jobTitle || 'Professional Title'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
            {personalInfo.email && <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>✉ {personalInfo.email}</span>}
            {personalInfo.phone && <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>☎ {personalInfo.phone}</span>}
            {personalInfo.address && <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>⌂ {personalInfo.address}</span>}
          </div>
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem', fontWeight: '700' }}>
              Profile
            </h2>
            <p style={{ lineHeight: '1.7', color: '#334155', textAlign: 'justify' }}>{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.1rem', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              Professional Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} style={{ marginBottom: '1.5rem', position: 'relative', paddingLeft: '1rem', borderLeft: '2px solid #e0e7ff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#0f172a', margin: 0 }}>{exp.position || 'Position Title'}</h3>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500', background: '#f8fafc', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <div style={{ fontSize: '1rem', color: '#4f46e5', fontWeight: '500', marginBottom: '0.75rem' }}>
                  {exp.company || 'Company Name'}
                </div>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#334155' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education & Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {education && education.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.1rem', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontWeight: '700' }}>
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: '#0f172a', margin: '0 0 0.25rem 0' }}>{edu.degree || 'Degree Program'}</h3>
                  <div style={{ color: '#4f46e5', fontWeight: '500', fontSize: '0.95rem' }}>{edu.institution || 'University Name'}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>{edu.startDate} - {edu.endDate}</div>
                </div>
              ))}
            </div>
          )}

          {skills && skills.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.1rem', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem', fontWeight: '700' }}>
                Technical Skills
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill, index) => (
                  <span key={index} style={{ background: '#f1f5f9', color: '#334155', border: '1px solid #e2e8f0', padding: '0.375rem 0.875rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- CLASSIC CORPORATE TEMPLATE ---
  if (currentTemplate === 'classic') {
    return (
      <div className="resume-a4" style={{ fontFamily: '"Times New Roman", Times, serif', color: '#000' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid #000', paddingBottom: '1rem' }}>
          <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
            {personalInfo.fullName || 'YOUR NAME'}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '1rem' }}>
            {personalInfo.address && <span>{personalInfo.address}</span>}
            {personalInfo.address && (personalInfo.phone || personalInfo.email) && <span>|</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.phone && personalInfo.email && <span>|</span>}
            {personalInfo.email && <span>{personalInfo.email}</span>}
          </div>
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.2rem', marginBottom: '0.8rem' }}>
              Professional Summary
            </h2>
            <p style={{ lineHeight: '1.5', textAlign: 'justify' }}>{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.2rem', marginBottom: '0.8rem' }}>
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>{exp.company || 'Company Name'}</span>
                  <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                </div>
                <div style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{exp.position || 'Position Title'}</div>
                <p style={{ margin: 0, lineHeight: '1.5' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.2rem', marginBottom: '0.8rem' }}>
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                  <span>{edu.institution || 'University Name'}</span>
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
                <div style={{ fontStyle: 'italic' }}>{edu.degree || 'Degree Program'}</div>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', borderBottom: '1px solid #ccc', paddingBottom: '0.2rem', marginBottom: '0.8rem' }}>
              Skills
            </h2>
            <p style={{ lineHeight: '1.5' }}>{skills.join(', ')}</p>
          </div>
        )}
      </div>
    );
  }

  // --- CREATIVE PROFESSIONAL TEMPLATE ---
  if (currentTemplate === 'creative') {
    return (
      <div className="resume-a4" style={{ fontFamily: 'Inter, sans-serif', padding: 0, display: 'flex', minHeight: '297mm' }}>
        
        {/* Dark Sidebar */}
        <div style={{ width: '35%', background: '#1e293b', color: 'white', padding: '3rem 2rem' }}>
          <h1 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '0.5rem', color: '#f8fafc' }}>
            {personalInfo.fullName ? personalInfo.fullName.split(' ').map((n, i) => <div key={i}>{n}</div>) : 'Your Name'}
          </h1>
          <div style={{ fontSize: '1.1rem', color: '#38bdf8', marginBottom: '3rem', fontWeight: '500' }}>
            {personalInfo.jobTitle || 'Professional Title'}
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              Contact
            </h3>
            {personalInfo.email && <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>{personalInfo.email}</div>}
            {personalInfo.phone && <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>{personalInfo.phone}</div>}
            {personalInfo.address && <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>{personalInfo.address}</div>}
          </div>

          {education && education.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontWeight: '600', fontSize: '1rem', color: '#f8fafc' }}>{edu.degree || 'Degree'}</div>
                  <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0.25rem' }}>{edu.institution || 'University'}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{edu.startDate} - {edu.endDate}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div style={{ width: '65%', background: 'white', padding: '3rem 2.5rem' }}>
          
          {personalInfo.summary && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ width: '20px', height: '4px', background: '#38bdf8', display: 'inline-block' }}></span>
                Profile
              </h2>
              <p style={{ lineHeight: '1.7', color: '#475569' }}>{personalInfo.summary}</p>
            </div>
          )}

          {experience && experience.length > 0 && (
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ width: '20px', height: '4px', background: '#38bdf8', display: 'inline-block' }}></span>
                Experience
              </h2>
              {experience.map((exp, index) => (
                <div key={index} style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#0f172a', margin: 0 }}>{exp.position || 'Position Title'}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '600', background: '#e0f2fe', padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <div style={{ fontSize: '1rem', color: '#64748b', fontWeight: '500', marginBottom: '0.75rem' }}>
                    {exp.company || 'Company Name'}
                  </div>
                  <p style={{ margin: 0, lineHeight: '1.6', color: '#475569' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {skills && skills.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ width: '20px', height: '4px', background: '#38bdf8', display: 'inline-block' }}></span>
                Skills
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill, index) => (
                  <span key={index} style={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #cbd5e1', padding: '0.5rem 1rem', fontSize: '0.9rem', fontWeight: '500' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    );
  }

  return null;
};

export default ResumePreview;
