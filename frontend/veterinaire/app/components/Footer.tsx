import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-white text-center py-4  border-top">
            <div className="container">
                <p className="mb-0">© 2025 Vitecare. Tous droits réservés.</p>
                <p>
                    <a href="/about" className="text-decoration-none">À propos</a> |
                    <a href="/contact" className="text-decoration-none"> Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
