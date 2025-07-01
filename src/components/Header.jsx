import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="8" r="4" fill="url(#water1)" />
              <ellipse cx="16" cy="16" rx="6" ry="3" fill="url(#water2)" />
              <ellipse cx="16" cy="22" rx="8" ry="4" fill="url(#water3)" />
              <defs>
                <linearGradient id="water1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                <linearGradient id="water2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0e7490" />
                </linearGradient>
                <linearGradient id="water3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0e7490" />
                  <stop offset="100%" stopColor="#155e75" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text">
            <h1>AquaFlow</h1>
            <span className="logo-subtitle">Control System</span>
          </div>
        </div>
        
        <div className="status-indicators">
          <div className="status-item">
            <div className="status-dot active"></div>
            <span>System Online</span>
          </div>
          <div className="status-item">
            <div className="status-dot warning"></div>
            <span>3 Alerts</span>
          </div>
        </div>
      </div>
      
      <div className="header-center">
        <div className="page-title-container">
          <h2 className="page-title">Water Treatment Monitoring Dashboard</h2>
          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="separator">›</span>
            <span>Flow Control</span>
          </div>
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-actions">
          <button className="action-btn notification-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="notification-badge">3</span>
          </button>
          
          <button className="action-btn settings-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
            </svg>
          </button>
        </div>
        
        <div className="datetime-container">
          <div className="time">{formatTime(currentTime)}</div>
          <div className="date">{formatDate(currentTime)}</div>
        </div>
        
        <div className="user-profile">
          <div className="user-info">
            <div className="user-name">Ahmed Ali</div>
            <div className="user-role">System Admin</div>
          </div>
          <div className="user-avatar">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;