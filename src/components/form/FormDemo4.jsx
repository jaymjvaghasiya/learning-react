import React from 'react'
import { useForm } from 'react-hook-form'
import { MySpan } from '../MySpan';

export const FormDemo4 = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onTouched',
        defaultValues: {name: "Ram", age: 24}
    });
    const submitHandler = (data) => {
        console.log("data", data);
    }

    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required."
            },
            minLength: {
                value: 3,
                message: "More then 3 characters are reqired."
            },
            maxLength: {
                value: 10,
                message: "No more then 10 characters."
            }
        },
        ageValidator: {
            required: {value: true,message: "Age is required."},
            min: {value: 18, message: "Minorities are not allowed."}
        }
    }

  return (
    <div style={{textAlign: "center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">Name: </label>
                <input type='text' {...register("name", validationSchema.nameValidator)} />
                <MySpan color='red' title={errors.name?.message}></MySpan>
            </div>
            <div>
                <label htmlFor="">Age: </label>
                <input type='text' {...register("age", validationSchema.ageValidator)} />
                <MySpan color='red' title={errors.age?.message}></MySpan>
            </div>
            <div>
                <input type='submit' />
            </div>
        </form>
    </div>
  )
}
