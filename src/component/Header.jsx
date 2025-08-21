import full from '../assets/image/full.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='font-plus justify-around flex mt-5 '> 
            <div className='flex gap-6'>
                <span className='font-plus'>Features</span>
                <span className='font-plus'>Pricing</span>
                <span className='font-plus'>Testimonials</span>
                <span className='font-plus'>Resources</span>
            </div>
            
                <div>
                    <img src={full} alt="" />
                </div>

                <div className='flex gap-6'>
                    <span className='font-plus'>Company</span>
                    <span className='font-plus'>Contact</span>
                    <Link to='/login'>
                        <button className=' border-[1px] border-[#0CBBC7] px-5 py-1 rounded-md text-center font-plus '>Login</button>                    
                    </Link>
                </div>
            
        </div>
    )
}
export default Header;