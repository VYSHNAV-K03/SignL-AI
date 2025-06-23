import React from 'react';
import one from "../assets/1.png"
import Two from "../assets/2-.png"
import Three from "../assets/3.png"
import Four from "../assets/4.png"
import Five from "../assets/5.png"
import Six from "../assets/6.png"
import Seven from "../assets/7.png"
import Eight from "../assets/8.png"
import Nine from "../assets/9.png"
import Ten from "../assets/10.png"


const LearnNumbersSignLanguage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f9f9f9', margin: 0, padding: 0 }}>
      <h1 style={{ marginTop: '20px', color: '#333' }}>Learn Numbers with Sign Language</h1>

      <div className="number-container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px',
        padding: '20px',
        maxWidth: '900px',
        margin: 'auto',
      }}>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>1</h2>
          <img src={one} alt="Sign for 1" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>2</h2>
          <img src={Two} alt="Sign for 2" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>3</h2>
          <img src={Three} alt="Sign for 3" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>4</h2>
          <img src={Four} alt="Sign for 4" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>5</h2>
          <img src={Five} alt="Sign for 5" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>6</h2>
          <img src={Six} alt="Sign for 6" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>7</h2>
          <img src={Seven} alt="Sign for 7" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>8</h2>
          <img src={Eight} alt="Sign for 8" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>9</h2>
          <img src={Nine} alt="Sign for 9" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        <div className="number-item" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ margin: '10px 0 5px', color: '#007bff', fontSize: '20px' }}>10</h2>
          <img src={Ten} alt="Sign for 10" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
        </div>
        
      </div>

    </div>
  );
};

export default LearnNumbersSignLanguage;
