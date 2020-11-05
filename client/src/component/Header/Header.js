import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div className={styles.header}>
			<a className={styles.logo}>Project Planner</a>
			<ul className={styles.navLinks}>
				<li className={styles.navItem}>
					<NavLink
						to='/Projects'
						activeClassName='selected'
						activeStyle={{
							fontWeight: "bold",
							borderBottom: "3px yellow solid",
						}}
					>
						Projects
					</NavLink>
				</li>
				<li className={styles.navItem}>
					<NavLink to='/About'>About</NavLink>
				</li>
				<li className={styles.navItem}>
					<NavLink to='/Account'>Account</NavLink>
				</li>
			</ul>
		</div>
	);
}
