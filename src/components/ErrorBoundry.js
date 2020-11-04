import React from 'react';

class Errorboundry extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError : false
        }
    }
    componentDidCatch(err,info){
        this.setState({hasError : true});
    }
    render(){
        return this.state.hasError ?
           <h1>Oooops you have an error</h1> :
               this.props.children
           
    }
}
export default Errorboundry;