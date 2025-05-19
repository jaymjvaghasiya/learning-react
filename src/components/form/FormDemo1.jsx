import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register, handleSubmit} = useForm();
    const [output, setOutput] = useState({})
    const [isSubmited, setIsSubmited] = useState(false);

    const submitHandler = (data) => {
        // console.log(data);
        setOutput(data);
        setIsSubmited(true);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name : </label>
                <input type='text' {...register("name")} />
            </div>
            <div>
                <label>Age : </label>
                <input type='text' {...register("age")} />
            </div>
            <div>
                <label>Gender</label> <br/>
                Male : <input type='radio' value="male" {...register("gender")} />
                Female : <input type='radio' value="female" {...register("gender")} />
            </div>
            <div>
                <label>Hbbies : </label> <br/>
                Cricket <input type='checkbox' value="cricket" {...register("hobbies")} /> <br/>
                Swimming <input type='checkbox' value="swimming" {...register("hobbies")} /> <br/>
                Dancing <input type='checkbox' value="dancing" {...register("hobbies")} /> <br/>
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
