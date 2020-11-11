import styles from "../../styles/Home.module.css"

export default function Home(props) {

    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                <i className="far fa-address-card d-inline-block align-center"></i>&nbsp;
                Insurance Info
                </h1>

                <p className={styles.description}>
                    Website to check insurance info on Items
        </p>

            </main>
        </div>
    )
};
