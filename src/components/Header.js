import Logo from '../assets/logo.png';
export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt=" WorkMate logo" />
        <span>Work Mate</span>
      </div>
      <div className="themeSelector">
        <span className="light activeTheme"></span>
        <span className="medium activeTheme"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};
