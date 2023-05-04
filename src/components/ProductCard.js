import { BrowserRouter as Router, Link } from "react-router-dom";
import './ProductCard.css';
import { Card } from 'react-bootstrap';

function ProductCard (data) {
    const newTo = {
        pathname:"/marketProductPage/"+data.data.tokenId
    }
    return (
        <Link to={newTo} className="card-link" data={data}>
            <Card id="product-card">
                <Card.Img className="rounded card-img" variant="top" src={data.data.image} alr=""/>
                <Card.Body>
                  <Card.Title className="font-weight-bold">{data.data.name}</Card.Title>
                  <Card.Text>
                      ⚡Price
                      <span id="product-price"> {data.data.price} wETH</span>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default ProductCard;