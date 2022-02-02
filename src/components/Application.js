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

  	/**
  	 * This function is passed to the child NewUserForm component.  
  	 * Whenever an input in that component fires a change event, 
  	 * this method will be invoked, and the state of the parent 
  	 * component will be updated with the current input.
  	 */
	handleChange(event) {
		const { name, value } = event.target;
		this.setState((state, props) => ({
			user: {
				...this.state.user,
				[name]: value
			}
		}));
  	}


  	/**
  	 * When a user clicks submit, this prevents the defeault event
  	 * lifecycle, and instead fires a synthetic event (so React can
  	 * trigger lifecycles events, updates, etc).
  	 * 
  	 * Afterwards, we await the creation of a new user, and we
  	 * refectch the list.  One optimization would be to return the 
  	 * list of users from the server after a successful insert so
  	 * we can reduce the number of roundtrips the application makes
  	 * to the server
  	 */
  	async handleSubmit(event) {
		event.preventDefault();
		this.setState({
	  		loading: true,
		});
		
		await addUser({...this.state.user});
		this.getUserList();
  	}


  	/**
  	 * Gets a list of users, also resetting the current user.
  	 */ 
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


  	/**
  	 * When the component mounts, fetch the user.  This is a part
  	 * of the React lifecycle.
  	 */ 
  	componentDidMount() {
  		this.getUserList();
  	}


  	/**
  	 * Render the child components, passing in all of the props.
  	 * 
  	 * One of the main paradigms in current client side development is:
  	 * 
  	 * Props in, Actions out
  	 * 
  	 * This keeps the flow of information in your application consistent,
  	 * which assists in testing, debugging, and reusability.
  	 */ 
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