import { db } from '../firebase'; // Adjust the path as necessary
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Function to fetch user profile data
export const getUserProfile = async (uid) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error('No such document!');
  }
};

// Function to update user profile data
export const updateUserProfile = async (uid, profileData) => {
  const docRef = doc(db, 'users', uid);
  await setDoc(docRef, profileData, { merge: true });
};
