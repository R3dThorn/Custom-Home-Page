import React from "react";
// import DataService from "../../dataService"
import Menu from "../../components/menu/Menu"
import "./Home.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        // this.client = new DataService()
    }

    render() {
        return(
            <div className="Home">
                <Menu />
                <p>Sample Text</p>
            </div>
        )
    }
}
export default Home;