import React, { Component } from "react";
import LandingPage from "./components/landing-page";
import styles from "./App.module.css";
import Home from "./components/home";
import Editor from "./components/editor";
import Updateeditor from "./components/update-widget";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PreviewCarousel from "./components/preview/Carousel";
import ProctectedRoute from "./ProtectedRoute";

export default class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Router>
					<Switch>
						<Route path="/home" exact={true}>
							<ProctectedRoute>
								<Home />
							</ProctectedRoute>
						</Route>
						<Route path="/" exact={true}>
							<LandingPage />
						</Route>
						<Route path="/carousel/:carouselId" exact={true}>
							<PreviewCarousel />
						</Route>
						<Route path="/widget-editor" exact={true}>
							<ProctectedRoute>
								<Editor />
							</ProctectedRoute>
						</Route>
						<Route path="/update-widget" exact={true}>
							<ProctectedRoute>
								<Updateeditor />
							</ProctectedRoute>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
