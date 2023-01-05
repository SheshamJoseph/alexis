import {useState, useEffect} from "react";
import {projectStorage, projectFirestore, timestamp} from "../firebase/config";

// let storaageRef;   //made storaageRef global, if error occurs make local to useEffect
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storaageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storaageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storaageRef.getDownloadURL();
        const createdAt = timestamp();
		    const path = storaageRef.fullPath;
        collectionRef.add({url, createdAt, path});
        setUrl(url);
      }
    );
  }, [file]);

  return {progress, url, error};
};

// const DeleteImage = (file) => {
// 	let imageRef = projectStorage.ref();

// 	imageRef.child("images/"+ file.name).delete().then(()  => {
// 		console.log("Deleted successfully....");
// 	}).catch((error) => {
// 		console.error(error);
// 	});
// }

export default useStorage;
