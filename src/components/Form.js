import React from 'react'
import { Component } from 'react'
import FormData from './FormData'
export default class ClassCompo extends Component {
 
        
       state={
           Name: "",
           Dept:"",
           Rate:"",
           EmpData:[],
           clicked:true
        }

  toggleFunction=()=>{
    this.setState({clicked: !this.state.clicked})
  }
  
changeHandle=(event)=>{
  
    this.setState({[event.target.name]:event.target.value})
    this.setState({[event.target.dept]:event.target.value})
   this.setState({[event.target.rate]:event.target.value})
  
   
  }
clickHandle=()=>{
 
  let newObj={
    name:this.state.Name,
    dep:this.state.Dept,
    rate:this.state.Rate,
  }
  this.state.EmpData.push(newObj);
  this.setState({
    EmpData:this.state.EmpData,
    Name: "",
    Dept:"",
    Rate:"",
    clicked:!this.state.clicked
  })
  
}

  render() {
    return (
    <>

        {
          this.state.clicked?
          <div className='midbox'>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form>

      <label htmlFor="name">Name:</label>
      <input type='text' id='name' name="Name"   value={this.state.Name} onChange={this.changeHandle}/> <br/>
     
      <label htmlFor="dept">Departnment:</label>
      <input type='text' id='dept' name="Dept"   value={this.state.Dept} onChange={this.changeHandle}/> <br/>

      <label htmlFor='rating' > Rating:</label>
      <input type='text' id='rating' name="Rate"  value={this.state.Rate} onChange={this.changeHandle}/> <br/>
     
      <button type='button' onClick={this.clickHandle}>Submit</button>
     
      </form>
      </div>:<FormData value={this.state.EmpData} toggle={this.toggleFunction} />
        }

</> 
  
    )
  }
}
