import React, { Component } from 'react'
import Title from './Title'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <Title title='Sign up to receive news and updates' />
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <div>

                            <label htmlFor='name'>
                                First Name *
                <input type='text' name='name' id='name' value={this.state.value} onChange={this.handleChange} required />
                            </label>

                            <label htmlFor='surname'>
                                Surname *
                <input type='text' name='surname' id='surname' required />
                            </label>
                        </div>
                        <div>
                            <label htmlFor='email'>
                                Email *
                <input type='email' name='email' id='email' required />
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
