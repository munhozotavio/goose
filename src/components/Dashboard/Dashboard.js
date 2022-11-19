import React from "react";
import { Navigate } from "react-router-dom";
import DropdownCar from "./DropdownCar";



class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            selectedCar: null,
            token: localStorage.getItem('access_token')
        }
    }

    handleChange = (e) => {
        const credentials = {
            access_token:this.state.token,
            plate:e.target.value   
        }
        this.setState({selectedCar:e.target.value});
    }

    render() {
        if (this.state.selectedCar) return (
            <Navigate to={"/dashboard/" + this.state.selectedCar}/>
        )
        return(
        
        <div  height="60vh" width="100%">
            <h2 className="pageTitle mt-2">Selecione um veículo para exibir sua localização</h2>
            <br/>
            <DropdownCar onChange={(e) => this.handleChange(e)}/>
            <br/>
        </div>
        )
    }
}

export default Dashboard