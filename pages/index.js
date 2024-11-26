import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      {/* Pink Border */}
      <div className={styles['pink-border']}>
        Whoooo! Dreams Come True
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <ul className={styles.navItems}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href="/signin">
          <button className={styles.navButton}>Sign In</button>
        </Link>
      </nav>

      {/* Main Section */}
      <div className={styles['main-section']}>
        <div className={styles.overlay}>
          <h1>Your Dream Starts Here</h1>
          <button>Get Started</button>
        </div>
      </div>

      {/* Popular Posts Section */}
      <div className={styles.popularPosts}>
        <h2>POPULAR POSTS</h2>
        <div className={styles.productList}>
          <div className={styles.productItem}>
            <img src="/product1.jpg" alt="Product 1" />
            <h3>HOME-MADE SCRUBS - ORGANIC</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...</p>
            <button className={styles.readMoreButton}>READ MORE</button>
          </div>
          <div className={styles.productItem}>
            <img src="/product2.jpg" alt="Product 2" />
            <h3>HOME-MADE SCRUBS - ORGANIC</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...</p>
            <button className={styles.readMoreButton}>READ MORE</button>
          </div>
          <div className={styles.productItem}>
            <img src="/product3.jpg" alt="Product 3" />
            <h3>fasfaffas</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...</p>
            <button className={styles.readMoreButton}>READ MORE</button>
          </div>
        </div>

        <div className="imageSection">
          <img src="/image1.jpg" alt="Image 1" />
          <img src="/image2.jpg" alt="Image 2" />
          <img src="/image3.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
}
