import '../../index.css';
import { ROUTES_MAP } from '../../utils/routesMap.js';
import AppHeader from '../AppHeader/AppHeader.js';
import SearchForm from '../SearchForm/SearchForm.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedCards/SavedCards.js';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import SavedCardsHeader from '../SavedCardsHeader/SavedCardsHeader.js';
import React, { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import PopupSuccess from '../PopupSuccess/PopupSuccess';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPreloaderOpen, setPreloaderOpen] = React.useState(false);
  const [isNotFoundOpen, setNotFoundOpen] = React.useState(false);
  const [areSearchResultsDisplayed, setSearchResultsDisplayed] = React.useState(false);

  const [isPopupWithFormOpen, setPopupWithFormOpen] = React.useState(false);
  const [isSuccessRegPopupOpen, setSuccessRegPopupOpen] = React.useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleLoggedIn = useCallback(() => {
    setIsLoggedIn(!isLoggedIn);
  }, [isLoggedIn]);

  const displaySearchResults = useCallback(() => {
    setSearchResultsDisplayed(!areSearchResultsDisplayed);
  }, [areSearchResultsDisplayed]);

  const togglePreloader = useCallback(() => {
    setPreloaderOpen(!isPreloaderOpen);
  }, [isPreloaderOpen]);

  const toggleNotFound = useCallback(() => {
    displaySearchResults();
    setNotFoundOpen(!isNotFoundOpen);
  }, [isNotFoundOpen, displaySearchResults]);

  const closeAllPopups = useCallback(() => {
    setPopupWithFormOpen(false);
    setSuccessRegPopupOpen(false)
  }, []);

  const handleRegisterSubmission = useCallback(() => {
    setPopupWithFormOpen(false);
    setSuccessRegPopupOpen(true);
  }, []);

  const handleLoginSubmission = useCallback(() => {
    setPopupWithFormOpen(false);
  }, []);

  const handleOpenAuth = useCallback(() => {
    setPopupWithFormOpen(true);
  }, []);

  const handleLoginClick = useCallback(() => {
    setSuccessRegPopupOpen(false);
    setPopupWithFormOpen(true);
  }, []);

  const handleOverlayClose = useCallback((e) => {
    if (e.target.classList.contains('popup')) {
        closeAllPopups();
    }
  }, [closeAllPopups]);

  React.useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups()
      }
    });
  }, [closeAllPopups]);

  return (
    <>
      <Switch>
        <Route path={ROUTES_MAP.SAVED_NEWS}>
          <div className="page__header_saved-news">
              <AppHeader onMenuClick={toggleMenu} 
                          isMenuOpened={isMenuOpen} 
                          LoggedIn={toggleLoggedIn} 
                          isLoggedIn={true} 
                          isFontDark={true}
                          onAuthClick={handleOpenAuth}
                          closeMenuOnclick={closeMenu} 
              />
              <SavedCardsHeader />
          </div>
          <SavedNews toggleNotFound={toggleNotFound}
                    isLoggedIn={true}/>
        </Route>
        <Route exact path={ROUTES_MAP.MAIN}>
          <div className="page__header">
              <AppHeader onMenuClick={toggleMenu} 
                          isMenuOpened={isMenuOpen} 
                          LoggedIn={toggleLoggedIn} 
                          isLoggedIn={isLoggedIn} 
                          isFontDark={false} 
                          onAuthClick={handleOpenAuth}
                          closeMenuOnclick={closeMenu}    
                />
              <SearchForm onSearch={displaySearchResults} showAndHidePreloader={togglePreloader}/>
          </div>
          <Main isResultShown={areSearchResultsDisplayed} 
                isPreloaderShown={isPreloaderOpen}
                toggleNotFound={toggleNotFound}
                isNotFoundShown={isNotFoundOpen}
                isLoggedIn={isLoggedIn}
          />
        </Route>
      </Switch>
      <Footer />

      {
        isPopupWithFormOpen && 
        <PopupWithForm isOpen={isPopupWithFormOpen} 
                        onClose={closeAllPopups} 
                        onRegister={handleRegisterSubmission}
                        onLogin={handleLoginSubmission}
                        onOverlayAndEscClick={handleOverlayClose}
          />
      }
      {
        isSuccessRegPopupOpen && 
        <PopupSuccess isOpen={isSuccessRegPopupOpen} 
                        onClose={closeAllPopups} 
                        onLogin={handleLoginClick}
                        onOverlayAndEscClick={handleOverlayClose}
          />
      }
    </>
  );
}

export default App;