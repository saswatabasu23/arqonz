import { Link } from "react-router-dom";
import './AuctionCard.css';
import { Card } from 'react-bootstrap';

function AuctionCard (data) {
    const newTo = {
        pathname:"/auctionProductPage/"+data.data.tokenId
    }
    return (
        <Link to={newTo} className="card-link">
            <Card id="product-card">
                <Card.Img className="rounded card-img" variant="top" src={data.data.image} alr=""/>
                <Card.Body>
                  <Card.Title className="font-weight-bold">{data.data.name}</Card.Title>
                  <Card.Text>
                      ⚡Highest Bid
                      <span id="product-price"> {data.data.price} wETH</span>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default AuctionCard;