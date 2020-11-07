import styles from '../styles/Home.module.css';

export default function Footer() {
    return (
        <>
            <div>
                <div className={styles.footer}>
                    <h5 className="text-light">&copy;{new Date().getFullYear()} Insurance Information</h5>
                </div>
            </div>
        </>
    );
}

