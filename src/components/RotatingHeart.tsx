import React from 'react';
import { Cat } from 'lucide-react';
import '../styles/RotatingHeart.css';

const RotatingHeart: React.FC = () => {
  return (
    <div className="heart-container">
      <div className="falling-kittens">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`kitten kitten-${i}`}>
            <Cat className="text-pink-600" size={i % 2 ? 24 : 32} />
          </div>
        ))}
      </div>
      <div className="heart">
        <div className="names">
          <span className="date">23.06.08</span>
          <span className="name">Nazdar</span>
          <span className="and">&</span>
          <span className="name">Ghaith</span>
        </div>
      </div>
    </div>
  );
};

export default RotatingHeart;