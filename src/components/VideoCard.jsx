import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { getAllVideoAPI, removeVideoAPI, saveHistoryAPI } from '../services/allApi';
const VideoCard = ({ displayData, setDeleteVideoResponse, insideCategory }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true)
        const { caption, link } = displayData
        const today = new Date()
        const timeStamp = today.toLocaleString('en-US', { timeZoneName: 'short' })

        // console.log(timeStamp);
        const videoDetails = { caption, link, timeStamp }
        await saveHistoryAPI(videoDetails)
    }

    const deleteVideo = async (id) => {
        const result = await removeVideoAPI(id)
        setDeleteVideoResponse(result)
    }

    const videoDragStart = (e, videoId) => {
        // console.log(`Video with id ${videoId} has started dragging.....`);
        e.dataTransfer.setData("id", videoId)
    }

    return (
        <>
            <Card draggable={true} onDragStart={e => videoDragStart(e, displayData?.id)} style={{ height: '350px' }}>
                <Card.Img onClick={handleShow} variant="top" height={'250px'} src={displayData?.url} />
                <Card.Body>
                    <Card.Text className='d-flex justify-content-between'>
                        <p>{displayData?.caption}</p>
                        {!insideCategory && <button onClick={() => deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-warning"></i></button>}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayData?.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={`${displayData?.link}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard