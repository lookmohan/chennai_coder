import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { Code, Brain, Terminal, Database, Wrench, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillsData.map((s) => s.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages': return <Code size={20} />;
      case 'Artificial Intelligence & Machine Learning': return <Brain size={20} />;
      case 'Python Development': return <Terminal size={20} />;
      case 'AI Frameworks & Tools': return <Cpu size={20} />;
      case 'Databases': return <Database size={20} />;
      case 'Developer Tools': return <Wrench size={20} />;
      default: return <Code size={20} />;
    }
  };

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-desc">
            Technologies, frameworks, and intelligence tools utilized for training and software solution development.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor: activeCategory === cat ? 'var(--color-accent)' : 'var(--border-color)',
                background: activeCategory === cat ? 'var(--color-accent-light)' : 'var(--bg-surface)',
                color: activeCategory === cat ? 'var(--color-accent)' : 'var(--text-body)',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {getCategoryIcon(category.title)}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>
                  {category.title}
                </h3>
              </div>

              {/* Skill Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      fontFamily: 'var(--font-code)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '8px',
                      background: 'var(--bg-main)',
                      color: 'var(--text-heading)',
                      border: '1px solid var(--border-color)',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
