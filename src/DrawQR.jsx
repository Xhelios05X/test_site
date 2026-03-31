import { useRef, useEffect } from "react";
import { toCanvas } from "qrcode";

function DrawQR(props){
    const canvasRef = useRef(null)
    //comment

    var options = {
        version: 12,
        errorCorrectionLevel: "L",
        margin: 4,
        isResponsive: true
    }

    const draw = async code =>{
        try{
            await toCanvas(canvasRef.current, "dupa", options)
            console.log("success!")
        } catch(error){
            console.error(error)
        }
    }

    useEffect(() => {draw()})

    return(
        <canvas ref={canvasRef}{...props}>
        </canvas>
    );
}

export default DrawQR