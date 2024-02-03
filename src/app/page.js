import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p> */}

        <h1>Welcome To Schools App</h1>
        
        
        <Link href="/addSchools"><h3>Add your School</h3></Link>
        
        <Link href='/showSchools'><h3>Show All Schools</h3></Link>
        
      </div>


        

       

        
      
    </main>
  );
}
