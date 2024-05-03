import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const Layout = () => {
	const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return(
        <div>
			<nav className="nav-bar fixed-top navbar navbar-expand-sm navbar-light">
				<div className="container-fluid">
					<NavLink to="/" className="web-logo navbar-brand">
						<img src="/imgs/logo.svg" alt="GetDPP logo" className="logo-img" />
					</NavLink>

					<div className="language-switcher ml">
                        <button onClick={() => changeLanguage('en')} className="btn">EN</button>
                        <button onClick={() => changeLanguage('es')} className="btn">ES</button>
                    </div>

					{/* Hamburger Menu Button */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Collapsible Menu */}
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Learn" className="nav-link">
									Learn
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Chat" className="nav-link">
									Chat
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/About" className="nav-link">
									Guide
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/Team" className="nav-link">
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<main>
				<Outlet />
			</main>

			<footer className="footer">
				<div className="footer-logo">
					<img src="/imgs/logo.svg" alt="Logo" />
				</div>
				<div className="footer-info">
					<span>&copy; 2024 Team Mavericks</span>
				</div>
			</footer>
		</div>

    )
  };
  
export default Layout;