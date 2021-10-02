import Header from "./../layout/Header";
import ExtraNavbar from "./../layout/ExtraNavbar";
import "./../assets/css/base.css";
import "./../assets/css/extra-navbar.css";

const Base = (props) => {

    return (
        <>
            <Header />
            {
                props.largeScreen
                    ? <><ExtraNavbar largeScreen={true} />{props.children}</>
                    : <>{props.children}<ExtraNavbar /></>
            }
        </>
    );
}

export default Base;