import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.footerOrigin}>
                    <p>Brazil 97</p>
                </div>
                <div className={styles.socialNetwork}>
                    <p>Github</p>
                    <p>Linkedin</p>
                    <p>Gmail</p>
                </div>
            </div>
        </div>
    )
}