import create from '../assets/image/create.png'
import distribute from '../assets/image/distribute.png'
import collect from '../assets/image/collect.png'
import analyze from '../assets/image/analyze.png'
import screen from '../assets/image/screen.png'
import vide from '../assets/image/vide.png'
import paypal from '../assets/image/paypal.png'
import left from '../assets/image/left.png'
import right from '../assets/image/right.png'
import pause from '../assets/image/pause.png'
import line from '../assets/image/line.png'
import soln from '../assets/image/soln.png'
const Sectwo = () => {
    return (
        <div>
            <div className="flex justify-center mt-[90px]">
                <button className="bg-[#EFFEFF]  text-[#0CBBC7] rounded-sm p-2 text-[8px] font-bold font-plus">BUILT FOR PEOPLE</button>
            </div>

            <div className="flex justify-center gap-2 mt-5">
                <span className="text-[28px] font-bold font-plus">Easy</span> <span className="text-[28px] font-plus">for beginners.</span> 
                <span className="font-plus text-[28px] font-bold">Powerful</span> <span className="font-plus text-[28px]">for experts.</span>
            </div>
            <div className='flex justify-center gap-[125px] mt-[90px]'>
                <div>
                    <div className='flex justify-center gap-2 '>
                        <img className='w-fit' src={create} alt="" />
                        <span className='text-[#0CBBC7] text-[16px] font-semibold font-plus'>Create</span>

                    </div>
                    {/* Horizontal */}
                    <div className="w-[236px] h-[3px] bg-[#0CBBC7] my-4"></div>
                </div>

                <div className='flex gap-2'>
                    <img className='w-[27px] h-fit' src={distribute} alt="" />
                    <span className='text-[#676767] text-[16px] font-plus'>Distribute</span>
                </div>

                <div className='flex gap-2'>
                    <img className='w-[20px] h-[20px]' src={collect} alt="" />
                    <span className='text-[#676767] text-[16px] font-plus'>Collect</span>
                </div>

                <div className='flex gap-2'>
                    <img className='w-[28px] h-[24px]' src={analyze} alt="" />

                    <span className='text-[#676767] text-[16px] font-plus'>Analyze</span>
                </div>
            </div>

            <div className='flex bg-[#EDFEFF] justify-center gap-[80px] p-9'>
                <div className='grid '>
                    <span className='text-[28px] font-semibold font-plus'>Create</span>
                    <span className='text-[16px] font-bold font-plus'>Advanced research software</span>
                    <span className='text-[#676767] text-[16px] font-plus'>
                        Ask the right questions and get the answers you <br />need with the most secure and collaborative
                        <br />survey platform on the market featuring <br />powerful logic,
                        sophisticated analytics, and <br />built-in automation and integration.
                    </span>
                    <div>
                        <button className="font-plus broder-1px bg-[#0CBBC7] px-[20px] py-[14px] text-center mt-4 text-white">Get started for free</button>
                    </div>
                </div>
                <div className='mt-5'>
                    <img src={screen} alt="" />
                </div>
            </div>


            <div className='flex justify-center gap-[90px] relative mt-[60px]'>
                <div className='mt-[90px] '>
                    <div className='w-[68px] h-[10] bg-[#EFFEFF] text-[8px] font-plus font-bold text-[#0CBBC7]'>
                        TESTIMONIALS
                    </div>
                    <div className='grid'>
                        <span className='text-[28px] font-plus'>See how <br />customers</span>
                        <span className='font-bold text-[28px] font-plus'>drive impact</span>
                    </div>

                    <button className="broder-1px bg-[#0CBBC7] px-[20px] py-[8px] text-center font-plus mt-4 text-[14px] font-bold text-white">
                        See case studies
                    </button>
                </div>
                <div className='relative'>
                    <div className='w-[358px] h-[400px] bg-center flex justify-center' style={{ backgroundImage: `url(${vide})` }}>
                    <img className='w-[70px] h-[70px] mt-[180px]' src={pause} alt="" />

                </div>
                <div className='bg-[#EDFEFF] w-[358px] h-[239px] mt-[100px] pl-6 pt-6 absolute z-9 left-[270px] top-[65px]'>
                        <img src={paypal} alt="" />
                        <div className='text-[16px] text-[#676767] font-plus'>
                            "I used to have a bunch of different  <br /> tools I had to pay for, with Circle you <br /> get everything in one bundle."
                        </div>
                        <div className='grid mt-5'>
                            <span className='text-[14px] font-bold font-plus'>Michel Dedrick</span> 
                            <span className='font-plus text-[14px]'>Senior Conversion Optimizer</span>
                        </div>
                    </div>
                </div>
                
                <div className=''>
                    <div className='flex gap-2 ml-[120px]'>
                        <img src={left} alt="" />
                        <img src={right} alt="" />
                    </div>

                    
                </div>
            </div>

            <div className='flex justify-center mt-[80px] '>

                <img src={line} alt="" />
            </div>

            <div className='flex justify-center gap-[120px] mt-[98px]'>
                <div className='grid mt-[90px]'>
                    <div>
                        <div>
                            <div>
                                <span className='text-[28px] font-plus'>Looking for a</span> <span className='text-[28px] font-bold font-plus'>solution</span>
                                <br /><span className='text-[28px] font-plus'>for your business?</span>
                            </div>
                            <div>
                                <span className='text-[16px] text-[#676767] font-plus'> Check out Sogolytics enterprise feedback and <br />experience management platform.</span>

                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <button className="font-plus border-none bg-[#0CBBC7] px-[20px] py-[10px] text-center mt-4 text-white">Learn more</button>
                            </div>
                            <div>
                                <button className="font-plus border-2 border-[#0CBBC7]  bg-white px-[20px] py-[10px] text-center mt-4 text-[#0CBBC7]">Schedule a consultation</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={soln} alt="" />
                </div>

            </div>
            
            <div className='flex justify-center mt-[80px] '>
                            <img src={line} alt="" />
            </div>

            <div className='flex justify-center mt-[60px]'>
                <button className="  bg-[#EFFEFF] px-[10px] py-[6px] text-center text-[8px] font-bold  text-[#0CBBC7] font-plus">Resources</button>
            </div>

            <div className='flex gap-2 mt-3 justify-center'>
                <span className='text-[28px] font-bold font-plus'>Stay</span>
                <span className='text-[28px] font-plus'>in the</span>
                <span className='text-[28px] font-bold font-plus'>know</span> 
            </div>
            
        </div>
    )

}
export default Sectwo