import React, { useMemo } from 'react';
import { X, CheckCircle, AlertTriangle, Target } from 'lucide-react';

const actionVerbs = ['managed', 'led', 'developed', 'designed', 'improved', 'increased', 'created', 'spearheaded', 'optimized', 'achieved', 'delivered', 'built', 'implemented'];

const calculateAtsScore = (data) => {
  let score = 0;
  const feedback = [];

  // 1. Completeness (30 points)
  let completenessScore = 0;
  if (data.personalInfo.email) completenessScore += 5;
  if (data.personalInfo.phone) completenessScore += 5;
  if (data.personalInfo.summary?.trim().length > 0) completenessScore += 5;
  if (data.experience.length > 0) completenessScore += 5;
  if (data.education.length > 0) completenessScore += 5;
  if (data.skills.length >= 3) completenessScore += 5;
  
  score += completenessScore;
  if (completenessScore === 30) {
    feedback.push({ type: 'pass', msg: 'All essential sections are complete.' });
  } else {
    feedback.push({ type: 'warn', msg: 'Missing essential fields (Email, Phone, Summary, Experience, Education, or at least 3 Skills).' });
  }

  // 2. Quantifiable Results (30 points)
  let numbersFound = 0;
  data.experience.forEach(exp => {
    const matches = exp.description.match(/\d+/g);
    if (matches) numbersFound += matches.length;
  });

  if (numbersFound >= 3) {
    score += 30;
    feedback.push({ type: 'pass', msg: 'Great use of numbers and metrics to quantify achievements.' });
  } else if (numbersFound > 0) {
    score += 15;
    feedback.push({ type: 'warn', msg: 'Consider adding more numbers/percentages to your experience descriptions to show impact.' });
  } else {
    feedback.push({ type: 'warn', msg: 'No quantifiable results found. Add metrics (%, $, numbers) to your experience!' });
  }

  // 3. Action Verbs (20 points)
  let verbsFound = 0;
  const allExpText = data.experience.map(e => e.description.toLowerCase()).join(' ');
  actionVerbs.forEach(verb => {
    if (allExpText.includes(verb)) verbsFound++;
  });

  if (verbsFound >= 3) {
    score += 20;
    feedback.push({ type: 'pass', msg: 'Strong use of action verbs in experience descriptions.' });
  } else if (verbsFound > 0) {
    score += 10;
    feedback.push({ type: 'warn', msg: 'Add more strong action verbs (e.g., "Led", "Optimized", "Developed").' });
  } else {
    feedback.push({ type: 'warn', msg: 'Missing action verbs. Start your bullet points with strong verbs!' });
  }

  // 4. Length & Detail (20 points)
  const summaryWords = data.personalInfo.summary?.split(' ').filter(w => w.length > 0).length || 0;
  let lengthScore = 0;
  if (summaryWords >= 20) {
    lengthScore += 10;
  } else {
    feedback.push({ type: 'warn', msg: 'Professional summary is too short. Aim for at least 20 words.' });
  }

  let expWords = 0;
  data.experience.forEach(exp => {
    expWords += exp.description.split(' ').filter(w => w.length > 0).length;
  });
  const avgExpWords = data.experience.length > 0 ? expWords / data.experience.length : 0;
  
  if (avgExpWords >= 20) {
    lengthScore += 10;
  } else {
    feedback.push({ type: 'warn', msg: 'Experience descriptions lack detail. Expand on your responsibilities and achievements.' });
  }

  score += lengthScore;
  if (lengthScore === 20) {
    feedback.push({ type: 'pass', msg: 'Summary and experience descriptions are adequately detailed.' });
  }

  return { score, feedback };
};

const AtsCheckerModal = ({ data, onClose }) => {
  const { score, feedback } = useMemo(() => calculateAtsScore(data), [data]);

  let scoreColor = '#ef4444'; // Red
  if (score >= 80) scoreColor = '#22c55e'; // Green
  else if (score >= 50) scoreColor = '#eab308'; // Yellow

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.2s ease-out'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        width: '90%',
        maxWidth: '550px',
        padding: '2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Target color="var(--primary)" /> ATS Score
          </h2>
          
          <div style={{
            width: '120px', height: '120px', borderRadius: '50%',
            border: `8px solid ${scoreColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto', fontSize: '3rem', fontWeight: 'bold', color: 'var(--text-main)'
          }}>
            {score}
          </div>
          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '1rem' }}>
            {score >= 80 ? 'Excellent! Your resume is highly optimized for ATS.' : 
             score >= 50 ? 'Good, but there is room for improvement to pass strict ATS.' : 
             'Needs work. Follow the suggestions below to improve your score.'}
          </p>
        </div>

        <div style={{ background: 'var(--bg-panel)', padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Feedback & Suggestions</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {feedback.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', lineHeight: '1.4' }}>
                {item.type === 'pass' ? 
                  <CheckCircle size={20} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} /> : 
                  <AlertTriangle size={20} color="#eab308" style={{ flexShrink: 0, marginTop: '2px' }} />
                }
                <span style={{ color: item.type === 'pass' ? 'var(--text-main)' : 'var(--text-main)' }}>
                  {item.msg}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '1rem', fontSize: '1.1rem' }} onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default AtsCheckerModal;
