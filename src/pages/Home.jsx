import React, { useState } from "react"
import Add from '../components/Add'
import Category from "../components/Category"
import View from "../components/View"
import { Link } from "react-router-dom"
const Home = () => {
    const [removeVideoResponseFromView, setRemoveVideoResponseFromView] = useState("")
    const [removeVideoResponseFromCategory, setRemoveVideoResponseFromCategory] = useState("")
    const [videoUploadResponse, setVideoUploadResponse] = useState("")
    return (
        <div style={{ paddingTop: "100px" }}>
            <div className="conatiner m-3 d-flex justify-content-between">
                <Add setVideoUploadResponse={setVideoUploadResponse} />
                <Link to={'/history'}>Watch History</Link>
            </div>
            <div className="container-fluid row my-5">
                <div className="col-lg-6">
                    <h2>All Videos</h2>
                    <View setRemoveVideoResponseFromView={setRemoveVideoResponseFromView} removeVideoResponseFromCategory={removeVideoResponseFromCategory} videoUploadResponse={videoUploadResponse} />
                </div>
                <div className="col-lg-6">
                    <Category removeVideoResponseFromView={removeVideoResponseFromView} setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}  />
                </div>
            </div>
        </div>
    )
}

export default Home