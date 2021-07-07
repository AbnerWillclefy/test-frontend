import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Styles from './styles.module.css';
import DeepEarth from '../../assets/desktop/image-deep-earth.jpg';
import NightArcade from '../../assets/desktop/image-night-arcade.jpg';
import Soccer from '../../assets/desktop/image-soccer-team.jpg';
import TheGrid from '../../assets/desktop/image-grid.jpg';
import FromAbove from '../../assets/desktop/image-from-above.jpg';
import Borealis from '../../assets/desktop/image-pocket-borealis.jpg';
import Curiosity from '../../assets/desktop/image-curiosity.jpg';
import Fisheye from '../../assets/desktop/image-fisheye.jpg';

import DeepEarthMobile from '../../assets/mobile/image-deep-earth.jpg';
import NightArcadeMobile from '../../assets/mobile/image-night-arcade.jpg';
import SoccerMobile from '../../assets/mobile/image-soccer-team.jpg';
import TheGridMobile from '../../assets/mobile/image-grid.jpg';
import FromAboveMobile from '../../assets/mobile/image-from-above.jpg';
import BorealisMobile from '../../assets/mobile/image-pocket-borealis.jpg';
import CuriosityMobile from '../../assets/mobile/image-curiosity.jpg';
import FisheyeMobile from '../../assets/mobile/image-fisheye.jpg';

const imagesDesktop = [
  { src: DeepEarth, alt: `DEEP EARTH` },
  { src: NightArcade, alt: 'NIGHT ARCADE' },
  { src: Soccer, alt: 'SOCCER TEAM VR' },
  { src: TheGrid, alt: 'THE GRID' },
  { src: FromAbove, alt: 'FROM ABOVE VR' },
  { src: Borealis, alt: 'POCKET BOREALIS' },
  { src: Curiosity, alt: 'THE CURIOSITY' },
  { src: Fisheye, alt: 'MAKE IT FISHEYE' },
];

const imagesMobile = [
  { src: DeepEarthMobile, alt: 'DEEP EARTH' },
  { src: NightArcadeMobile, alt: 'NIGHT ARCADE' },
  { src: SoccerMobile, alt: 'SOCCER TEAM VR' },
  { src: TheGridMobile, alt: 'THE GRID' },
  { src: FromAboveMobile, alt: 'FROM ABOVE VR' },
  { src: BorealisMobile, alt: 'POCKET BOREALIS' },
  { src: CuriosityMobile, alt: 'THE CURIOSITY' },
  { src: FisheyeMobile, alt: 'MAKE IT FISHEYE' },
];

const useStyles = makeStyles({
  button: {
    color: '#000',
    height: '3rem',
    padding: '2rem 3rem',
    border: '2px solid var(--dark-gray)',
    fontFamily: 'Alata',
    fontWeight: '400',
    fontSize: '1.5rem',
    letterSpacing: '0.5rem',
    width: '15rem',

    '&:hover': {
      background: '#000',
      color: '#fff',
    },
  },
  buttonMobile: {
    color: '#000',
    height: '5rem',
    padding: '3rem 4rem',
    marginTop: '2rem',
    border: '2px solid var(--very-dark-gray)',
    fontFamily: 'Alata',
    fontWeight: '400',
    fontSize: '2rem',
    letterSpacing: '0.5rem',
    width: '22rem',

    '&:hover': {
      background: '#000',
      color: '#fff',
    },
  },
});

export default function GridComponent() {
  const classes = useStyles();

  return (
    <>
      <div id="creations" className={Styles.container}>
        <div className={Styles.gridTitle}>
          <h2>OUR CREATIONS</h2>
          <Button variant="outlined" className={classes.button}>
            SEE ALL
          </Button>
        </div>
        <div className={Styles.gridDesktop}>
          {imagesDesktop.map((value, index) => {
            return (
              <figure key={index}>
                <img src={value.src} alt="" />
                <figcaption>
                  {index === 3 ? (
                    <p>
                      THE <br /> GRID
                    </p>
                  ) : (
                    value.alt
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <div id="creationsMobile" className={Styles.containerMobile}>
        <h2 className={Styles.titleMobile}>OUR CREATIONS</h2>
        <div className={Styles.gridMobile}>
          {imagesMobile.map((value, index) => {
            return (
              <figure className={Styles.figureMobile} key={index}>
                <img src={value.src} alt="" className={Styles.imageMobile} />
                <figcaption className={Styles.figcaptionMobile}>
                  {value.alt}
                </figcaption>
              </figure>
            );
          })}
        </div>
        <Button variant="outlined" className={classes.buttonMobile}>
          SEE ALL
        </Button>
      </div>
    </>
  );
}
