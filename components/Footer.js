import { makeStyles } from "@material-ui/core/styles";
import Navbar from "react-bootstrap/Navbar";


const useStyles = makeStyles((theme) => ({
    rootAppBar: {
        flexGrow: 1,
    },
}));

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.rootAppBar}>
                {/* FOOTER */}
                <Navbar fixed="bottom" bg="dark" variant="dark" className="pl-2 pr-2 justify-content-end">
                    <Navbar.Text> &copy;{new Date().getFullYear()} Insurance Information</Navbar.Text>
                </Navbar>

            </div>
        </>
    );
}