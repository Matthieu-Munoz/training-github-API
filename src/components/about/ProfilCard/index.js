// == Import
// Npm
// Composants
// data, styles et utilitaires
import './styles.scss';
import matthieu from 'src/assets/images/matthieu-nobg.png';
import matthieuBg from 'src/assets/images/PP-bg.png';

// == Composant
function ProfilCard() {
  return (
    <>
      <div className="profil_card__me">
        <div className="profil_card__me__container">
          <div className="profil_card__me__container__inner">
            <img className="profil_card__me__container__inner--circle" alt="profil background" src={matthieuBg} />
            <img className="profil_card__me__container__inner--img" alt="profil" src={matthieu} />
          </div>
        </div>
        <div className="profil_card__me__divider" />
        <div className="profil_card__me__name">Matthieu</div>
        <div className="profil_card__me__title">Étudiant O'Clock</div>
      </div>
      <div className="footer__social">
        <a
          href="https://github.com/Matthieu-Munoz"
          target="blank"
          className="footer__social__link"
        >
          <ion-icon name="logo-github" class="footer__social__link--icon" />
        </a>
        <a
          href="https://twitter.com/Thingamabob_me"
          target="blank"
          className="footer__social__link"
        >
          <ion-icon name="logo-twitter" class="footer__social__link--icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthieu-munoz-798b33184/"
          target="blank"
          className="footer__social__link"
        >
          <ion-icon name="logo-linkedin" class="footer__social__link--icon" />
        </a>
      </div>
    </>
  );
}

// == Export
export default ProfilCard;
