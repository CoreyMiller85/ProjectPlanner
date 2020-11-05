import "./App.css";
import Form from "./component/Form";
import { Component } from "react";
import MainList from "./component/MainList";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
class App extends Component {
	state = {
		formValue: "",
		tasks: [],
	};

	async componentDidMount() {
		const tasks = await axios.get("http://localhost:3001/task");
		const data = tasks.data.data;
		this.setState({
			tasks: data,
		});
	}

	handleFormInput = (e) => {
		this.setState({
			formValue: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const newList = [...this.state.tasks];
		newList.push(this.state.formValue);
		console.log(newList);
		this.setState({
			formValue: "",
			tasks: newList,
		});
	};
	render() {
		return (
			<Router>
				<div className='App'>
					<Header />

					<Route path='/'>
						<MainList list={this.state.tasks} />
					</Route>
				</div>
			</Router>
		);
	}
}

export default App;

{
	/* <Form
	formValue={this.state.formValue}
	handleFormInput={(e) => this.handleFormInput(e)}
	handleSubmit={(e) => this.handleSubmit(e)}
/> */
}
