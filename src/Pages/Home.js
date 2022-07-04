import React from 'react';
import { useQuery } from 'react-query'
import art from '../Assests/Images/image1.png'
import art2 from '../Assests/Images/image2.png'
import art3 from '../Assests/Images/image3.png'
import Loader from '../Components/Loader';

const Home = () => {

    const {  data, isLoading} = useQuery('classdata', () =>
        fetch('classData.json').then(res =>
            res.json()
        )
    )
    if(isLoading){
      return <Loader></Loader>
    }
    console.log(data)
    return (
        <div>
            {
                data.map(d =>
                    <div key={d.id}>
                        <h1>{d.title}</h1>
                        <h3>{d.classeType}</h3>
                        <div className='md:grid gap-10 grid-cols-2'>
                            <div>
                                <p>{d.description}</p>
                                <div><img src={d.teacherImage} alt="" /> <h2 className='text-[#503DD4]'>{d.teacherName}</h2></div>
                                <p>{d.teacherReview}</p>
                                <p>{d.classReview}</p>
                                <p>{d.completedStudent}</p>
                                <div>
                                    <button type="button" class="inline-block px-6 py-2.5 bg-[#503DD4] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Secondary</button>
                                    <p className='text-[#503DD4]'>Save</p>
                                    <p className='text-[#503DD4]'>Share</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='mr-3'>
                                    <img className='w-full' src={art} alt="" />
                                </div>
                                <div>
                                    <img className='w-full mb-1 pb-2' src={art2} alt="" />
                                    <img className='w-full' src={art3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Home;