import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Review from './Review'



function Details() {

    const [data, setData] = useState([])
    const params = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then((res) => res.json())
                .then((data) => setData(data.restaurants))
        }
        fetchData()
    }, [])

    const details = data.find((i) => i.id == params.id)


    return (
        <div>
            <Link className="btn btn-outline-dark rounded my-3 btn-sm" to="/"> Back</Link>
            {details ? (
                <Row className="my-3">
                    <Col md={3}>
                        <Image className="img" src={details.photograph} alt={details.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h2>{details.name}</h2>
                                <p>{details.neighborhood}</p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <p>cuisine: {details.cuisine_type}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Address:{details.address}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Operating Hours:</h4>
                                <p>Monday :{details.operating_hours.Monday}</p>
                                <p>Tuesday :{details.operating_hours.Monday}</p>
                                <p>Wednesday :{details.operating_hours.Monday}</p>
                                <p>Thursday :{details.operating_hours.Monday}</p>
                                <p>Friday :{details.operating_hours.Monday}</p>
                                <p>Saturday :{details.operating_hours.Monday}</p>
                                <p>Sunday :{details.operating_hours.Monday}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Row>
                        <Card className="my-3 mx-3 p-3 rounded">
                            <Review data = {details.reviews}/>
                        </Card>
                    </Row>
                </Row>

            ) : null}
        </div>
    )
}

export default Details