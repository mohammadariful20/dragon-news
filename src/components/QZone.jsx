import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'

export default function QZone() {
    return (
        <div className="my-8 font-semibold ">
            <h3 className="text-xl">Q-Zone</h3>
            <div className="">
                <img className='w-full' src={qzone1} alt="" />
                <img className='w-full' src={qzone2} alt="" />
                <img className='w-full' src={qzone3} alt="" />
            </div>

        </div>
    )
}
