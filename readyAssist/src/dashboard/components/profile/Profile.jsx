import { useContext } from "react";
import "./profile.scss";
import { AuthContext } from "../../../Context/AuthContext";
import { makeRequest } from "../../../axios";
import { useQuery } from '@tanstack/react-query';
import Avtar from '../../../assets/profile-icon-design-free-vector.jpg'


const Profile = ({ toggleUpdate ,togglePassword}) => {
    const { currentUser } = useContext(AuthContext);


    const { isLoading, error, data } = useQuery({
        queryKey: ["user", currentUser.id],
        queryFn: () =>
            makeRequest.get(`/users/find/${currentUser.id}`).then((res) => res.data)
    });

    console.log(data);


    if (isLoading) return <p>Loading user data...</p>;
    if (error) return <p>Failed to load user data.</p>;

    return (
        <div className='profile-data'>
            <div className="profile-img">
                <img src={data.profilePic? (data.profilePic.startsWith("http")?data.profilePic : "/upload/"+data.profilePic):Avtar} alt="profile" />
            </div>
            <div className="data">
                <span>Username</span>
                <p>{data.username}</p>
            </div>
            <div className="data">
                <span>Name</span>
                <p>{data.name}</p>
            </div>
            <div className="data">
                <span>Mobile No.</span>
                <p>{data.phonenumber}</p>
            </div>
            <div className="data">
                <span>email</span>
                <p>{data.email}</p>
            </div>
            <div className="data">
                <span>City</span>
                <p>{data.city}</p>
            </div>
            <div className="data">
                <span>Website</span>
                <p>{data.website}</p>
            </div>

            <div className="btn">
                <button onClick={() => toggleUpdate(data)}>Update</button>
                <button  onClick={togglePassword} >Change Password</button>
            </div>
            
        </div>
    )
}

export default Profile