import Header from '../../components/Header/Header';
import Preview from '../../components/Preview/Preview';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';

import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>
        <Preview />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
