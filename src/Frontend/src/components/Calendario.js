import React from 'react';
import './calendario.css';


function Calendario() {
    return (
      <div className="calendar-container">
        <h1 className="calendar-title">CALENDÁRIO</h1>
        <div className="calendar-grid">
          {Array.from({ length: 31 }, (_, i) => (
            <div key={i + 1} className="calendar-day">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="calendar-info">
          <p className="calendar-period">
            <span className="green"></span> Período de campanha
          </p>
          <p className="calendar-end">
            <span className="red"></span> Encerramento de campanha
          </p>
        </div>
        <div className="donation-info">
          <h2>Onde levar a sua doação...</h2>
          <div className="location-map">
            <img src="caminho-para-mapa.jpg" alt="Mapa da Localização" />
          </div>
          <div className="donation-details">
            <p>Central de Doações Rua Padre Maurício, 242 Vila Invernada, São Paulo, SP</p>
            <p>Horários da central de doações:</p>
            <p>Segunda à Quinta das 8:30 às 20:45</p>
            <p>Sexta das 8:30 às 17:45</p>
            <p>Sábado 9:00 às 11:30</p>
            <p>Domingo 9:00 às 11:30</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Calendario;