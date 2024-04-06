import { useContext } from 'react';
import { FaArrowLeft, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link, useLoaderData, useParams ,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../authProvider/AuthProvider';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import QZone from '../components/QZone';


export default function NewsDetails() {
  const navigate=useNavigate()
  const { loginWithGoogle, loginWithgithub } = useContext(AuthContext)
  let { id } = useParams();
  const detail = useLoaderData()
  const currentDetails = detail.find((item) => item._id === id)

  const { details, title } = currentDetails
  // console.log(currentDetails)

  const handleGoogleSignin = () => {
    loginWithGoogle()
      .then(result => {
        toast('SignIn Successfull')
      })
      .catch(err => toast.error(err.message))
  }
  const handleGithubSignin = () => {
    loginWithgithub()
      .then(result => {
        toast('SignIn Successfull')
      })
      .catch(err => toast.error(err.message))
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <Navbar />
      <div className="grid grid-cols-4 gap-10 p-4">
        <div className="col-span-3">
          <img src={currentDetails.image_url} alt="" />
          <h3 className="text-xl my-6 font-bold">{title}</h3>
          <p>{details}</p>
          <Link to='/' className="btn my-8 btn-primary">
            <FaArrowLeft/>
            All news in this category
          </Link>
        </div>
        <div className="">
          <h3 className="text-xl font-bold my-4">Login With</h3>
          <div className="flex flex-col gap-4">
            <button onClick={handleGoogleSignin} className="btn text-green-700">
              <FaGoogle />
              Login with Google
            </button>
            <button onClick={handleGithubSignin} className="btn">
              <FaGithub />
              Login with Github
            </button>
          </div>
          <div className="my-8 font-semibold flex flex-col    ">
            <h3 className="text-xl my-2">Find Us On</h3>
            <a className="btn w-1/2 border border-[#E7E7E7]">
              <FaFacebook />
              Facebook
            </a>
            <a className="btn w-1/2 border border-x-[#E7E7E7]">
              <FaTwitter />
              Twitter
            </a>
            <a className="btn w-1/2 border border-[#E7E7E7]">
              <FaInstagram />
              Instagram
            </a>
          </div>
          <QZone />
        </div>
      </div>
    </>
  )
}
