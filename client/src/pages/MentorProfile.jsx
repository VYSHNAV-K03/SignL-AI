import React, { useState, useEffect } from 'react';
import image from "../assets/mentor.jpg";

const MentorProfile = () => {
    // Get user data from localStorage
    const [user, setUser] = useState(null);

    // Load user data on mount
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    if (!user) {
        return <p className="text-center">No mentor data found.</p>;
    }

    return (
        <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card p-5 shadow-lg border-0">
            <div className="text-center">
              <img
                src={image}
                alt={user.name}
                className="rounded-circle mb-4"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  border: "6px solid #ccc"
                }}
              />
              <h1 className="card-title mb-4">{user.name}</h1>
              <hr className="my-4" />
            </div>

            <div className="card-body">
              <p className="fs-4 mb-4"><strong>Email:</strong> {user.email}</p>
              <p className="fs-4 mb-4"><strong>Role:</strong> {user.Role}</p>
              <p className="fs-4 mb-4"><strong>Phone:</strong> {user.phone || 'N/A'}</p>
              <p className="fs-4"><strong>Address:</strong> {user.address || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;