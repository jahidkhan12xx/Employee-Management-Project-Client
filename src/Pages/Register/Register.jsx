import Lottie from "lottie-react";
import login from "../../assets/Animation - 1700766307775.json";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const img_key = "9460cda9a928b920abb5b8cd48dd8cec";
console.log(img_key);

const img_api = `https://api.imgbb.com/1/upload?expiration=0&key=${img_key}`;
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {register:createUser,updateUser} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    
    const imgFile = { image: data.photo[0] };
    const res = await axiosPublic.post(img_api, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const imgURL = res.data.data.display_url;
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const role = data.designation;
    const salary = data.salary;
    const bank_acc_num = data.bank_acc_num;

    // console.log(name,imgURL,email,password,role,salary,bank_acc_num);
    const user = {name,imgURL,email,password,role,salary: parseInt(salary),bank_acc_num,isVerified:false};
    console.log(user);

    createUser(email,password)
    .then(res=>{
        console.log(res.user);
        if (res.user) {
            updateUser(name,imgURL).then(()=>{
              axiosPublic.post("/users",user)
              .then(res=>{
                if(res.data){
                  axiosPublic.post("/payment",{
                    email : email,
                    payment_history : []
                  })
                }
                
              })
            }).catch();
          }
        toast.success('Registration Completed.', {
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
        navigate("/login")
        
    })
    .catch(err=>{
        console.log(err.message);
    })
    
    
  };

 

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={login}></Lottie>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Name is required
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bank Acc No</span>
                </label>
                <input
                  {...register("bank_acc_num", { required: true })}
                  type="text"
                  placeholder="acc no"
                  className="input input-bordered"
                />
                {errors.bank_acc_num?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Bank Acc Number is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Salary</span>
                </label>
                <input
                  {...register("salary", { required: true })}
                  type="number"
                  placeholder="salary"
                  className="input input-bordered"
                />
                {errors.salary?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Salary is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Designation</span>
                </label>
                <select
                  name="designation"
                  id="designation"
                  {...register("designation", { required: true })}
                  className="input input-bordered"
                >
                  <option disabled value="">
                    Select Designation
                  </option>
                  <option value="employee">Employee</option>
                  <option value="hr">HR</option>
                </select>
                {errors.designation?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Designation is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  placeholder="email"
                  className=" w-full "
                />
                {errors.photo?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Photo is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).*$/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-600" role="alert">
                    Password must be six characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className=" text-red-600" role="alert">
                    Password must contain a Capital,Small & Special Character{" "}
                  </p>
                )}
                <label className="label">
                  <div className="label-text-alt flex gap-3 ">
                    <span>Dont have any account</span>
                    <Link to="/login">
                      <span className=" link link-hover">SignIn</span>
                    </Link>
                  </div>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary "
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
