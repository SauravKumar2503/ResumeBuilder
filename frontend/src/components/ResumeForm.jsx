import React from 'react';
import { Plus, Trash2, User, Briefcase, GraduationCap, Wrench } from 'lucide-react';

const ResumeForm = ({ data, setData }) => {
  const handleChange = (section, field, value, index = null) => {
    const newData = { ...data };
    if (index !== null) {
      newData[section][index][field] = value;
    } else {
      newData[section][field] = value;
    }
    setData(newData);
  };

  const addItem = (section, item) => {
    setData({ ...data, [section]: [...data[section], item] });
  };

  const removeItem = (section, index) => {
    const newArray = [...data[section]];
    newArray.splice(index, 1);
    setData({ ...data, [section]: newArray });
  };

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* Personal Info Section */}
      <div className="section-title">
        <span className="section-icon"><User size={20} /></span>
        Personal Details
      </div>
      <div className="form-card">
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input className="input-field" type="text" value={data.personalInfo.fullName} onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)} placeholder="e.g. John Doe" />
          </div>
          <div className="input-group">
            <label className="input-label">Job Title</label>
            <input className="input-field" type="text" value={data.personalInfo.jobTitle} onChange={(e) => handleChange('personalInfo', 'jobTitle', e.target.value)} placeholder="e.g. Software Engineer" />
          </div>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input className="input-field" type="email" value={data.personalInfo.email} onChange={(e) => handleChange('personalInfo', 'email', e.target.value)} placeholder="john@example.com" />
          </div>
          <div className="input-group">
            <label className="input-label">Phone</label>
            <input className="input-field" type="text" value={data.personalInfo.phone} onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)} placeholder="+1 234 567 890" />
          </div>
          <div className="input-group" style={{ gridColumn: '1 / -1' }}>
            <label className="input-label">Address</label>
            <input className="input-field" type="text" value={data.personalInfo.address} onChange={(e) => handleChange('personalInfo', 'address', e.target.value)} placeholder="New York, NY" />
          </div>
          <div className="input-group" style={{ gridColumn: '1 / -1' }}>
            <label className="input-label">Professional Summary</label>
            <textarea className="input-field" rows="4" value={data.personalInfo.summary} onChange={(e) => handleChange('personalInfo', 'summary', e.target.value)} placeholder="A brief, impactful summary of your professional background..."></textarea>
          </div>
        </div>
      </div>

      <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--border)' }} />

      {/* Experience Section */}
      <div className="section-title">
        <span className="section-icon"><Briefcase size={20} /></span>
        Experience
      </div>
      {data.experience.map((exp, index) => (
        <div key={index} className="form-card" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <button className="remove-btn" onClick={() => removeItem('experience', index)}>
            <Trash2 size={16} />
          </button>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="input-group">
              <label className="input-label">Company</label>
              <input className="input-field" type="text" value={exp.company} onChange={(e) => handleChange('experience', 'company', e.target.value, index)} />
            </div>
            <div className="input-group">
              <label className="input-label">Position</label>
              <input className="input-field" type="text" value={exp.position} onChange={(e) => handleChange('experience', 'position', e.target.value, index)} />
            </div>
            <div className="input-group">
              <label className="input-label">Start Date</label>
              <input className="input-field" type="text" value={exp.startDate} onChange={(e) => handleChange('experience', 'startDate', e.target.value, index)} placeholder="MM/YYYY" />
            </div>
            <div className="input-group">
              <label className="input-label">End Date</label>
              <input className="input-field" type="text" value={exp.endDate} onChange={(e) => handleChange('experience', 'endDate', e.target.value, index)} placeholder="MM/YYYY or Present" />
            </div>
            <div className="input-group" style={{ gridColumn: '1 / -1', marginBottom: 0 }}>
              <label className="input-label">Description</label>
              <textarea className="input-field" rows="3" value={exp.description} onChange={(e) => handleChange('experience', 'description', e.target.value, index)} placeholder="Describe your achievements..."></textarea>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }} onClick={() => addItem('experience', { company: '', position: '', startDate: '', endDate: '', description: '' })}>
        <Plus size={18} /> Add Experience
      </button>

      <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--border)' }} />

      {/* Education Section */}
      <div className="section-title">
        <span className="section-icon"><GraduationCap size={20} /></span>
        Education
      </div>
      {data.education.map((edu, index) => (
        <div key={index} className="form-card" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <button className="remove-btn" onClick={() => removeItem('education', index)}>
            <Trash2 size={16} />
          </button>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: 0 }}>
            <div className="input-group">
              <label className="input-label">Institution</label>
              <input className="input-field" type="text" value={edu.institution} onChange={(e) => handleChange('education', 'institution', e.target.value, index)} />
            </div>
            <div className="input-group">
              <label className="input-label">Degree</label>
              <input className="input-field" type="text" value={edu.degree} onChange={(e) => handleChange('education', 'degree', e.target.value, index)} />
            </div>
            <div className="input-group" style={{ marginBottom: 0 }}>
              <label className="input-label">Start Date</label>
              <input className="input-field" type="text" value={edu.startDate} onChange={(e) => handleChange('education', 'startDate', e.target.value, index)} />
            </div>
            <div className="input-group" style={{ marginBottom: 0 }}>
              <label className="input-label">End Date</label>
              <input className="input-field" type="text" value={edu.endDate} onChange={(e) => handleChange('education', 'endDate', e.target.value, index)} />
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-outline" style={{ width: '100%', borderStyle: 'dashed' }} onClick={() => addItem('education', { institution: '', degree: '', startDate: '', endDate: '' })}>
        <Plus size={18} /> Add Education
      </button>

      <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--border)' }} />

      {/* Skills Section */}
      <div className="section-title">
        <span className="section-icon"><Wrench size={20} /></span>
        Skills
      </div>
      <div className="form-card" style={{ marginBottom: 0 }}>
        <div className="input-group" style={{ marginBottom: 0 }}>
          <label className="input-label">Add Skills (Comma separated)</label>
          <input className="input-field" type="text" value={data.skills.join(', ')} onChange={(e) => {
            const skillsArray = e.target.value.split(',').map(s => s.trim()).filter(s => s !== '');
            setData({ ...data, skills: skillsArray });
          }} placeholder="React, Node.js, Project Management..." />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
