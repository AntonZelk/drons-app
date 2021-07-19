import Footer from '../../components/Footer/Footer';

import classes from './CartPage.module.scss';

const CartPage = () => {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <h1>Cart Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
