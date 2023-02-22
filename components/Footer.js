import Link from "next/link";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.links}>
          <Link href="/">Contact</Link>
          <Link href="/social">Social media</Link>
          <Link href="/email">Email</Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
