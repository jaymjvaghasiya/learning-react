import React from 'react'

export const MapDemo3 = () => {
    const users = [
        {
            id: 101,
            name: 'Ram',
            age: 23,
            gender: 'male',
            status: true
        },
        {
            id: 102,
            name: 'Sita',
            age: 21,
            gender: 'female',
            status: true
        },
        {
            id: 103,
            name: 'Shyam',
            age: 24,
            gender: 'male',
            status: true
        }
    ]

  return (
    <div style={{width: '100%'}}>
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return <tr style={{backgroundColor: user.gender == "female" && "Pink"}}>
                                <td>{user.id}</td>
                                <td style={{color: user.name.length > 3 && "Red"}}>{user.name}</td>
                                <td>{user.age}</td>
                                <td style={{backgroundColor: user.gender == "male" ? "Blue" : "Yellow"}}>{user.gender}</td>
                                <td>{user.status == true ? "Active" : "Not Active"}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
