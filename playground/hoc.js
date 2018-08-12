// HOC - A component that renders another component (like a wrapper)
// Used for resuability
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>{props.info}</p>
	</div>
);

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAuthenticated ? <WrappedComponent {...props} /> : <p>404 not found!</p> }
		</div>
	);
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info='Hello Higher Order Components'/>, document.getElementById('app'));