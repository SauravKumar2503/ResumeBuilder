import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, FileText, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTemplateClick = () => {
    if (user) {
      navigate('/builder');
    } else {
      navigate('/login');
    }
  };

  const templates = [
    { src: '/modern_template.png', name: 'Modern Executive' },
    { src: '/creative_template.png', name: 'Creative Professional' },
    { src: '/classic_template.png', name: 'Classic Corporate' }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % templates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + templates.length) % templates.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % templates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [templates.length]);

  return (
    <>
      <div className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow-2"></div>
        
        <div className="container hero-content">
          <div style={{ animation: 'slideUp 0.8s ease-out' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '9999px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Sparkles size={16} color="var(--accent)" />
              <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--primary-light)' }}>Resume Builder 2.0</span>
            </div>
            
            <h1 style={{ fontSize: '4.5rem', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: '1.1' }}>
              Craft your <br/>
              <span className="text-gradient">dream resume</span> <br/>
              in minutes.
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '3rem', maxWidth: '480px', lineHeight: '1.6' }}>
              Build a highly professional, ATS-friendly resume with our premium builder. See it come to life in real-time.
            </p>
            
            <div className="flex" style={{ gap: '1rem' }}>
              <Link to="/builder" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Start Building <ArrowRight size={20} />
              </Link>
              <a href="#features" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', color: 'white', borderColor: 'rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)' }}>
                View Features
              </a>
            </div>

            <div className="flex" style={{ marginTop: '3rem', gap: '2rem', color: '#94a3b8', fontSize: '0.875rem' }}>
              <div className="flex items-center" style={{ gap: '0.5rem' }}><CheckCircle size={16} color="var(--accent)" /> No signup required</div>
              <div className="flex items-center" style={{ gap: '0.5rem' }}><CheckCircle size={16} color="var(--accent)" /> Free PDF Export</div>
            </div>
          </div>

          <div style={{ position: 'relative', animation: 'float 6s ease-in-out infinite' }}>
            {/* Template Carousel */}
            <div style={{ background: 'white', width: '100%', aspectRatio: '1/1.4', borderRadius: '8px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', transform: 'rotate(2deg)', overflow: 'hidden', position: 'relative' }}>
              
              <img 
                src={templates[currentSlide].src} 
                alt={templates[currentSlide].name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease' }} 
              />
              
              {/* Controls */}
              <button onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                <ChevronLeft size={24} />
              </button>
              
              <button onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                <ChevronRight size={24} />
              </button>

              <div style={{ position: 'absolute', bottom: '15px', left: '0', right: '0', textAlign: 'center', zIndex: 10 }}>
                <span style={{ background: 'rgba(0,0,0,0.7)', color: 'white', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: '500', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
                  {templates[currentSlide].name}
                </span>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-main)' }}>
               <FileText color="var(--primary)" />
               <div style={{ fontWeight: '600' }}>Live Preview</div>
            </div>
          </div>
        </div>
      </div>

      <div id="templates" style={{ padding: '6rem 0', background: 'var(--bg-panel)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Professional <span style={{ color: 'var(--primary)' }}>Templates</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 4rem' }}>Start with a beautifully designed structure that makes you stand out to recruiters instantly.</p>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Modern Executive */}
            <div onClick={handleTemplateClick} style={{ background: 'var(--bg-dark)', padding: '2rem', borderRadius: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.05)' } }}>
              <img src="/modern_template.png" alt="Modern Executive Template" style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', objectFit: 'cover' }} />
              <h3>Modern Executive</h3>
            </div>

            {/* Creative Professional */}
            <div onClick={handleTemplateClick} style={{ background: 'var(--bg-dark)', padding: '2rem', borderRadius: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <img src="/creative_template.png" alt="Creative Professional Template" style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', objectFit: 'cover' }} />
              <h3>Creative Professional</h3>
            </div>

            {/* Classic Corporate */}
            <div onClick={handleTemplateClick} style={{ background: 'var(--bg-dark)', padding: '2rem', borderRadius: '1rem', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <img src="/classic_template.png" alt="Classic Corporate Template" style={{ width: '100%', height: 'auto', borderRadius: '4px', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', objectFit: 'cover' }} />
              <h3>Classic Corporate</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="features" style={{ padding: '6rem 0', background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Premium <span style={{ color: 'var(--accent)' }}>Features</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>Everything you need to build the perfect resume without the hassle.</p>
          
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Real-time Preview</h3>
              <p style={{ color: 'var(--text-muted)' }}>Watch your resume come to life as you type. No more guessing what the final PDF will look like.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', background: '#fce7f3', color: 'var(--accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <FileText size={24} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>Instant PDF Export</h3>
              <p style={{ color: 'var(--text-muted)' }}>Download your high-resolution PDF instantly with one click, perfectly formatted for printing.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '48px', height: '48px', background: '#e0e7ff', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <CheckCircle size={24} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>ATS-Friendly</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our designs are structured to pass seamlessly through Applicant Tracking Systems.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
