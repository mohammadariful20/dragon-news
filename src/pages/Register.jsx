import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


export default function Register() {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-svh  relative">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100  absolute top-1/4 left-1/4 py-10">
                    <h1 className="text-center text-5xl font-bold">Register your account</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="file" placeholder="Photo URL" className="input-bordered  file-input file-input-ghost w-full" required />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name="confirmpassword" type="password" placeholder="Confirm password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Have An Account ?<Link to="/login" className="text-[#F75B5F]"> Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
