import { FaEye } from "react-icons/fa6";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function News({ item }) {
    const { image_url, title, details, rating, total_view ,author,_id} = item;
    return (
        <div className="card bg-base-100 shadow-xl my-10    ">
            <div className="flex items-center justify-between my-10">
                <div className="flex gap-4">
                    <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                    <div className="">
                        <p>{author.name}</p>
                        <p className="text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>
                <div className=" flex gap-4">
                    <CiBookmark/>
                    <CiShare2/>
                </div>
            </div>
            <h2 className="card-title mb-6">
                {title}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                {
                    details.length>200?<p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-red-600 font-bold">  Read More....</Link></p>:<p>{details}</p>
                }
                <div className="card-actions  flex justify-between items-center">
                    <div className=" flex items-center gap-4 my-8">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <span>{rating.number}</span>
                    </div>
                    <div className="flex items-center">
                        <FaEye />
                        <span className="ml-2">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
