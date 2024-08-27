
import { useState } from "react"
import { Button, Card } from "react-bootstrap"



const Product = (props) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <div className="col-12 col-md-4 col-lg-3 mb-4">
                <Card>
                    <div className="card-img">
                        <Card.Img variant="top" src={props.image} />
                        <div className="category">Category: {props.category} </div>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            {props.title.length > 40
                                ? `${props.title.slice(0, 40)}...`
                                : props.title}
                        </Card.Title>
                        <Card.Text>
                            {readMore
                                ? props.description //true
                                : `${props.description.substring(0, 50)}...`}
                            <button onClick={() => { setReadMore(!readMore) }}>
                                {readMore ? 'Show Less' : 'Read More'}
                            </button>

                        </Card.Text>
                        <Button variant="danger" className="m-0">{props.price} TL</Button>
                        <div className="rating"> Rating: {props.rating.rate}</div>

                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Product