import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import templeVector from '../../assets/images/hindu-temple.png';
import CheckoutForm from './CheckoutForm';

export default class Donate extends React.Component {
	state = {
		shouldShowHonoreeFields: false
	};

	toggleHonoreeFields = event => {
		event.preventDefault();
		this.setState({
			shouldShowHonoreeFields: !this.state.shouldShowHonoreeFields
		});
	};

	render() {
		const honoreeFieldsClassName = `collapse ${this.state.shouldShowHonoreeFields ? ' show' : ''}`;

		return (
			<StripeProvider apiKey={process.env.REACT_APP_STRIPE_APIKEY}>
				<div className="row my-5">
					<div className="col-md-2 px-3 d-md-none d-lg-block">
						<img src={templeVector} className="img-fluid temple-logo mx-auto my-3 d-block" alt="logo" />
					</div>
					<div className="col-md-4 px-3">
						<h1 className="font-weight-bold">Help us do more</h1>
						<p>
							We'll get right to the point: we're asking you to help support Khan Academy. We're a
							nonprofit that relies on support from people like you. If everyone reading this gives $10
							monthly, Khan Academy can continue to thrive for years. Please help keep Khan Academy free,
							for anyone, anywhere forever.
						</p>
					</div>
					<div className="col-md-6 px-3">
						<Elements>
							<CheckoutForm
								honoreeFieldsClassName={honoreeFieldsClassName}
								toggleHonoreeFields={this.toggleHonoreeFields}
								shouldShowHonoreeFields={this.state.shouldShowHonoreeFields}
							/>
						</Elements>
						<p className="disclaimer">By donating, you agree to our terms of service and privacy policy.</p>
					</div>
				</div>
			</StripeProvider>
		);
	}
}
