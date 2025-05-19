import React from 'react'

export const MapDemo2 = () => {

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
    <div>
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
                        return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.status == true ? "Active" : "Not Active"}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
