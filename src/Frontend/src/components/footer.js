import React from 'react';
import paypal from '../images/PayPal.png';
import visa from '../images/Visa.png';
import mastercard from '../images/Mastercard.png';
import elo from '../images/Elo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <div className="links-section">
                    <h4>Institucional</h4>
                    <ul>
                        <li><a href="#">Sobre a Organização PROTEGE - "Manos que ayudan, transforman corazones"</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Faça Voluntariado Conosco</a></li>
                        <li><a href="#">Relatórios</a></li>
                        <li><a href="#">Regulamentos</a></li>
                        <li><a href="#">Principais Dúvidas</a></li>
                        <li><a href="#">Programa de Doação</a></li>
                    </ul>
                </div>
                <div className="links-section">
                    <h4>Ajuda</h4>
                    <ul>
                        <li><a href="#">Minha Conta</a></li>
                        <li><a href="#">Segurança e Privacidade</a></li>
                        <li><a href="#">Acessibilidade</a></li>
                        <li><a href="#">Contato para Ajuda</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Redes Sociais</a></li>
                        <li><a href="#">Ajuda ou Feedback</a></li>
                    </ul>
                </div>
                <div className="links-section">
                    <h4>Central de Relacionamento</h4>
                    <ul>
                        <li><a href="#">Tire suas dúvidas</a></li>
                    </ul>
                    <h4>Siga-nos e nos acompanhe</h4>
                    <div className="social-media">
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                  <div className="payment-methods">
                    <img src={paypal} alt="PayPal" />
                    <img src={visa} alt="Visa" />
                    <img src={mastercard} alt="Mastercard" />
                    <img src={elo} alt="Elo" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
