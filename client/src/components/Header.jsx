import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Header = ({logo, styles}) => {
    return (
        <nav>
            <div>
                <img src={logo} alt="" width={"55px"} />
            </div>

            <div className={styles.actions}>
                <div>
                    <Link to="/">Profile Info</Link>
                </div>
                <div>
                    <Link to="/">Log out</Link>
                </div>
            </div>
        </nav>
  );
}

Header.propTypes  ={
    logo: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired,
}

export default Header