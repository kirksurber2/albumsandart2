

export default function ProductCard(props) {

    return (
        <div className="productCard">
            <div className="productCardImage">

            </div>
            <div className="productCardInfo">
                <div className="productName">
                    <h4>{props.name}Product Name</h4>
                </div>
                <div className="productName">
                    <h4>{props.rating} 4 stars and 1 review</h4>
                </div>
                <div className="productName">
                    <h4>{props.price}$499</h4>
                </div>

            </div>
        </div>
    )
}