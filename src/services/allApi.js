import commonApi from "./commomApi"
import SERVER_URL from "./serverUrl"
// Upload api - api must call by add component
export const uploadVideoAPI = async (video) => {
    return await commonApi("POST", `${SERVER_URL}/allVideos`, video)
}

// getAllVideoAPI - called by view component
export const getAllVideoAPI = async () => {
    return await commonApi("GET", `${SERVER_URL}/allVideos`, "")
}

// SaveHistoryAPI - called by videoCard Component
export const saveHistoryAPI = async (videoDetails) => {
    return await commonApi("POST", `${SERVER_URL}/history`, videoDetails)
}

// getHistoryAPI - called by History component
export const getHistoryAPI = async () => {
    return await commonApi("GET", `${SERVER_URL}/history`, "")
}

// removeHistoryAPI - called by history
export const removeHistoryAPI = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/history/${id}`, {})
}

// removeVideoAPI - called by videocard
export const removeVideoAPI = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/allVideos/${id}`, {})
}

// addCategoryAPI - called by category
export const addCategoryAPI = async (categoryDetails) => {
    return await commonApi("POST", `${SERVER_URL}/categories`, categoryDetails)
}

// getAllCategoryAPI - called by category
export const getAllCategoryAPI = async () => {
    return await commonApi("GET", `${SERVER_URL}/categories`, "")
}

// removeCategoryAPI - called by category
export const removeCategoryAPI = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/categories/${id}`, {})
}

// getSingleVideoAPI - called by category
export const getSingleVideoAPI = async (id) => {
    return await commonApi("GET", `${SERVER_URL}/allVideos/${id}`, "")
}

// updateCategoryAPI - called by category
export const updateCategoryAPI = async(categoryId, updateCategoryDetails)=>{
    return await commonApi("PUT", `${SERVER_URL}/categories/${categoryId}`, updateCategoryDetails)
}

// getSingleCategoryAPI - called view
export const getSingleCategoryAPI = async(id)=>{
    return await commonApi("GET", `${SERVER_URL}/categories/${id}`,"")
}