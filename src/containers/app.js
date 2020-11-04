import React from 'react';
import {connect} from 'react-redux';
import Errorboundry from '../components/ErrorBoundry';
import List from '../components/CardList';
import './app.css';
import Scroll from '../components/Scroll';
import Searchbox from '../components/searchbox';
import {setsearchfield,requestRobots} from '../actions';

//is telling me what piece of state i need to listen to and send down as props
const mapStateToProps=state=>{
  return{
    searchField : state.searchRobots.searchField,
    robots :state.getRobots.robots,
    isPending: state.getRobots.isPending,
    err: state.getRobots.err
  }
}
// tell me what props i should listen to that are actions, that need to get dispatched
const mapDispatchToProps=(dispatch)=>{
  return {OnSearchChange :(event)=>dispatch(setsearchfield(event.target.value)),
    OngetRobots:()=>dispatch(requestRobots())
    
  }
}
class App extends React.Component{
    componentDidMount(){

      this.props.OngetRobots();
    }

     
     render(){
       
       const {searchField,OnSearchChange,robots} =this.props;
        const filterRobots = robots.filter(robot=> {
                 return robot.name.toLowerCase().includes(searchField.toLowerCase());
                });

        return !robots.length ?
            <h1>Loading...</h1> :
          
         (<div className='tc'>
            <h1 className='tc f1'>Robot friends</h1>
            <Searchbox searchchange={OnSearchChange}/>
           <hr/>
           <Scroll>
             <Errorboundry>
               <List robots={filterRobots} />
             </Errorboundry>
           </Scroll>
         </div>);
    }
}

//connect(mapStateToProps,mapDispatchToProps) : i'm listen to this part of the state and i'm interested in these actions. and it's going to give those props to the app
export default  connect(mapStateToProps,mapDispatchToProps)(App);