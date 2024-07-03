import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {
    const click = () =>{console.log('clicked')}
  return (
    <header className = 'header'><h1>Task Tracker   { title }</h1>
    <Button color = 'green' text = 'Add' onclick = { click }/>
    </header>
    
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS <h1 style = {headingStyle}>Task Tracker   { title }</h1>
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'yellowgreen'
// }
Header.defaultProps = {
    title:'Task-Tracker'
}
export default Header
