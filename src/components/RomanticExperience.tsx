import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Moon, Sun } from 'lucide-react';

const RomanticExperience: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');

  const loveMessages = [
    "Du är mitt hjärtas melodi 🎵",
    "Varje dag med dig är en gåva 🎁",
    "Du gör mitt liv komplett ✨",
    "Min eviga kärlek till dig 💕",
    "Tillsammans skapar vi magi 🌟",
    "Du är min själsfrände 💫",
    "Vårt hjärta slår i takt 💗",
    "För alltid din, Ghaith 💖"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(prev => prev === 'day' ? 'night' : 'day');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleHeartInteraction = () => {
    setIsInteracting(true);
    setCurrentMessage(Math.floor(Math.random() * loveMessages.length));
    
    // Create magical particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    setTimeout(() => {
      setIsInteracting(false);
      setParticles([]);
    }, 4000);
  };

  return (
    <div className={`romantic-container ${timeOfDay}`}>
      {/* Background Elements */}
      <div className="background-elements">
        <div className="floating-elements">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`floating-element element-${i}`}>
              {i % 3 === 0 ? <Heart size={12} /> : i % 2 === 0 ? <Star size={10} /> : <Sparkles size={8} />}
            </div>
          ))}
        </div>
        
        {/* Time indicator */}
        <div className="time-indicator">
          {timeOfDay === 'day' ? <Sun className="sun-icon\" size={32} /> : <Moon className="moon-icon" size={32} />}
        </div>
      </div>

      {/* Magical particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="magical-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        >
          <Sparkles size={16} />
        </div>
      ))}

      {/* Main Content */}
      <div className="main-content">
        {/* Anniversary Date */}
        <div className="anniversary-section">
          <div className="date-display">23.06.08</div>
          <div className="anniversary-text">Vårt första möte</div>
        </div>

        {/* Interactive Heart */}
        <div 
          className={`interactive-heart ${isInteracting ? 'active' : ''}`}
          onClick={handleHeartInteraction}
        >
          <div className="heart-glow"></div>
          <Heart className="main-heart-icon" size={80} fill="currentColor" />
          
          {/* Names */}
          <div className="names-container">
            <span className="name nazdar">Nazdar</span>
            <span className="connector">&</span>
            <span className="name ghaith">Ghaith</span>
          </div>
        </div>

        {/* Love Message */}
        {isInteracting && (
          <div className="love-message-popup">
            <div className="message-bubble">
              <Star className="message-star" size={20} />
              <p className="message-text">{loveMessages[currentMessage]}</p>
            </div>
          </div>
        )}

        {/* Interaction Hint */}
        <div className="interaction-hint">
          <p>Tryck på hjärtat för kärlek 💕</p>
        </div>
      </div>

      {/* Ambient Hearts */}
      <div className="ambient-hearts">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`ambient-heart heart-${i} ${isInteracting ? 'excited' : ''}`}>
            <Heart size={20} fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RomanticExperience;