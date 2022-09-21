import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./work.module.css"


export default function Work() {
    return <div className={styles.work}>
        <Header />
        <div className="body">
            <h1>Hello work!</h1>
        </div>
        <Footer />
    </div>
}