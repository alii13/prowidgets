import React, { Component } from "react";
import styles from "./index.module.css";
import { SwiperSlide } from "swiper/react";

export default class index extends Component {
	render() {
		return (
			<>
				<SwiperSlide>
					<div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
				</SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
				<SwiperSlide >
                <div className={styles.slide__container}>
                        <div className={styles.slide}></div>
                    </div>
                </SwiperSlide>
			</>
		);
	}
}
