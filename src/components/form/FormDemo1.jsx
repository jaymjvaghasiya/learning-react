import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [output, setOutput] = useState({})
    const [isSubmited, setIsSubmited] = useState(false);

    const submitHandler = (data) => {
        console.log(data);
        setOutput(data);
        setIsSubmited(true);
    }

    const validationSchema = {
        name: {
            required: {
                value: true,
                message: "Name is required."
            }
        },
        age: {
            required: {
                value: true,
                message: "Age is required."
            },
            validate: (value) => {
                console.log(value);
                return value >= 18 || "Minorities re not allowed here."
            }
        },
        contace: {
            required: {
                value: true,
                message: "contact is required."
            },
            pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalide format"
            }
        },
        hobbies: {
            required: {
                value: true,
                message: "hobbies are required."
            },
            validate: (value) => {
                console.log("value...", value);
                return value?.length >= 2 || "Minimum 2 cities are required."
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name : </label>
                <input type='text' {...register("name", validationSchema.name)} />
                <span>{errors.name?.message}</span>
            </div>
            <div>
                <label>Age : </label>
                <input type='text' {...register("age", validationSchema.age)} />
                <spa>{errors.age?.message}</spa>
            </div>
            <div>
                <label>Contact : </label>
                <input type='text' {...register("contact", validationSchema.contace)} />
                <spa>{errors.contact?.message}</spa>
            </div>
            <div>
                <label>Gender</label> <br/>
                Male : <input type='radio' value="male" {...register("gender")} />
                Female : <input type='radio' value="female" {...register("gender")} />
            </div>
            <div>
                <label>Hbbies : </label> <br/>
                Cricket <input type='checkbox' value="cricket" {...register("hobbies", validationSchema.hobbies)} /> <br/>
                Swimming <input type='checkbox' value="swimming" {...register("hobbies", validationSchema.hobbies)} /> <br/>
                Dancing <input type='checkbox' value="dancing" {...register("hobbies", validationSchema.hobbies)} /> <br/>
                <spa>{errors.hobbies?.message}</spa>
            </div>
            <div>
                <label>Country</label>
                <select {...register("country")}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div>
                <label>Color</label>
                <input type='color' {...register("color")} />
            </div>
            <div>
                <input type='submit' />
            </div>
        </form>
        {
            isSubmited && <div style={{color: output.color}}><br/>
                    Name : {output.name} <br/>
                    Age : {output.age} <br/>
                    Age : {output.contact} <br/>
                    gender : {output.gender} <br/>
                    Country : {output.country} <br/>
                    Hobbies :- <br/>
                    {
                        output.hobbies?.map((hobby) => {
                            return <li>{hobby}</li>
                        })
                    }
                </div>
        }
    </div>
  )
}
