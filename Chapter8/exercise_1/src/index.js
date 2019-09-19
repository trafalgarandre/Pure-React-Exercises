import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddressLabel({user}) {
	const {name, address} = user;
	return (<div>
		<p>{name}</p>
		<p>{address}</p>
	</div>);
}

const user = {
	name: "John",
	address: "Singapore"
};

ReactDOM.render(<AddressLabel user={user} />, document.getElementById('root'));
