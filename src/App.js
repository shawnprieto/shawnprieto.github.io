import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';
//imports components which are used on this page

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	performSearch = (query = 'sun') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=9&query=${query}&client_id=3f5a5919d43a6aa936eb5492c306d9d8648daf7d1bbc9858431c57e188516609`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">

				<div className="inner">
                <h1 className="main-title"> Photograph-E </h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">

					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}
