import pro from '../assets/image/pro.png'
import quis from '../assets/image/quis.png'
import lorem from '../assets/image/lorem.png'
import map from '../assets/image/map.png'
import linet from '../assets/image/linet.png'
import link from '../assets/image/link.png'
import twitter from '../assets/image/twitter.png'
const Secunder = () => {
    return (
        <div>
            <div className='flex justify-center gap-[70px] bg-[#EDFEFF] w-full h-fit mt-[50px]'>
                <div className='bg-white w-[359px] h-[533px] grid justify-center mt-[40px]'>
                    <div className='mt-8'><img src={pro} alt="" /></div>
                    <div className='font-bold text-[16px] font-plus'>Excepteur sint occaecat cupidatat <br />non proident</div>
                    <div className='grid mt-3'>
                        <span className='text-[14px] text-[#676767] font-plus'>Nemo enim ipsam voluptatem quia <br />voluptas sit aspernatur aut odit aut fugit, <br />sed quia consequuntur magni dolores eos</span> 
                        <span className='text-[14px] text-[#676767] font-plus mt-4'>Neque porro quisquam est, qui dolorem <br />ipsum quia dolor sit amet, consectetur,<br />adipisci veli</span>
                    </div>
                    <div className='mt-6'>
                        <button className='bg-[#0CBBC7] text-white px-[20px] py-[10px] font-bold text-[14px] font-plus'>Read more</button>
                    </div>
                </div>

                <div className='bg-white w-[359px] h-[533px] grid justify-center mt-[40px]'>
                    <div className='mt-8'><img src={quis} alt="" /></div>
                    <div className='font-bold text-[16px] font-plus'>Quis nostrum exercitationem ullam <br />corporis suscipit laboriosam</div>
                    <div className='grid mt-3'>
                   <span className='text-[14px] text-[#676767] font-plus'>Ut enim ad minima veniam, quis nostrum  <br />exercitationem ullam corporis suscipit <br />laboriosam.</span> 
                   <span className='text-[14px] text-[#676767] mt-4 font-plus'>nisi ut aliquid ex ea commodi consequatur <br />autem vel eum iure reprehenderit</span>
                    </div>
                    <div className='mt-6'>
                        <button className='bg-[#0CBBC7] text-white px-[20px] py-[10px] font-bold text-[14px] font-plus'>Read more</button>
                    </div>
                </div>

                <div className='bg-white w-[359px] h-[533px] grid justify-center mt-[40px]'>
                    <div className='mt-8'><img src={lorem} alt="" /></div>
                    <div className='font-bold text-[16px] font-plus'>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit.</div>
                    <div className='grid mt-3'>
                        <span className='text-[14px] text-[#676767] font-plus'>Coluptatem accusantium doloremque <br />laudantium, totam rem aperiam</span> 
                        <span className='text-[14px] text-[#676767] font-plus mt-4'>Aaque ipsa quae ab illo inventore veritatis et <br />quasi architecto beatae vitae dicta sunt <br />explicabo.</span>
                    </div>

                     <div className='mt-6'>
                        <button className='bg-[#0CBBC7] text-white px-[20px] py-[10px] font-bold text-[14px] font-plus'>Read more</button>
                    </div>

                </div>
            </div>

            <div className='bg-[#232323]'>
                <div className='flex justify-center gap-[330px]'>
                    <div className='w-[155px]  h-[95px] text-white mt-[100px] font-plus'style={{ backgroundImage: `url(${map})` }}>
                        Made with lots of ❤️ in San Francisco
                    </div>

                    <div className='flex gap-[120px] mt-[30px]'>
                        <div>
                            <div className='text-[18px] text-white font-bold font-plus'>Products</div>
                            <div className='grid gap-6 mt-7'>
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Delta</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Sigma</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Zeta</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Alpha</span>
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Acumen</span> 
                            </div>
                        </div>

                        <div>
                            <div className='text-[18px] text-white font-bold font-plus'>Resources</div>
                            <div className='grid gap-6 mt-7'>
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Help</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Training Videos</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Webinars</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Request a Demo</span> 
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Create Surveys</span>
                                <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Quiz Maker</span>
                            </div>
                        </div>

                        <div>
                            <div className='text-[18px] text-white font-bold'>Company</div>
                            <div className='grid gap-6 mt-7'>
                               <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'> About Us</span> 
                               <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Careers </span> 
                               <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Team</span> 
                               <span className='text-[#7C7C7C] text-[14px] font-medium font-plus'>Contact Us</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[60px] flex justify-center'>
                    <img src={linet} alt="" />
                </div>
                <div className='flex justify-around mt-5 pb-5'>                
                    <div className='font-plus text-[#9B9B9B] text-[12px] font-medium'>
                       Copyright 2022 Circle. All rights reserved.
                    </div>

                    <div className='flex gap-6'>
                        <img src={link} alt="" />
                        <img src={twitter} alt="" />
                    </div>

                    <div className='text-[#9B9B9B] text-[12px] font-medium flex gap-7 font-plus'>
                        Privacy Policy     |     Data & Security     |     Terms of Service     |     Data & Security
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Secunder