import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getData } from "../store/action"

export default function HomeView() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)
    const age = useSelector(state => state.age)
    const user = useSelector(state => state.dataUser)

    useEffect(() => {
        console.log(name, "==> FINAL");
        console.log(age);
    }, [])

    useEffect(() => {
        console.log(name, "==> INI YAA");
    }, [name])

    const handleButton = () => {
        dispatch(getData())
    }


    return(
        <>
            <h1>Home View</h1>
            <button onClick={handleButton}>Change</button>
            <p>{
                JSON.stringify(user)
                }</p>
        </>
    )
}