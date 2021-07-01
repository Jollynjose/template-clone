
// import classes from "./Information.module.css";
import Archives from "./Archives";
import About from "./About";
import Social from "./Social";

const Information: React.FC = () => {
    return(
        <aside className="aside">
            <About/>
            <Archives/>
            <Social/>
        </aside>
    )
};
export default Information;