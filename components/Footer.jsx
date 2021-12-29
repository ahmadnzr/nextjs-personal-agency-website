import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>av0cad0 creatives.</h1>
        <Link href="/contact" passHref>
          <h1 className={styles.linkTitle}>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src="/img/link.png" width="40px" height="40px" alt="" />
          </h1>
        </Link>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          JLN. SUKOHARJO, CONDONG CATUR <br /> DIY, INDONESIA
        </div>
        <div className={styles.cardItem}>
          AHMAD.RPL001@GMAIL.COM <br /> 123 321 445 1
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardItem}>
          FOLLOW US : <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2022 AHMAD NIZAR <br /> ALL RIGHT RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
