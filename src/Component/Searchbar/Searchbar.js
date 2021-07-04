import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';



class Searchbar extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  };

  state = {
    query: '',
  };

  notify = () =>
    toast.info('fill in the field', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
   
    query.trim() ? this.props.onSubmitForm(query) : this.notify();

    this.resetState();
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
    
  };

  resetState = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="search"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
