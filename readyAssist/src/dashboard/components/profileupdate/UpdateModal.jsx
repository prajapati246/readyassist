import { useEffect, useState } from "react";
import "./updateModal.scss";
import { makeRequest } from "../../../axios.js"
import { useMutation, useQueryClient } from "@tanstack/react-query";

const UpdateModal = ({ toggleUpdate, user }) => {
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        name: user?.name || "",
        phonenumber: user?.phonenumber || "",
        email: user?.email || "",
        city: user?.city || "",
        website: user?.website || "",
        profilePic: "",
    });


    const [message,setMessage] = useState({text:"",type:""});


    const upload = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await makeRequest.post("/upload", formData);
            return res.data.filename;
        } catch (err) {
            setMessage({text:"Error uploading file",type:"error"});
            console.error("Error uploading file", err);
            return null;
        }
    }

    const mutation = useMutation({
        mutationFn: (updatedData) =>
            makeRequest.put(`/users`, updatedData),
        onSuccess: () => {
            setMessage({text:" updating profile Successful!",type:"success"});
            queryClient.invalidateQueries(['user']);
            setTimeout(()=>{
                toggleUpdate();
            },2000);
        },
        onError: (error) => {
            setMessage({text:"Error updating profile!",type:"error"});
            console.error(error);
        }
    });

    const handleChange = (e) => {
        if (e.target.name === 'profilePic') {
            setFormData({ ...formData, profilePic: e.target.files[0] });
        } else
            setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let profileUrl = formData.profilePic;

        if (formData.profilePic instanceof File) {
            profileUrl = await upload(formData.profilePic);
        }

        const updatedData = { ...formData, profilePic: profileUrl };
        mutation.mutate(updatedData);
    };

    return (
        <div className="update-container">
            <h3 className="title">Update Profile</h3>
            <i className="bx bx-x" onClick={toggleUpdate}></i>
            <div className="updateData">
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="username">Name</label>
                        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="phonenumber">Mobile No.</label>
                        <input type="number" placeholder="Phone number" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="city">City</label>
                        <input type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="website">Website</label>
                        <input type="text" placeholder="Website" name="website" value={formData.website} onChange={handleChange} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="profile">Profile Pic</label>
                        <input type="file" name="profilePic" onChange={handleChange} />
                    </div>

                    {message.text && (<p className={`message ${message.type}`} >{message.text}</p>)}
                    <button className="btn">Save</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;
