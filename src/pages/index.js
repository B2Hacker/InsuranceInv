import styles from "../../styles/Home.module.css"

export default function Home(props) {

    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Insurance Info
        </h1>

                <p className={styles.description}>
                    Website to check on Insurance Info
        </p>

            </main>

            <footer className={styles.footer}>
                Powered by{" "}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </footer>
        </div>
    )
};
