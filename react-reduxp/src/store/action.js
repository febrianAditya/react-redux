export const getData = dispatch => {
    const resultData = async dispatch => {
        const hitApi = await fetch("https://jsonplaceholder.typicode.com/posts")
        const resultData = await hitApi.json()

        dispatch({
            type: "GET_USER",
            payload: resultData
        })
    }


    return resultData
}