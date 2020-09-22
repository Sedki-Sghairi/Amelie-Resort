import React from 'react';
import wedges from '../images/gif/wedges.gif';
export default function Loading() {
	return (
		<div className="loading">
			<h4>rooms data loading...</h4>
			<img src={wedges} alt="" />
		</div>
	);
}
