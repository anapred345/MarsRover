import Image from "next/image";
import styles from "./page.module.css";
import Photos from "./photos"
import UserInputForm from "./action"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserInputForm
        />
        <Photos
        />
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
