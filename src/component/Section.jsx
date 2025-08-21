import joint from '../assets/image/joint.png'
import line from '../assets/image/line.png'
import leader from '../assets/image/leader.png'
import loved from '../assets/image/loved.png'
import app from '../assets/image/app.png'
import software from '../assets/image/software.png'
import champ from '../assets/image/champ.png'
import spring from '../assets/image/spring.png'


const Section = () => {
    return (
        <div>
            <div className='flex justify-center gap-[150px] mt-[60px]'>
                <div className='mt-[90px]'>
                    <button className="bg-[#EFFEFF]  text-[#0CBBC7] rounded-lg p-1 ml-2 font-plus">OUR PROMISE</button>
                    <div className='mt-4'>
                        <span className="text-[28px]">Tool</span> <span className="text-[28px] font-bold font-plus"> built for people.</span>
                    </div>
                    <div className="grid mt-2">
                        <span className="text-[16px] text-[#676767] font-plus">Whether you want to edit your Google Docs,<br /> resolve Jira issues, or collaborate over Zoom.</span>
                        <span className="text-[16px] text-[#676767] mt-4 font-plus">Circle has 100+ integrations with tools you <br /> already use and love.</span>
                    </div>
                    <div>
                        <button className="font-plus broder-1px bg-[#0CBBC7] px-[20px] py-[14px] text-center mt-8 text-white">Get started free</button>
                    </div>

                </div>

                <div className='w-fit h-fit'>
                    <img src={joint} alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-[40px] '>
                <img src={line} alt="" />
            </div>

            <div className='flex justify-center mt-[50px]'>
                <button className=' font-plus broder-1px bg-[#EFFEFF] font-bold px-[10px] py-[8px] text-center text-[8px] mt-8 text-[#0CBBC7] rounded-lg'>Awards</button>
            </div>
            <div className='flex justify-center gap-2 mt-7 '>
                <span className='text-[28px] font-plus'>An</span>  <span className='text-[28px] font-bold font-plus'>award winning</span> <span className='font-plus text-[28px]'>platform,</span> 
                <span className='text-[28px] font-bold font-plus'>loved by customers.</span>
            </div>

            <div>
                <div className='flex justify-center gap-[90px] mt-[40px]'>
                    <div className='bg-[#FFF5F3] w-[220px] h-[200px] grid'>
                        <img className='ml-[60px] mt-4'  src={leader} alt="" />
                        <span className='font-bold text-[16px] text-center font-plus'>Market leader across <br />18 categories</span>
                    </div>

                    <div className='bg-[#FFF0F9] w-[220px] h-[200px] grid'>
                        <img className='ml-[60px] mt-4' src={loved} alt="" />
                        <span className='font-bold text-[16px] text-center font-plus'>Most loved SaaS tool <br />in 2021</span>
                    </div>

                    <div className='bg-[#ECFFFF] w-[220px] h-[200px] grid'>
                        <img className='ml-[50px] mt-4' src={app} alt="" />
                        <div className='font-bold text-[16px] text-center font-plus'>Category leader in <br />    2022</div>
                    </div>
                </div>

                <div className='flex justify-center gap-[90px] mt-[40px]'>
                    <div className='bg-[#F6F4FF] w-[220px] h-[200px] grid'>
                        <img className='ml-[50px] mt-4' src={software} alt=""/>
                        <span className='font-bold text-[16px] text-center font-plus'>Most recommended <br /> tool in 2021</span>
                    </div>

                    <div className='bg-[#FFF9E7] w-[220px] h-[200px] grid'>
                        <img className='ml-[70px] mt-4' src={champ} alt="" />
                        <span className='font-bold text-[16px] text-center font-plus'>Champion in survey <br />tool 2022</span>
                    </div>

                    <div className='bg-[#FFEDE4] w-[220px] h-[200px] grid'>
                        <img className='ml-[60px] mt-4' src={spring} alt="" />
                        <span  className='font-bold text-[16px] text-center font-plus'>Top performer spring <br />2021</span>
                    </div>

                </div>
            </div>
            
            <div className='flex justify-center mt-[80px] '>
                <img src={line} alt="" />
            </div>


        </div>
    )
}

export default Section