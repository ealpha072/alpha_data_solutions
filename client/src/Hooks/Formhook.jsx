import { useState } from "react";

//write a react hook that handles forms

const useForm = (initialState, onSubmit) => {
    const [formData, setformData] = useState(initialState)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setformData((prevformData)=>({
            ...prevformData,
            [name]:value
        }))
    }

    const resetForm = () => {
        setformData(initialState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formData)
        resetForm(initialState)
    }

    return{
        formData,
        handleInputChange,
        handleSubmit,
    }
}

export default useForm