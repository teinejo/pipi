import {Carousel, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'

function MyCarousel(props) {
    return(
        <Container fluid className='google'>
            <Carousel data-interval="20">
                <Carousel.Item>
                    <img
                        height={900}
                        width={680}
                        className="d-block w-100"
                        src={props.src1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>here will be our new games </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={900}
                        width={680}
                        className="d-block w-100"
                        src={props.src2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>here will be our new games </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={900}
                        width={680}
                        className="d-block w-100"
                        src={props.src3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>here will be our new games </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default MyCarousel;