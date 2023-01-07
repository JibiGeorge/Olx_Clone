import React, { useContext, useState } from 'react'
import BackButton from '../Sell/BackButton'
import './Create.css'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { db} from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Create() {
    const storage = getStorage();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const metadata = {
        contentType: 'image/jpeg'
    };

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const date = new Date();

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("ascac",storage);

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    // ...
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                    console.log('File available at', downloadURL);
                    await addDoc(collection(db,"products"),{
                        name,
                        description,
                        price,
                        downloadURL,
                        userID: user.uid,
                        createdAt: date.toDateString()
                    })
                    navigate('/')
                });
            }
        );
    }

    return (
        <>
            <div className="back">
                <BackButton />
                <div className="sell_Body">
                    <div className="container">
                        <div className="row">
                            <div className="title">
                                <span>Post Your AD</span>
                            </div>
                        </div>
                    </div>

                    {/* Choose Category */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="category">
                                <div className='title'>
                                    <h3>Selected Category</h3>
                                    <p>The way of category selection</p>
                                </div>
                            </div>
                            <div className="details">
                                <form action="">
                                    <div className="details-content">
                                        <div className="proDetails">
                                            <h2>INCLUDE SOME DETAILS</h2>
                                            <div className='pro'>
                                                <p>Ad Title</p>
                                                <input type="text"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                <p>
                                                    <span>Mention the key features of your item (e.g. brand, model, age, type)</span>
                                                </p>
                                            </div>
                                            <div className='pro'>
                                                <p>Description</p>
                                                <textarea name="" id="" cols="30" rows="10"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                ></textarea>
                                                <p>
                                                    <span>A minimum length of 10 characters is required. Please edit the field.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-content">
                                        <div className="proDetails">
                                            <h2>SET A PRICE</h2>
                                            <div className='pro'>
                                                <p>Price</p>
                                                <input type="text"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-content">
                                        <div className="proDetails">
                                            <h2>UPLOAD PHOTOS</h2>
                                            <img src={image ? URL.createObjectURL(image) : ''} width="200px" height="200px" alt="" />
                                            <div className='pro'>
                                                <input type="file" onChange={(e) => {
                                                    setImage(e.target.files[0])
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-content">
                                        <button className='btn btn-primary' type='submit' onClick={handleCreate} >POST</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create