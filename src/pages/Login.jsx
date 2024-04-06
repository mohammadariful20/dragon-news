import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const { loginUser, forgetPassword } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(true)
    const navigate = useNavigate()

    const handleShowPassWord = () => {
        setShowPassword(!showPassword)
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
            .then(result => {
                const usr = result.user
                e.target.reset()
                navigate('/')
            })
            .catch((err) => toast.error(err.message))
    }
    const handleForgetPassword = (e) => {
        const email = e.target.forgetmail.value
        forgetPassword(email)
        .then(()=>{
            toast('Password reset email sent!')
            e.target.reset()

        })
        .catch(err=>toast.error(err))
    }


    return (
        <>
            <Navbar></Navbar>
            <ToastContainer />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleForgetPassword}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg my-3">Hello!</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <input name="forgetmail" type="text" className="grow" placeholder="Enter your Email" />
                        <button className="badge badge-info py-4 px-4">Send</button>
                    </label>
                    </form>

                </div>
            </dialog>
            <div className="max-h-svh  relative">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100  absolute top-32 left-1/4 py-10">
                    <h1 className="text-center text-5xl font-bold">Login your account</h1>
                    <form className="card-body" onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type={!showPassword ? "text" : "password"} placeholder="Enter your password" className="input input-bordered" required />
                            <div className="absolute right-10 top-1/2">
                                {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
                                }
                            </div>
                            <label className="label">
                                <a onClick={()=> document.getElementById('my_modal_3').showModal()} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Dont’t Have An Account ?<Link to="/register" className="text-[#F75B5F] font-bold"> Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}



