import { Button, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Styles from './styles.module.css'
import DeepEarth from '../../assets/desktop/image-deep-earth.jpg'
import NightArcade from '../../assets/desktop/image-night-arcade.jpg'
import Soccer from '../../assets/desktop/image-soccer-team.jpg'
import TheGrid from '../../assets/desktop/image-grid.jpg'
import FromAbove from '../../assets/desktop/image-from-above.jpg'
import Borealis from '../../assets/desktop/image-pocket-borealis.jpg'
import Curiosity from '../../assets/desktop/image-curiosity.jpg'
import Fisheye from '../../assets/desktop/image-fisheye.jpg'

import DeepEarthMobile from '../../assets/mobile/image-deep-earth.jpg'
import NightArcadeMobile from '../../assets/mobile/image-night-arcade.jpg'
import SoccerMobile from '../../assets/mobile/image-soccer-team.jpg'
import TheGridMobile from '../../assets/mobile/image-grid.jpg'
import FromAboveMobile from '../../assets/mobile/image-from-above.jpg'
import BorealisMobile from '../../assets/mobile/image-pocket-borealis.jpg'
import CuriosityMobile from '../../assets/mobile/image-curiosity.jpg'
import FisheyeMobile from '../../assets/mobile/image-fisheye.jpg'

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

    '&:hover' : {
      background: '#000',
      color: '#fff'
    }
  },
  buttonMobile: {
    color: '#000',
    height: '5rem',
    padding: '3rem 4rem',
    marginTop: '2rem',
    border: '2px solid var(--dark-gray)',
    fontFamily: 'Alata',
    fontWeight: '400',
    fontSize: '1.5rem',
    letterSpacing: '0.5rem',
    width: '18rem',

    '&:hover' : {
      background: '#000',
      color: '#fff'
    }
  },
  gridList: {
    width: '100%',
  },
  gridListMobile: {
    width: '100%',
  },
  gridListTile: {
    filter: 'brightness(0.8)',

    '&::after' : {
      height: '0px',
    }
  },
  gridListTileMobile: {
    filter: 'brightness(0.6)',

    '&::after' : {
      height: '0px',
    }
  },
  gridListTileBar: {
    height: '100%',
    background: 'none',
    padding: '30rem 2rem 0 2rem',
    transition: '0.2s',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.9)',
    },
  },
  gridListTileBarMobile: {
    height: '100%',
    background: 'none',
    paddingTop: '7rem',
    transition: '0.2s',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.9)',
    },
  },
  title: {
    height: '100%',
    fontFamily: 'Josefin Sans',
    fontWeight: '300',
    color: '#fff',
    fontSize: '3rem',
    lineHeight: '5rem',
    display: 'flex',
    '&:hover': {
      color: '#000',
    },
  },
  titleMobile: {
    height: '100%',
    fontFamily: 'Josefin Sans',
    fontWeight: '300',
    color: '#fff',
    fontSize: '4rem',
    lineHeight: '4rem',
    display: 'flex',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function GridComponent() {
  const classes = useStyles();

  return (
  <>
    <div className={Styles.container}>
      <div className={Styles.gridTitle}>
        <h2>OUR CREATIONS</h2>
        <Button variant='outlined' className={classes.button}>SEE ALL</Button>
      </div>
      <GridList spacing={30} cellHeight='auto' className={classes.gridList} cols={4}>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={DeepEarth} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>DEEP<br/> EARTH</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={NightArcade} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>NIGHT<br/> ARCADE</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={Soccer} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>SOCCER<br/> TEAM VR</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={TheGrid} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>THE<br/> GRID</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={FromAbove} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>FROM UP<br/> ABOVE VR</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={Borealis} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>POCKET<br/> BOREALIS</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={Curiosity} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>THE<br/> CURIOSITY</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
        <GridListTile item xs={3} className={classes.gridListTile}>
          <img src={Fisheye} alt=''/>
          <GridListTileBar title={<h2 className={classes.title}>MAKE IT<br/> FISHEYE</h2>} className={classes.gridListTileBar}/>
        </GridListTile>
      </GridList>
    </div>
    <div className={Styles.containerMobile}>
      <h2 className={Styles.titleMobile}>OUR CREATIONS</h2>
      <GridList spacing={20} cellHeight={150} className={classes.gridListMobile} cols={1}>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={DeepEarthMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>DEEP<br/> EARTH</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={NightArcadeMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>NIGHT<br/> ARCADE</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={SoccerMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>SOCCER<br/> TEAM VR</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={TheGridMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>THE<br/> GRID</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={FromAboveMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>FROM UP<br/> ABOVE VR</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={BorealisMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>POCKET<br/> BOREALIS</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={CuriosityMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>THE<br/> CURIOSITY</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
        <GridListTile item xs={1} className={classes.gridListTileMobile}>
          <img className={Styles.gridItemsMobile} src={FisheyeMobile} alt=''/>
          <GridListTileBar title={<h2 className={classes.titleMobile}>MAKE IT<br/> FISHEYE</h2>} className={classes.gridListTileBarMobile}/>
        </GridListTile>
      </GridList>
      <Button variant='outlined' className={classes.buttonMobile}>SEE ALL</Button>
    </div>
  </>
  )
}