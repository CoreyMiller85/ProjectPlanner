import React from "react";
import "./MainList.css";
import ListItem from "./ListItem";

export default function MainList(props) {
	return (
		<div className='projects'>
			<ul>
				{props.list.map((item) => {
					return (
						<div>
							<ListItem
								key={item._id}
								name={item.title}
								className='project-title'
							/>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
