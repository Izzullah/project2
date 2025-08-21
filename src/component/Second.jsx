import capegn from '../assets/image/capegn.png'
import yama from '../assets/image/yama.png'
import boicoin from '../assets/image/boicoin.png'
import dell from '../assets/image/dell.png'
import ckgp from '../assets/image/ckgp.png'
import shell from '../assets/image/shell.png'
import Vector from '../assets/image/Vector.png'
import line from '../assets/image/line.png'
const Second = () => {
    return (
        <div>
            <div className="flex justify-center mt-[70px] text-[10px]">
            <button className="bg-[#EFFEFF]  text-[#0CBBC7] rounded-md p-1 font-plus">Our Customers</button>
            </div>
            <div className="flex gap-3 justify-center mt-4"> 
                <span className="text-[26px] font-plus">Trusted by </span> <span className="text-[26px] font-bold font-plus">100,000+ customers</span> 
                <span className="text-[26px] font-plus">in 90+ countries</span>
            </div>

            <div className='flex justify-center gap-[90px] mt-7'>
                <img src={capegn} alt="" />
                <img src={yama} alt="" />
                <img src={boicoin} alt="" />
                <img src={dell} alt="" />
                <img src={ckgp} alt="" />
                <img src={shell} alt="" />
            </div>

            <div className='flex justify-center gap-[90px] mt-[40px]'>
                <div className='flex text-center gap-1'>
                    <img className='w-fit h-fit mt-2' src={Vector} alt="" />
                    <div className='flex text-center gap-1 align-middle'>
                    <span className='text-[#0CBBC7] font-semibold  text-[14px] font-plus'>18281</span>
                    <span className='text-[14px] font-plus'>signed up last month</span>
                    </div>
                </div>
                <div className='flex text-center gap-1'>
                    <img className='w-fit h-fit mt-2' src={Vector} alt="" />
                    <div>
                         <span className='text-[#0CBBC7] font-semibold text-[14px] font-plus'>GDPR</span> 
                         <span className='text-[14px] font-plus'>- &</span> <span className='text-[#0CBBC7] text-[14px] font-semibold font-plus'>CCPA-ready</span>
                    </div>
                </div>
                <div className='flex text-center gap-1'>
                    <img className='w-fit h-fit mt-2' src={Vector} alt="" />
                    <div className='flex gap-1'>
                        <span className='text-[#0CBBC7] font-semibold text-[14px] font-plus'>Leader@G2</span>
                        <span className='text-[14px] font-plus'>Summer</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mt-[90px] '>
                <img src={line} alt="" />
            </div>

        </div>
    )
}
export default Second