import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import List from './List';


function App() {
	return (
		<React.Fragment>

			<Header title="R-TODO"/>
			<List/>
			<Footer/>

		</React.Fragment>
	);
}

export default App;