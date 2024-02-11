import {NextFunction, Request, Response} from "express";
import axios from "axios";

type address = {
    street: string,
    suit: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

type company = {
    name: string,
    catchPhrase: string,
    bs: string
}

type user = {
    id: number,
    name: string,
    username: string,
    email: string
    address: address,
    phone: string,
    website: string,
    company: company
}

export function test (req: Request, res: Response, next: NextFunction){

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            const names = response.data.map((user: user) => {
                return user.name
            })
            console.log(names)
        res.status(200).json({names: names})
        })

    // console.log(names)
}