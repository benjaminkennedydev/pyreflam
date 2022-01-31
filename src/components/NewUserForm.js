import React, { Component } from 'react';

export default class NewUserForm extends Component  {

    render() {
        const { handleChange, handleSubmit, user } = this.props;

        return (
            <div className="new-user-form">
                <form onSubmit={handleSubmit}>
                    <div className="form__group field">
                        <input
                            type="input" 
                            name="handle"
                            className="form__field"
                            value={user.handle || ''}
                            onChange={handleChange}
                            id="handle"
                        />
                        <label htmlFor="handle" className="form__label">
                            Handle
                        </label>
                    </div>
                
                    <div className="form__group field">
                        <input 
                            type="text" 
                            name="first_name"
                            className="form__field"
                            value={user.first_name || ''}
                            onChange={handleChange}
                            id="first_name"
                        />
                        <label htmlFor="first_name" className="form__label">
                            First Name
                        </label>
                    </div>

                    <div className="form__group field">
                        <input 
                            type="text" 
                            name="last_name"
                            className="form__field"
                            value={user.last_name || ''}
                            onChange={handleChange}
                            id="last_name"
                        />
                        <label htmlFor="last_name" className="form__label">
                            Last Name
                        </label>
                    </div>

                    <div className="form__group field">
                        <input 
                            type="text" 
                            name="location"
                            className="form__field"
                            value={user.location || ''}
                            onChange={handleChange}
                            id="location"
                        />
                        <label htmlFor="location" className="form__label">
                            Location
                        </label>
                    </div>
                    
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}