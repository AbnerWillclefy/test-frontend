import Styles from './styles.module.css';

export default function Main() {
  return (
    <section id="about">
      <div className={Styles.image} />
      <div className={Styles.whiteContainer}>
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
