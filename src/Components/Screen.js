import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"
import { Textfit } from "react-textfit";

const Screen = ({children}) => {
    const {calc} = useContext(CalcContext);
    
    return (
        <Textfit className="screen">834839174891</Textfit>
    )
    }

export default Screen