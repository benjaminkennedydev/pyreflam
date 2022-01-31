import React, { Component } from 'react';
import NewUserForm from './NewUserForm';
import DataTable from './DataTable';
import { getUsers, addUser } from '../api/StoreAPI';

class Application extends Component {
 	constructor(props) {
		super(props);
		this.state = {
	  		user: {
	  			handle: '',
	  			first_name: '',
	  			last_name: '',
	  			location: ''
	  		},
	  		users: [],
	  		loading: true
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState((state, props) => ({
			user: {
				...this.state.user,
				[name]: value
			}
		}));
  	}

  	async handleSubmit(event) {
		event.preventDefault();
		this.setState({
	  		loading: true,
		});
		
		await addUser({...this.state.user});
		this.getUserList();
  	}

  	getUserList() {
  		getUsers(json => {
  			this.setState({
  				user: {
  					handle: '',
  					first_name: '',
  					last_name: '',
  					handle: ''
  				},
  				users: json,
  				loading: false
  			});
  		})
  	}


  	componentDidMount() {
  		this.getUserList();
  	}

  	render() {
  		const headings = ['Handler', 'First Name', 'Last Name', 'Location'];
  		const rows = this.state.users.map((item) => {
  			return [
  				item.handle,
  				item.first_name,
  				item.last_name,
  				item.location
  			];
  		});

		return (
	  		<div className="App">
				<h5>
					Add user:
				</h5>
		  		<NewUserForm 
		  			handleChange={this.handleChange} 
		  			handleSubmit={this.handleSubmit} 
		  			user={this.state.user} 
	  			/>
				<h5 className="gamer-list">
					Gamer List
				</h5>
		  		<DataTable 
		  			headings={headings} 
		  			rows={rows} 
		  		/>
	  		</div>
		);
  	}
}

export default Application;