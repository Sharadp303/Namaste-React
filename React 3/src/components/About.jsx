import React, { Component } from 'react'
// import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

class About extends Component{
  constructor(props){
    super(props)

  }
  componentDidMount(){
    //
  }
  componentDidUpdate(){
    //
  }
  componentWillUnmount(){
    //
  }

  render(){
    return (
          <div className=''>
          {/* <User name={"SHARAD"}/> */}
          <div>
          <UserContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
          </div>
          <div className=''>
          <UserClass name={"Sharad"} location={"Mumbai"}/>
          </div>
          </div>
        )

  }

}


// const About = () => {
//   return (
//     <>
//     {/* <User name={"SHARAD"}/> */}
//     <UserClass name={"Sharad"} location={"Mumbai"}/>
//     </>
//   )
// }

export default About;