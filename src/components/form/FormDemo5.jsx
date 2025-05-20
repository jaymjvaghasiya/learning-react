import React from 'react'
import { useForm } from 'react-hook-form'
import { MySpan } from '../MySpan';
import { useState } from 'react';

export const FormDemo5 = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"});
    const [data, setdata] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitHandler = (data) => {
        console.log(data);
        setdata(data)
        setIsSubmitted(true);
    }

    const validationSchema = {
        nameValodator: {
            required: {value: true, message: "Name is required."},
            minLength: {value: 3, message: "More then 3 characters are required."}
        },
        superpowersValidators: {
            validate: (value) => {
                return value != 0 || "Please select a super power.";
            }
        },
        storyValidator: {
            maxLength: {value: 200, message: "No more then 200 characters."}
        },
        levelValidator: {
            required: {value: true, message: "Level is required."},
            validate: (value) => {
                return value >= 1 && value <= 100 || "Please enter between 1 and 100."
            }
        },
        alienValidator: {
            required: {value: true, message: "Please select any one of them."},
        },
        weaponsValidator: {
            required: {value: true, message: "Please select weapons."},
            validate: (value) => {
                return value?.length >= 2 || "Atleast two weapone is required."
            }
        }

    }

  return (
    <div style={{background: "white", width: "100vw", padding: "5rem 0"}}>
        <div style={{margin: "5rem 0 0 10rem"}}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Superhero Name</label>
                    <input type='text' {...register("name", validationSchema.nameValodator)}/>
                    <MySpan color='red' title={errors.name?.message}></MySpan>
                </div>
                
                <div>
                    <label>Superpower</label>
                    <select {...register("superpowers", validationSchema.superpowersValidators)}>
                        <option value='0'>Select Powers</option>
                        <option value='Invisibility'>Invisibility</option>
                        <option value='Flight'>Flight</option>
                        <option value='Strength'>Strength</option>
                        <option value='Speed'>Speed</option>
                    </select>
                    <MySpan color='red' title={errors.superpowers?.message}></MySpan>
                </div>
                
                <div>
                    <label>Origin Story</label>
                    <textarea {...register("story",validationSchema.storyValidator)}></textarea>
                    <MySpan color='red' title={errors.story?.message}></MySpan>
                </div>
                
                <div>
                    <label>Power Level</label>
                    <input type='number' {...register('level',validationSchema.levelValidator)} />
                    <MySpan color='red' title={errors.level?.message}></MySpan>
                </div>
                
                <div>
                    <label>Is Alien?</label>
                    Yes <input type='radio' value='yes' {...register('is_alien',validationSchema.alienValidator)} />
                    No <input type='radio' value='no' {...register('is_alien',validationSchema.alienValidator)} />
                    <MySpan color='red' title={errors.is_alien?.message}></MySpan>
                </div>

                <div>
                    <label>Costume Color</label>
                    <input type='color' {...register('color')} />
                </div>

                <div>
                    <label>Weapons</label>
                    Gun <input type='checkbox' value='Gun' {...register('weapons',validationSchema.weaponsValidator)} />
                    Shild <input type='checkbox' value='Shield' {...register('weapons',validationSchema.weaponsValidator)} />
                    Sward <input type='checkbox' value='Sword' {...register('weapons',validationSchema.weaponsValidator)} />
                    None <input type='checkbox' value='None' {...register('weapons',validationSchema.weaponsValidator)} />
                    <MySpan color='red' title={errors.weapons?.message}></MySpan>
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
            {
                isSubmitted && <div style={{color: data.color}}>
                    Name: {data.name} <br/>
                    Super Power: {data.superpowers} <br/>
                    Origin Story: {data.story} <br/>
                    Power level: {data.level} <br/>
                    Is Aliean: {data.is_alien} <br/>
                    Costume Color: {data.weapons} <br/>
                    {
                        data.weapons?.map((w)=>{
                            return <li>{w}</li>
                        })
                    }
                    </div>
            }
        </div>
    </div>
  )
}
