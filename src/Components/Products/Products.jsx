import { collection, getDocs } from 'firebase/firestore';
import { listAll, ref } from 'firebase/storage';
import React, { useContext, useEffect, useState } from 'react'
import { db, storage } from '../../firebase/config';
import { FirebaseContext } from '../../store/FirebaseContext'
import './Products.css'

function Products() {

    const {firebase} = useContext(FirebaseContext);
    const [products, setProducts] = useState([])

    useEffect(async ()=>{

        await getDocs(collection(db,"products")).then((res)=>{
            console.log("result",res);
        })
        // const listRef = ref(storage, 'products');
        // listAll(listRef).then((res)=>{
        //     console.log("response",res);
        //     res.prefixes.forEach((folderRef)=>{
        //         console.log("folder",folderRef);
        //     }).catch((error) => {
        //         console.log("foldererror",error);
        //       });
        //     res.items.forEach((itemRef) => {
        //         console.log("itemRef",itemRef);
        //       }).catch((error) => {
        //         console.log("itemReferror",error);
        //       });
        // }).catch((error) => {
        //     console.log("error",error);
        //   });
        // firebase.firestore().collection('products').get().then((snapshot)=>{
        //     const allPost = snapshot.docs.map((product)=>{
        //         return{
        //             ...product.data(),
        //             id:product.id
        //         }
        //     })
        //     console.log("Allpost",allPost);
        // }).catch((error)=>{
        //     console.log("hi",error);
        // })
    },[])


    return (
        <div className="container">
            <div className="row">
                <div className='title'>
                    <span>Fresh recommendations</span>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="products">
                        <div className="pro-img">
                            <img src="https://apollo-singapore.akamaized.net/v1/files/xuntos124yzu3-IN/image;s=300x600;q=60" alt="productsImage" />
                        </div>
                        <div className="pro-details">
                            <p><h2>₹ 11,111</h2></p>
                            <p className='title'>(A.c.wala)   DIWALI offers  wholesale rate split a.c 1. ton 3 sta</p>
                            <div className="place">
                                <span>Navrangpura, Ahmedabad</span>
                                <span>Sep 17</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="load_more">
                    <div className="button">
                        <button>Load More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products