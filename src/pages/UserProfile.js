import React, { useEffect, useState } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { db } from '../firebase'; // Import Firestore database
import { doc, getDoc } from 'firebase/firestore';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };
    fetchUserData();
  }, [user]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Bio: {userData.bio}</p>
      {userData.profilePhoto && <img src={userData.profilePhoto} alt="Profile" />}
    </div>
  );
}

export default UserProfile;
