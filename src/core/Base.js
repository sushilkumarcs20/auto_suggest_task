import { Link } from "react-router-dom";
import Header from "./../layout/Header";
import "./../assets/css/base.css";
const Base = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}

export default Base;