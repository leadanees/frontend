import React from 'react'
import Slider from 'react-slick';
import img01 from '../../assets/images/ava-1.jpg';
import img02 from '../../assets/images/ava-2.jpg';
import img03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

    const setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots:true,
                },
            },

        ]
    }
    return (
        <Slider {...setting}>
            <div className="testimonial py-4 px-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat enim modi amet perspiciatis nihil illo pariatur et? Quasi explicabo tenetur nesciunt impedit a  laboriosam sit nulla?</p>
                <div className='d-flex align-items-center'>
                    <img src={img01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3 m-2'>John Deo</h5>
                        <p className='mb-0 mt-0 m-2'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-3 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat enim modi amet perspiciatis nihil illo pariatur et? Quasi explicabo tenetur nesciunt impedit a doloribus praesentium accusamus, laboriosam sit nulla?</p>
                <div className='d-flex align-items-center'>
                    <img src={img02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3 m-2'>Anne merie</h5>
                        <p className='mb-0 mt-0 m-2'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-3 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat enim modi amet perspiciatis nihil illo pariatur et? Quasi explicabo tenetur nesciunt impedit a doloribus praesentium accusamus, laboriosam sit nulla?</p>
                <div className='d-flex align-items-center'>
                    <img src={img03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3 m-2'>Leo son</h5>
                        <p className='mb-0 mt-0 m-2'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat enim modi amet perspiciatis nihil illo pariatur et? Quasi explicabo tenetur nesciunt impedit a  laboriosam sit nulla?</p>
                <div className='d-flex align-items-center'>
                    <img src={img01} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3 m-2'>John Deo</h5>
                        <p className='mb-0 mt-0 m-2'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-3 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat enim modi amet perspiciatis nihil illo pariatur et? Quasi explicabo tenetur nesciunt impedit a doloribus praesentium accusamus, laboriosam sit nulla?</p>
                <div className='d-flex align-items-center'>
                    <img src={img02} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3 m-2'>Anne merie</h5>
                        <p className='mb-0 mt-0 m-2'>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-3 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est repellat enim modi amet perspiciatis nihil illo pariatur et? Quasi explicabo tenetur nesciunt impedit a doloribus praesentium accusamus, laboriosam sit nulla?</p>
                <div className='d-flex align-items-center'>
                    <img src={img03} className='w-25 h-25 rounded-2' alt="" />
                    <div>
                        <h5 className='mb-0 mt-3 m-2'>Leo son</h5>
                        <p className='mb-0 mt-0 m-2'>Customer</p>
                    </div>
                </div>
            </div>
            
        </Slider>
  )
}

export default Testimonials