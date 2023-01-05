import React from "react";
import useFirestore from "../hooks/useFirestore";
import {motion} from "framer-motion";
import { projectStorage } from "../firebase/config";
// import { MotionConfig } from "framer-motion";

function ImageGrid({setSelectedImg}) {
  const {docs} = useFirestore("images");
  // const deleteRef = useStorage(file);
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploadded pic"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
            {/* <button type="submit">x</button> */}
             <button onClick={(doc) =>{
              let storageRef = projectStorage.ref(doc.path);
              // let imageRef = 
              storageRef.delete().then(() => {
                console.log("Deleted Successfully...")
              }).catch((error) => {
                console.error(error);
              });
             }}></button>
            {/* < DeleteButton /> */}
          </motion.div>
          
        ))}
        {/* {docs && docs.map((doc) =>(
          <button onClick={() =>{
            let storageRef = projectStorage.ref(doc.path);
            // let imageRef = 
            storageRef.delete().then(() => {
              console.log("Deleted Successfully...")
            }).catch((error) => {
              console.error(error);
            });
           }}></button>
        ))}         */}
    </div>
  );
}

export default ImageGrid;
