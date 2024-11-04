import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import Firebase auth
import { db } from '../firebase'; // Import Firestore database
import { doc, setDoc, getDoc } from 'firebase/firestore';

function ProfileUpdate() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name);
          setBio(data.bio);
          setProfilePhoto(data.profilePhoto);
        } else {
          console.log('No such document!');
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      bio,
      profilePhoto: profilePhoto ? await uploadProfilePhoto(profilePhoto) : null,
    };
    await setDoc(doc(db, 'users', user.uid), userData, { merge: true });
    alert('Profile updated successfully!');
  };

  const uploadProfilePhoto = async (file) => {
    // Implement your photo upload logic here
    return 'url_of_uploaded_photo'; // Placeholder return
  };

  return (
    <form onSubmit={handleUpdate}>
      <h1>Update Profile</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} required />
      </div>
      <div>
        <label>Profile Photo:</label>
        <input type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default ProfileUpdate;
