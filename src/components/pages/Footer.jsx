import React from 'react';
import FooterBg from '../../assets/footerbg.png'
import { GoHorizontalRule } from 'react-icons/go';
import { AiOutlineFacebook } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { LiaPinterestSquare, LiaTwitterSquare } from 'react-icons/lia';
import footerNews1 from '../../assets/footer-news1.jpg'
import footerNews2 from '../../assets/footer-news2.jpg'

const Footer = () => {
    return (
        <div className='max-w-full h-[540px] bg-[#191919] overflow-hidden'>
            <img
            className='object-cover opacity-20 absolute right-0 w-3/5 h-[540px]'
             src={FooterBg} alt="" />
             <div className='w-3/4 h-[440px] mx-auto mt-[60px]'>
                <h2 className='text-4xl font-semibold font-primaryFont text-white'>Got A <span className='text-primaryColor'>Project</span> To Do ?</h2>
                <div className='flex items-center mt-3'>
                    <GoHorizontalRule className='text-6xl font-light' />
                    <p className='text-2xl'>contactridoy@gmail.com</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-5'>
                    <div>
                        <h4 className='text-2xl font-secondaryFont font-semibold mb-3'>AR</h4>
                        <p>Lorem ipsum dolor amet, consectetur sell adipis elit phase nibh ellentes</p>
                        {/* social media logo */}
                        <div className='mt-6 flex gap-x-3'>
                            <AiOutlineFacebook className='text-4xl hover:text-primaryColor hover:text-5xl' />
                            <LiaTwitterSquare className='text-4xl hover:text-primaryColor hover:text-5xl' />
                            <CiLinkedin className='text-4xl hover:text-primaryColor hover:text-5xl' />
                            <LiaPinterestSquare className='text-4xl hover:text-primaryColor hover:text-5xl' />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-semibold mb-3'>Useful Links</h4>
                        <li className='text-lg list-none mb-2 text-gray-300'>About Us</li>
                        <li className='text-lg list-none mb-2 text-gray-300'>Our Team</li>
                        <li className='text-lg list-none mb-2 text-gray-300'>Recent News</li>
                        <li className='text-lg list-none mb-2 text-gray-300'>Project</li>
                        <li className='text-lg list-none text-gray-300'>Our All Services</li>
                    </div>
                    <div>
                        <h4 className='text-2xl font-semibold'>Latest News</h4>
                        <div className='mt-3 mb-8 flex gap-x-2'>
                            <img className='w-[80px] h-[80px] mt-2' src={footerNews1} alt="" />
                            <div className=''>
                                <p className='text-gray-300 mb-2'>October 19, 2022</p>
                                <p className='text-gray-300 mb-2'>Market research helps</p>
                                <p className='text-gray-300'>businesses understand</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2'>
                            <img className='w-[80px] h-[80px] mt-2' src={footerNews2} alt="" />
                            <div>
                                <p className='text-gray-300 mb-2'>October 19, 2022</p>
                                <p className='text-gray-300 mb-2'>Common types of</p>
                                <p className='text-gray-300'>businesses Structure</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-semibold mb-3'>Contact</h4>
                        <p className='text-gray-300 mb-3'>ridoy@example.com</p>
                        <p className='text-gray-300'>3891 Renchview Mr.Ridoy H.
                            <br />
                            Bangladesh Dhaka 1210
                        </p>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Footer;