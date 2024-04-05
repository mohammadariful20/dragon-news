import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Login() {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-h-svh  relative">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100  absolute top-32 left-1/4 py-10">
                    <h1 className="text-center text-5xl font-bold">Login your account</h1>
                    <form className="card-body">
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
                            <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Dont’t Have An Account ?<Link to="/register" className="text-[#F75B5F]"> Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
