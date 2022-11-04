import React from "react"
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", backgroundColor: "#F1F4F6", color:"#D55187" }}>
                <Spinner animation="border" />
            </div>

        </>
    )
}

export default Loader