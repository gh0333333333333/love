import React, { useState, useEffect } from 'react';
import { Cat, Heart, Sparkles, Star } from 'lucide-react';
import '../styles/RotatingHeart.css';

const RotatingHeart: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);

  const loveMessages = [
    "Du kommer alltid att vara min ❤️",
    "Min kärlek till dig växer varje dag 💕",
    "Du är mitt allt, Nazdar 🌟",
    "Tillsammans för alltid, Ghaith 💖",
    "Du gör mitt hjärta komplett 💝",
    "Min eviga kärlek ✨",
    "Du är min själsfrände 💫",
    "Vårt hjärta slår som ett 💗"
  ];

  const handleHeartClick = () => {
    setIsClicked(true);
    setShowMessage(true);
    setMessageIndex(Math.floor(Math.random() * loveMessages.length));
    
    // Create sparkle effect
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setSparkles(newSparkles);

    // Reset effects after animation
    setTimeout(() => {
      setIsClicked(false);
      setShowMessage(false);
      setSparkles([]);
    }, 3000);
  };

  return (
    <div className="heart-container">
      {/* Enhanced falling cats */}
      <div className="falling-kittens">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`kitten kitten-${i} ${isClicked ? 'excited' : ''}`}>
            <Cat 
              className={`text-pink-600 ${isClicked ? 'text-red-500' : ''}`} 
              size={i % 3 === 0 ? 36 : i % 2 ? 28 : 24} 
            />
          </div>
        ))}
      </div>

      {/* Sparkle effects */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        >
          <Sparkles className="text-yellow-300" size={20} />
        </div>
      ))}

      {/* Floating hearts */}
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`floating-heart floating-heart-${i} ${isClicked ? 'burst' : ''}`}>
            <Heart className="text-pink-400" size={16} fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Main heart */}
      <div 
        className={`heart ${isClicked ? 'clicked' : ''}`}
        onClick={handleHeartClick}
      >
        <div className="names">
          <span className="date">23.06.08</span>
          <span className="name">Nazdar</span>
          <span className="and">&</span>
          <span className="name">Ghaith</span>
        </div>
      </div>

      {/* Love message popup */}
      {showMessage && (
        <div className="love-message">
          <div className="message-content">
            <Star className="text-yellow-300 mb-2" size={24} />
            <p>{loveMessages[messageIndex]}</p>
          </div>
        </div>
      )}

      {/* Click instruction */}
      <div className="click-instruction">
        <p>Klicka på hjärtat 💕</p>
      </div>
    </div>
  );
};

export default RotatingHeart;