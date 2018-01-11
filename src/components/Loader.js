// hello-world.jsx

import React, { Component } from 'react';


export default class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
			<div className="loader">
				<div className="loader-spinner">
					<div className="loader-component">
						<div className="half-circle"></div>
					</div>
					<div className="loader-component">
						<div className="half-circle"></div>
					</div>
				</div>
			</div>
		</div>
    )
  }
}
