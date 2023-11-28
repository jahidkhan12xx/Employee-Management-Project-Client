import Lottie from 'lottie-react';
import login from '../../assets/Animation - 1699109193294.json'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Login = () => {

    const [err,setErr] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    

    const {login:signIn} = useAuth();
    const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    setErr("")
    const email = data.email;
    const password = data.password;
    console.log(email,password);
    
    signIn(email,password)
    .then(res=>{
        
        if(res.user){
          axiosSecure.get(`/checkingUser/${res.user.email}`)
          .then(res=>{
            if(res?.data?.isFired){
              toast.error("You are fired")
              navigate("/login")
            }
            else{
              toast.success('LogIn Successfull.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
              
            navigate(location.state || "/")
            }
            
          })
        }
       
    })
    .catch(err=>{
        console.log(err.message);
        setErr(err.code)
    })

  };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      <Lottie animationData={login}>

      </Lottie>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      {err && <p className=' text-red-600' role="alert">{err}</p>}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",{ required: true})}  type="email" placeholder="email" className="input input-bordered" />
          {errors.email?.type === 'required' && <p className=' text-red-600' role="alert">Email is required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password",{ required: true})} type="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <p className=' text-red-600' role="alert">Password is required</p>}
          <label className="label">
            <div  className="label-text-alt flex gap-3 "><span>Dont have any account</span><Link to="/register"><span className=' link link-hover'>SignUp</span></Link></div>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value="Login" className="btn btn-primary "></input>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;