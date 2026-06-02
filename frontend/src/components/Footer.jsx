import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isBuilder = location.pathname === '/builder';

  // Do not show footer in the builder workspace
  if (isBuilder) return null;

  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 0 2rem', color: 'var(--text-muted)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Brand Section */}
        <div>
          <Link to="/" className="flex items-center" style={{ gap: '0.5rem', marginBottom: '1.5rem', textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', padding: '0.4rem', borderRadius: '8px' }}>
              <FileText size={20} color="white" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
              Resume Builder
            </span>
          </Link>
          <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
            Craft your dream resume in minutes. A highly professional, ATS-friendly builder designed to help you land your next big role.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1rem' }}>Product</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="/#templates" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Templates</a></li>
            <li><a href="/#features" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Features</a></li>
            <li><Link to="/builder" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>Builder Workspace</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1rem' }}>Legal</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><span style={{ cursor: 'pointer', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Privacy Policy</span></li>
            <li><span style={{ cursor: 'pointer', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Terms of Service</span></li>
            <li><span style={{ cursor: 'pointer', color: 'var(--text-muted)', transition: 'color 0.2s' }}>Cookie Policy</span></li>
          </ul>
        </div>

        {/* Removed Social to fix icon export errors */}
      </div>

      <div className="container" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} Resume Builder 2.0. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
