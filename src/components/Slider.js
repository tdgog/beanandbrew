import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';

export default function (props) {
    const { setIndex } = props;
    const arrowCss = 'absolute cursor-pointer z-10 top-1/2 text-white hover:text-lsg duration-300';
    const NextArrow = ({ onClick }) => {
        return <div className={`${arrowCss} right-0`} onClick={onClick}>
            <FaArrowRight />
        </div>
    }
    const PrevArrow = ({ onClick }) => {
        return <div className={`${arrowCss} left-0`} onClick={onClick}>
            <FaArrowLeft />
        </div>
    }

    return <Slider
        infinite lazyLoad centerMode
        speed={300}
        slidesToShow={3}
        centerPadding={0}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        beforeChange={(_, next) => setIndex(next)}
    >
        {props.children}
    </Slider>
}