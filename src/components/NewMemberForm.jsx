import { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";

const initialForm = {
    fullName: "",
    email: "",
    notes: "",
};
export default function NewMemberForm({ addMember }) {
    const [formData, setFormData] = useState(initialForm);
    
    function handleChange(event) {
        const {name, value} = event.target;
        
    setFormData({...formData, [name]: value,}); 
    }
    function handleSubmit(event) {
        event.preventDefault();

        const newMember = {
            fullName: formData.fullName,
            email: formData.email,
            notes: formData.notes,
        };
    axios
    .post("https://jsonplaceholder.typicode.com/posts", newMember)
    .then(() => {
        addMember(newMember);
        setFormData(initialForm);
    })
    .catch((error) => {
        console.error(error);
    });     
  }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="fullName"> Ad Soyad</Label>
                <Input
                 id="fullName"
                 name="fullName"
                 type="text"
                 value={formData.fullName}
                 onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                 id="email"
                 name="email"
                 type="email"
                 value={formData.email}
                 onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="notes">Notlar</Label>
                 <Input
                 id="notes"
                 name="notes"
                 type="textarea"
                 value={formData.notes}
                 onChange={handleChange}
                />
            </FormGroup>
            <Button type="submit">Kaydet</Button>
        </Form>
    );
}