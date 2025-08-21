import ground from '../assets/image/ground.png'
import arrow from '../assets/image/arrow.png'
import Mask from '../assets/image/Mask.png'
const Hero  = () => {
    return (
        <div className='bg-[#e3fafc] mt-4 w-full'style={{backgroundImage: `url(${ground})`}}>
            <div className='font-bold text-[34px] pt-[40px] text-center font-plus'>
                A powerful online engagement tool <br />that's intuitive and simple to use.
            </div>
            <div className='text-center text-[14px] text-[#878787] mt-6 font-plus'>
                With stellar one-click reports and unmatched support, see how <br />Circle will make a difference in your business.
            </div>
            <div className='flex justify-center mt-6'>
                <button className='broder-1px bg-[#0CBBC7] px-[20px] py-[14px] text-center text-white flex gap-1 font-plus'>Get started free
                    <img src={arrow} alt="" />
                </button>
            </div>

            <div className='flex justify-center mt-[50px]'>
                <img src={Mask} alt="" />
            </div>
        </div>
    )
}
export default Hero