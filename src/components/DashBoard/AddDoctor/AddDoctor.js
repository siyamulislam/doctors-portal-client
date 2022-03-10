import React from 'react';
import SideBar from '../SideBar/SideBar';
import './AddDoctor.css'

const AddDoctor = () => {
    return (
        <section className='row containerStyle'>
            <div className='col-md-2 sidebarContainer'>
                <SideBar></SideBar>
            </div>

            <div className="col-md-10 p-0 AddDoctorContainer ">

                <div className='  p-3 bg-banner pt-4'><h3 className='text-banner'>Add Doctor</h3></div>
                <div className=' AddDoctorComponents container-fluid'>
                    <h1>Heyg ruy</h1>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;