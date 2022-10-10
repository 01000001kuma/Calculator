import { useContext } from "react"
import { CalcContext } from "../Context/CalcContext"

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'multiply',
        '-': 'subtract',
        '+': 'add',
        '/': 'divide', 
    }
    return className[btn]
}

const Button = ({value}) => {
    const { calc, setCalc } = useContext(CalcContext)


    // User click comma

    const commaClick   = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num

        });
    }

    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    const handleBtnClick = () => {

    const results = {
        '.': commaClick
        'C': resetClick,
    }
    }
  return (
    <button onClick={handleBtnClick} className={'${getStyleName(value)} button'}>{value}</button>
  )
}

export default Button