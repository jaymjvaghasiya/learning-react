import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {register, handleSubmit, control} = useForm({defaultValues: {medicin: [{"name":"", dose:0, frequency:0}]}});
    const {fields, append, remove} = useFieldArray({
        control, name: "medicin"
    });

    const submitHandler = (data) => {
        console.log(data);
        
    }

  return (
    <div>
        <h1>FormDemo6</h1>
        <form onClick={handleSubmit(submitHandler)}>
            {
                fields.map((f, index)=>{
                    return (
                        <div>
                            <label>Name: </label> <input type='text' {...register(`medicin.${index}.name`)} /> 
                            <label>Dose: </label> <input  type='text' {...register(`medicin.${index}.dose`)} /> 
                            <label>Frq: </label> <input type='text' {...register(`medicin.${index}.frequency`)} /> <br/>
                        </div>
                    )
                })
            }
            <input type='button' onClick={()=>{append([{"name":"", dose:0, frequency:0}])}} value='Add Medicine' /> <br/>
            <input type='submit' />
        </form>
    </div>
  )
}
