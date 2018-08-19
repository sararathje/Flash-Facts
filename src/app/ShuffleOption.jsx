import React from 'react';

class ShuffleOption extends React.Component {
	propTypes: {
		getClassNames: React.PropTypes.func,
		onSelectToggleOption: React.PropTypes.func
	};

	static defaultProps: {
		getClassNames: () => ({}),
		onSelectToggleOption: () => ({})
	};

	render() {
		return (
			<div className={this.props.getClassNames}
				onClick={this.props.onSelectToggleOption}>Shuffle</div>
		);
	}
}

export default ShuffleOption;
