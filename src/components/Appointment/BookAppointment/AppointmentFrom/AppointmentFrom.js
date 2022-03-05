import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form"; 
import { useNavigate } from 'react-router-dom';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const AppointmentFrom = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); 
    const onSubmit = data => {
        console.log(data); 
         navigate( "/orders"); 

    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 className="text-center text-primary">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date}</small></p>

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text"  {...register("phone", { required: false })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text"  {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" name="gender"  >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input className="form-control"  {...register("age", { required: true })} name="age" defaultValue={24} placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger" >This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input className="form-control" name="weight" defaultValue={74} placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">

                        <button onClick={closeModal} type="close" className="btn btn-danger mr-3">close</button>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentFrom;