import { useEffect, useState } from "react";


export default function LoginView() {
    const [emailUser, setEmailUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    const [isTrueLogin, setIsTrueLogin] = useState(false)

    useEffect(() => {
        console.log(isTrueLogin, "==> what");
    }, [])
    const handleChangeValue = (e) => {
        setEmailUser(e.target.value)
    }

    const handleValuePassword = e => {
        setPasswordUser(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault()

        let inputDataUser = {
            emailUser,
            passwordUser
        }

        console.log(inputDataUser, "==> FINAL");
        handleLogicPasswordAndEmail()
    }

    const handleLogicPasswordAndEmail = () => {
        console.log("masuk function");
        if (emailUser === "stanley@mail.com" && passwordUser === "1234") {
            setIsTrueLogin(true)
        }
    }

    return(
        <>
            <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onChange={e => handleChangeValue(e)} type="text" className="form-control-plaintext" id="staticEmail"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input onChange={e => handleValuePassword(e)} type="password" className="form-control" id="inputPassword" />
                </div>
            </div>
            <button onClick={e => handleLogin(e)}>Login</button>

            {
                isTrueLogin ? (
                    <>
                        <h1>BERHASIL LOGIN</h1>
                    </>
                ) : (
                    <>
                        <h1 style={{ color: "red"}}>GAGAL LOGIN</h1>
                    </>
                )
            }
        </>
    )
}