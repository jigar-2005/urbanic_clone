import { Carousel } from 'react-bootstrap';


function CarouselSlider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://img4.urbanic.com/3d3f8c122b5c4f5aaaf0cf8f3f8a3f93" alt="First slide" style={{ width: "500px", height:"450px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://img4.urbanic.com/6e9b62e89d8448b6a20e3205d9c37b0f" alt="Second slide" style={{ width: "500px", height:"450px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://img4.urbanic.com/1da7dd8104df4b00bfc58ec43308416f" alt="Third slide" style={{ width: "500px", height:"450px" }} />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselSlider;
