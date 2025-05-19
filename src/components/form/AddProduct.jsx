import React from 'react'
import { useForm } from 'react-hook-form'
import { MySpan } from '../MySpan';

export const AddProduct = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }

    const validationSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Enter Product name*"
            }
        },
        priceValidator: {
            required: {
                value: true,
                message: "Enter Price*"
            }
        },
        colorValidator: {
            required: {
                value: true,
                message: "Provide Color*"
            }
        },
        statusValidator: {
            required: {
                value: true,
                message: "What is the status*"
            }
        },
        categoryValidator: {
            required: {
                value: true,
                message: "Selece Category*"
            }
        }
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ width: "75%" }}>
                <h1>AddProduct</h1>
                {/* {console.log("errors", errors)} */}
                <form class="p-4 border rounded bg-light" onSubmit={handleSubmit(submitHandler)}>
                    <div class="mb-3">
                        <label class="form-label">Product Name</label>
                        <input type="text" class="form-control" {...register("productname", validationSchema.nameValidator)} name="productname" />
                        <MySpan color='red' title={errors.productname?.message}></MySpan>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input type="number" class="form-control" {...register("price", validationSchema.priceValidator)} name="price" />
                        <MySpan color='red' title={errors.price?.message}></MySpan>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Colors</label><br />
                        <div class="form-check form-check-inline">
                            <input type="color" {...register("color", validationSchema.colorValidator)} name="color" />
                            <MySpan color='red' title={errors.color?.message}></MySpan>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Status</label><br />
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" {...register("status",validationSchema.statusValidator)} name="status" value="Available" />
                            <label class="form-check-label">Available</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" {...register("status",validationSchema.statusValidator)} name="status" value="Out of Stock" />
                            <label class="form-check-label">Out of Stock</label>
                        </div>
                        <MySpan color='red' title={errors.status?.message}></MySpan>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Category</label><br/>
                        <select class="form-select" {...register("category", validationSchema.categoryValidator)} name="category">
                            <option value="">Select category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Books">Books</option>
                        </select><br/>
                        <MySpan color='red' title={errors.category?.message}></MySpan>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}
