import React, { Component } from 'react'

export default class FormData extends Component {


    constructor(props){
        super(props);
console.log(this.props.value)
    }
        
  render() {
    return (
    
    <>
           <h1 className='heading2'>EMPLOYEE FEEDBACK DATA</h1>
          <div className='display'>  
      {
        this.props.value.map((item,index)=>{
          return(
       
          <div className='cont' key={index}>
                Name: {item.name} || 
                Departnment: {item.dep}|| 
                Rating: {item.rate}
          </div>
         
          )
        })
      }
     
      </div>
      <div className='bottom'>
      <button  className='button2' type='button' onClick={this.props.toggle} >Go Back</button> 
      </div>
      </>
        
   )
  }
}
