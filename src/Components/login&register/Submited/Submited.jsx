import Done from '../../../assets/done.png'
import { Link } from 'react-router-dom';

function Submited(props){
    return(
        <>
        <div className="flex justify-around h-screen items-center">
            <div className="flex flex-col justify-center items-center mx-auto w-full h-auto
        bg-gradient-to-r from-[#393939] to-[#111111] text-white
        rounded-[2vw] max-md:rounded-[8vw] max-md:w-full">
            <div className='flex flex-col justify-end my-[4vw] max-md:my-[9vw]'>
                {/* sucess container */}
            <div className='flex flex-col justify-around items-center gap-y-[1.5vw]'>
            <img className='w-[7vw] h-[8vw] max-md:w-[35vw] max-md:h-[30vw]'
            src={Done} alt="" />
            <h1 className='text-[2vw] max-md:text-[7vw] '>Submited</h1>
            <p className='text-[0.7vw] w-2/3 text-center text-white/50
            max-md:text-[4vw]'
            >We have sucessfuly suybmited your profile. You can upload a Personal vedio for Better reach</p>
            {props.type == 2?
            <Link className='uppercase text-[1vw] bg-[#736ADB] w-[65%] py-[1vw]
            rounded-[0.5vw] text-center max-md:text-[3vw] max-md:py-[3.5vw] max-md:rounded-[2vw]'
            to="/test"
            >Upload Vedio</Link>:null}
            </div>
            {/* asking for the test */}
            {props.type==2? <Link className='text-[0.8vw] ml-[20vw] mt-[5vh] max-md:ml-[73vw] max-md:text-[2vw]'
             to='/profile'
             >Skip</Link>:null}
            </div>
            
        </div>
        </div>
        
        </>
    );
}
export default Submited;