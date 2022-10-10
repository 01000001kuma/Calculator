
const getStyleName = name => {
    const className = {
        '=': 'equals',
        'x': 'multiply',
        '-': 'subtract',
        '+': 'add',
        '/': 'divide', 
    }
}

const Button = ({value}) => {
  return (
    <button className={'${getStyleName(value)} button'}>{value}</button>
  )
}

export default Button