import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './AddDoctor.css'

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const handelOnVBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        console.log(newInfo);
        setInfo(newInfo);
    }
    const handelFileChange = e => {
        console.log('object');
        const newFile = e.target.files[0];
       setFile(newFile)
    }
    const handelOnSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email);
        formData.append('phone', info.phone);
        console.log(formData)

        fetch('https://doctors-portal-us.herokuapp.com/addADoctor',{
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <section className='row containerStyle'>
            <div className='col-md-2 sidebarContainer'>
                <SideBar></SideBar>
            </div>

            <div className="col-md-10 p-0 AddDoctorContainer ">

                <div className='  p-3 bg-banner pt-4'><h3 className='text-banner'>Add Doctor</h3></div>
                <div className=' AddDoctorComponents container-fluid col-md-7 '>
                    <h6 className='py-4'>Fill up the given Form </h6>
                    <form onSubmit={handelOnSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input type="text" onBlur={handelOnVBlur} className="form-control" name='name' autoComplete='true' aria-describedby="nameHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                            <input type="email" onBlur={handelOnVBlur} className="form-control" name='email' autoComplete='true' aria-describedby="emailHelp"></input>  
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                            <input type="phone" onBlur={handelOnVBlur} className="form-control" name='phone' autoComplete='true' aria-describedby="phoneHelp"></input>  
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputImage" className="form-label">Upload an Image</label>
                            <input type="file" onChange={handelFileChange} className="form-control" name='image' autoComplete='false' ></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;