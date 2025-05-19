import React from 'react'

export const MapDemo = () => {

    const users = [
        {
            name: 'Ram',
            age: 23,
            gender: 'male',
            status: true
        },
        {
            name: 'Sita',
            age: 21,
            gender: 'female',
            status: true
        },
        {
            name: 'Shyam',
            age: 24,
            gender: 'male',
            status: true
        }
    ]

    return (
        <div>
            {
                users.map((user) => {
                    return <li>{user.name}-{user.age}</li>
                })
            }
        </div>
    )
}
