import React, { Component } from 'react'
import { AiOutlineTwitter} from 'react-icons/ai';
import styles from "./index.module.css"

export default class index extends Component {
    render() {
        return (
            <div className={styles.footer}>
            <p className={styles.text}>Show us some love on <span className={styles.footer__icon__wrapper}><AiOutlineTwitter className={styles.footer__icon}/></span></p>
        </div>
        )
    }
}
