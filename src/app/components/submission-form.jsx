"use client"

import SubmitButton from "@/app/components/submit-button";
import InputName from "@/app/components/input-name";
import {useState} from "react";
import InputHeight from "@/app/components/input-Height";
import InputEmail from "@/app/components/Input-email";

export default function SubmissionForm() {
    const [formData, setFormData] = useState({
        name: '',
        height: 0,
        email: ''
    });
    return(
        <div className="px-6 py-8">
            <form onSubmit={(e) => handleSubmit(e,formData)}
                  className="space-y-6">
                <InputName
                    onChange={(e)=>handleChange(e,setFormData,formData)}
                    formData={formData}
                />
                <InputHeight
                    onChange={(e)=>handleChange(e,setFormData,formData)}
                    formData={formData} />
                <InputEmail
                    onChange={(e)=>handleChange(e,setFormData,formData)}
                    formData={formData}/>
                <SubmitButton/>
            </form>
        </div>
    )
}
const handleChange = (e,setFormData,formData) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = async (e,formData) => {
    e.preventDefault();

    const payload = {
        ...formData,
        height: parseInt(formData.height, 10) // 👈 force integer
    };

    try {
        const res = await fetch('http://localhost:4000/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log(JSON.stringify(payload));

        const data = await res.json();

        if (res.ok) {
            alert('Success!');
        } else {
            alert('Error');
        }
    } catch (err) {
       alert('Error');
    }
};
