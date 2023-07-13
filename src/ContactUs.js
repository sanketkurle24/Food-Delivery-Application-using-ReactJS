import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
class ContactUs extends React.Component{
    render(){
        return (
            <div className="ui container">
                <h1>Contact Us</h1>
    <Form>
        
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button className="btn btn-primary" type='submit'>Submit</Button>
  </Form>
  <br></br>
  </div>
  
            
            
        );
    }
}
export default ContactUs;