import { Col,Row,Button, Form,Container} from "react-bootstrap";
import {useState} from "react";





export function RegisterAdmin() {

   const [formData,setFormData]= useState({email:'' ,password:'',name:'', phone:''})
const handleFieldChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})

}
const handleSubmit=(e)=>{
    e.preventDefault();
console.log(formData);



}

    return (
        <Container>
            <h4 style={{ backgroundColor: "beige",textAlign: "center",padding:"20px" }}>Register yourself now</h4>
           
            <Container style={{backgroundColor: "lightblue",padding:"20px",boxRadius:"10px"}}>
                <Form onSubmit={handleSubmit}>
                    <Row >
                        <Col lg={4} >
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleFieldChange} required/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handleFieldChange} required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" name="name" onChange={handleFieldChange} required/>
                            </Form.Group> 
                            <Form.Group className="mb-3">
                                <Form.Label>Phone no</Form.Label>
                                <Form.Control type="number" placeholder="Enter your no" name="phone" onChange={handleFieldChange}  required />
                            </Form.Group>
                            </Col>
                        
                    </Row>
                    <Row>
                        <Col lg={4}> 
                        <Button type="submit" variant="primary">Register</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        
       
        </Container>
        
    )


}