import React from "react";
import "../index.css";

class ProductsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	componentDidMount() {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
				});
			});
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>
				</div>
			);

		return (
			<div className="products">
				<h1>Our Products</h1>
				<p>Get your favourite products at best price possible</p>
				<div className="container">
					{items.map((item) => (
						<div className="item">
							<ol key={item.id}>
								<div>
									<h3>{item.title}</h3>
								</div>
								<div>
                                    <img src={item.image} />
								</div>
                                <div>
									Price: ${item.price}
								</div>
								<div>
									Description: {item.description}
								</div>
							</ol>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ProductsPage;
