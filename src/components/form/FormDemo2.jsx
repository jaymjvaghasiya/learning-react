import React from 'react'
import { useForm } from 'react-hook-form'
import { MySpan } from '../MySpan';

export const FormDemo2 = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }

    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required*"
            }
        },
        ageValidator: {
            required: {
                value: true,
                message: "Age is required*"
            }
        }
    }

  return (
    <div style={{textAlign: "center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name : </label>
                <input type='text' {...register("name", validationSchema.nameValidator)} />
                <MySpan color='red' title={errors.name?.message}></MySpan>
            </div>
            <div>
                <label>Age: </label>
                <input type='text' {...register("age", validationSchema.ageValidator)} />
                <MySpan color='red' title={errors.age?.message}></MySpan>
            </div>
            <div>
                <input type='submit'/>
            </div>
        </form>
    </div>
  )
}
