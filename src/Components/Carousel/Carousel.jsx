import {Carousel, CarouselItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'

function MyCarousel() {
    return(
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://u.kanobu.ru/longreads/2020/1/28/9510c6c8-2b4f-44a5-bbcb-78e997a70e50.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://u.kanobu.ru/longreads/2020/1/28/9510c6c8-2b4f-44a5-bbcb-78e997a70e50.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://u.kanobu.ru/longreads/2020/1/28/9510c6c8-2b4f-44a5-bbcb-78e997a70e50.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MyCarousel;