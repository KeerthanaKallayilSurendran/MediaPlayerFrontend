import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addCategoryAPI, getAllCategoryAPI, getSingleVideoAPI, removeCategoryAPI, removeVideoAPI, updateCategoryAPI } from '../services/allApi';
import { all } from 'axios';
import VideoCard from './VideoCard';

const Category = ({ setRemoveVideoResponseFromCategory, removeVideoResponseFromView }) => {
    const [allCategory, setAllCategory] = useState([])
    const [categoryName, setCategoryName] = useState("")
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllCategory()
    }, [removeVideoResponseFromView])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddCategory = async () => {
        if (categoryName) {
            const categoryDetails = { categoryName, allVideos: [] }
            await addCategoryAPI(categoryDetails)
            handleClose()
            setCategoryName("")
        } else {
            alert("Please Fill the form Completely!!!")
        }
    }
    const getAllCategory = async () => {
        const response = await getAllCategoryAPI()
        setAllCategory(response.data)
        getAllCategory()
    }

    // console.log(allCategory);
    const deleteCategory = async (id) => {
        await removeCategoryAPI(id)
        getAllCategory()
    }
    const dragOverCategory = (e) => {
        e.preventDefault()
    }

    const videoDropOverCategory = async (e, categoryId) => {
        const videoId = e.dataTransfer.getData("id")
        // console.log(`Video id: ${videoId} is Dropped inside category id : ${categoryId}`);

        // get dropping video detail - call api
        const { data } = await getSingleVideoAPI(videoId)
        // console.log(data);

        // get the details of droping category
        const selectedCategory = allCategory?.find(item => item.id === categoryId)
        selectedCategory.allVideos.push(data)
        // console.log(selectedCategory);

        // upadate selected category into json file - call api

        await updateCategoryAPI(categoryId, selectedCategory)

        // remove video from all video  - call api
        const response = await removeVideoAPI(videoId)
        // Pass response to view component
        setRemoveVideoResponseFromCategory(response)
        // get all update categories
        getAllCategory()
    }

    const categoryVideoDragStart = (e, categoryId, video) => {
        console.log(`Video with id: ${video?.id} from category id : ${categoryId} has started dragging`);
        let dataShare = { categoryId, video }
        e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))

        // 

    }
    return (

        <>
            <div className="d-flex justify-content-between">
                <h3>All Categories</h3>
                <button onClick={handleShow} style={{ height: "40px", width: "40px" }} className='btn btn-warning rounded-circle fs-5 fw-bolder ms-3'>+</button>
            </div>

            <div className="container-fluid mt-3">
                {
                    allCategory?.length > 0 ?
                        allCategory?.map(categoryDetails => (
                            <div droppable="true" onDragOver={dragOverCategory} onDrop={e => videoDropOverCategory(e, categoryDetails?.id)} className="border rounded p-3 mb-2">
                                <div className="d-flex justify-content-between">
                                    <h5>{categoryDetails?.categoryName}</h5>
                                    <button onClick={() => deleteCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                                </div>
                                <div className="row mt-3">
                                    {
                                        categoryDetails?.allVideos?.length > 0 &&
                                        categoryDetails?.allVideos?.map(video => (
                                            <div draggable={true} onDragStart={e => categoryVideoDragStart(e, categoryDetails?.id, video)} key={video?.id} className="col-md-4">
                                                <VideoCard displayData={video} insideCategory={true} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                        :
                        <div className="text-danger fw-bolder">*No Categories added Yet!!!</div>
                }
            </div>


            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Category Detail!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="border rounded p-3">
                        <FloatingLabel controlId="floatingInputName" label="Category Name" className="mb-3">
                            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
                        </FloatingLabel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button onClick={handleAddCategory} className='btn btn-success'>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Category