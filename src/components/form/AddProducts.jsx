import axios from 'axios';
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const AddProducts = () => {

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            product: [
                { name: "", price: 0, description: "", colors: [], unit: 0, isAvailable: false }
            ]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "product"
    });

    const submitHandler = async (data) => {
        console.log(data);

        for (let i = 0; i < data.product.length; i++) {
            data.product[i].isAvailable = data.product[i].isAvailable === '1'
        }

        const res = await axios.post("https://node5.onrender.com/product/addproducts", data.product);
        console.log(res);

    }

    return (
        <div>
            <h2>AddProducts</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    fields.map((f, index) => {
                        return (
                            <div>
                                <label>Name: </label> <input type='text' {...register(`product.${index}.name`)} />
                                <label>Price: </label> <input type='text' {...register(`product.${index}.price`)} />
                                <label>Unit: </label> <input type='text' {...register(`product.${index}.unit`)} />
                                <label>Description: </label>
                                <textarea {...register(`product.${index}.description`)}></textarea>
                                <label>Colors: </label>
                                   Blue <input type="checkbox" {...register(`product.${index}.colors`)} value="blue" />
                                   Red <input type="checkbox" {...register(`product.${index}.colors`)} value="red" />
                                <label>isAvailable: </label>
                                Available <input type="radio" {...register(`product.${index}.isAvailable`)} value="1" />
                                Out of Stock <input type="radio" {...register(`product.${index}.isAvailable`)} value="0" /> <br />
                            </div>
                        )
                    })
                }
                <input type='button' onClick={() => { append([{ name: "", price: 0, description: "", colors: [], unit: 0, isAvailable: false }]) }} value='Add Producr' />
                <input type='submit' />
            </form>
        </div>
    )
}
