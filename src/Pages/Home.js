import React, { useEffect } from 'react';
import { useQuery } from 'react-query'
import art from '../Assests/Images/image1.png'
import art2 from '../Assests/Images/image2.png'
import art3 from '../Assests/Images/image3.png'
import Loader from '../Components/Loader';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {

    useEffect( () => {
        AOS.init({
            duration: 1000,
        });
    }, [])

    const { data, isLoading } = useQuery('classdata', () =>
        fetch('classData.json').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='p-10'>
            {
                data.map(d =>
                    <div key={d.id}>
                        <h1 className='text-5xl font-bold leading-tight'>{d.title}</h1>
                        <h3 className='text-lg font-semibold text-[#808080] mr-2 inline-flex items-center'>{d.classeType} <span className='ml-1'><FaRegQuestionCircle /></span></h3>
                        <div className='lg:grid gap-10 grid-cols-2 mt-16'>
                            <div className='' data-aos="fade-right">
                                <p className='text-lg leading-normal'>{d.description}</p>
                                <div className='flex items-center my-5'><img className="rounded-full w-12 mr-3" src={d.teacherImage} alt="" /> <h2 className='text-lg font-semibold text-[#503DD4]'>{d.teacherName}</h2></div>
                                <p className='text-sm text-[#808080] inline-flex items-center'> <span className='text-[#F9C847] inline-flex mr-1'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </span> {d.teacherReview} Total reviews for this teacher.</p>
                                <p className='text-sm text-[#808080] my-2'> <span className='text-[#F9C847] inline-flex mr-1'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </span> {d.classReview} Total reviews for this class.</p>
                                <p className='text-xl'>Completed by {d.completedStudent} Learners.</p>
                                <div className='flex items-center my-8'>
                                    <button type="button" className="px-6 py-3.5 text-lg bg-[#503DD4] text-white font-medium leading-tight rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out tracking-wide inline-flex items-center">See Class Schedule <span><FaAngleRight /></span> </button>
                                    <button className='text-lg font-semibold text-[#503DD4] inline-flex items-center hover:text-purple-700 mx-8'> <span className='mr-1'><FaRegHeart /></span> Save</button>
                                    <button className='text-lg font-semibold text-[#503DD4] inline-flex items-center hover:text-purple-700'> <span className='mr-1'> <RiShareForwardLine /> </span> Share</button>
                                </div>
                            </div>
                            <div className='md:flex object-cover' >
                                <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs mr-2" data-aos="zoom-in">
                                    <img src={art} className="max-w-xs hover:scale-110 transition duration-300 ease-in-out h-full" alt="Louvre" />
                                </div>
                                <div>
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover mb-2" data-aos="zoom-in">
                                        <img src={art2} className=" hover:scale-110 transition duration-300 ease-in-out h-full w-full" alt="Louvre" />
                                    </div>
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover" data-aos="zoom-in">
                                        <img src={art3} className=" hover:scale-110 transition duration-300 ease-in-out h-full w-full" alt="Louvre" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Home;