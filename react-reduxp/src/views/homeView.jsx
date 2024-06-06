import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export default function HomeView() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)
    const age = useSelector(state => state.age)

    useEffect(() => {
        console.log(name, "==> FINAL");
        console.log(age);
    }, [])

    useEffect(() => {
        console.log(name, "==> INI YAA");
    }, [name])
    
    const handleButton = () => {
        dispatch({
            type: "GANTI_NAMA",
            payload: "Satrio"
        })
    }


    return(
        <>
            <h1>Home View</h1>
            <button onClick={handleButton}>Change</button>
        </>
    )
}