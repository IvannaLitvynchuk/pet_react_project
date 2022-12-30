import axios from "axios"
import React, { useState } from "react"
import { IProduct } from "../models" 
import { ErrorMessage } from "./ErrorMessage"

const productData: IProduct = {
    title: '',
    price: 14.5,
    description: "Lorem the the the",
    image: "https://content.api.news/v3/images/bin/8791f511b22d3b0abb8b52c575bff083?width=2048",
    category: "cooking",
    rating: {
        rate: 5,
        count: 100
    }
}

interface CreateProductsProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductsProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError("Please enter valid title")
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)
        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                className="create-title"
                placeholder="Enter book title..."
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMessage error={error} />}

            <button type="submit" className="btn-create">Create</button>
        </form>
    )
}