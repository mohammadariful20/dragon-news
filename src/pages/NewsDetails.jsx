import { useLoaderData,useParams } from 'react-router-dom'

export default function NewsDetails() {
    let { id } = useParams();
    const details=useLoaderData()
    const currentDetails=details.find((item)=>item._id===id)
    console.log(currentDetails)
    
  return (
    <div>
      news details
      <img src={currentDetails.image_url} alt="" />
    </div>
  )
}
