import React from "react"
import { Link } from "react-router-dom"
import landingImg from '../assets/music-beat.gif'
import { Card } from "react-bootstrap"
import feature1 from '../assets/fea1.jpg'
import feature2 from '../assets/fet2.jpeg'
import feature3 from '../assets/music.jpg'

const Landing = () => {
    return (
        <div style={{ paddingTop: "80px" }} className="container">
            {/* landing head */}
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-lg-5">
                    <h1>Welcome to <span className="text-danger">Media Player</span></h1>
                    <p style={{ textAlign: "justify" }} className="mt-3">Media Player App will aloow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. user can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
                    <Link to={'/home'} className="btn btn-success">Get Started</Link>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                    <img className="img-fluid ms-5" src={landingImg} alt="" />
                </div>
            </div>
            {/* features */}
            <div className="my-5">
                <h1 className="text-center">Features</h1>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <Card className="p-2" style={{ width: '20rem' }}>
                            <Card.Img height={'300px'} variant="top" src={feature1} />
                            <Card.Body>
                                <Card.Title>Managing Video</Card.Title>
                                <Card.Text>
                                    User can upload, view and remove videos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="p-2" style={{ width: '20rem' }}>
                            <Card.Img height={'300px'} variant="top" src={feature2} />
                            <Card.Body>
                                <Card.Title>Categories Video</Card.Title>
                                <Card.Text>
                                    User can categories videos by drag and drop feature
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="p-2" style={{ width: '20rem' }}>
                            <Card.Img height={'300px'} variant="top" src={feature3} />
                            <Card.Body>
                                <Card.Title>Managing Video History</Card.Title>
                                <Card.Text>
                                    User can manage watch history of all videos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            {/* youtube */}
            <div className="my-5 row rounded border p-5 align-items-center">
                <div className="col-lg-5">
                    <h2 className="text-danger">Simple, Fast and Powerful</h2>
                    <p style={{ textAlign: "justify" }}><span className="fs-5">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta, suscipit accusantium placeat maxime hic praesentium, corporis vitae sed nostrum vel fuga voluptatem, magnam quis impedit ad nihil sit eaque?
                    </p>
                    <p style={{ textAlign: "justify" }}><span className="fs-5">Categories Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta, suscipit accusantium placeat maxime hic praesentium, corporis vitae sed nostrum vel fuga voluptatem, magnam quis impedit ad nihil sit eaque?
                    </p>
                    <p style={{ textAlign: "justify" }}><span className="fs-5">Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta, suscipit accusantium placeat maxime hic praesentium, corporis vitae sed nostrum vel fuga voluptatem, magnam quis impedit ad nihil sit eaque?
                    </p>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tPGHoOMKkuI?si=fL2LSf8W3RzIfEXe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Landing