'use client'
import { useState } from "react"
import ItemList, { ItemListProps } from "@/components/ItemList/ItemList"

export default function ReusablePage() {

    const todos: ItemListProps[] = [
        {
            id: 1,
            title: 'Todo 1',
            isCompleted: false
        },
        {
            id: 2,
            title: 'Todo 2',
            isCompleted: false
        },
        {
            id: 3,
            title: 'Todo 3',
            isCompleted: false
        }
    ]

    const [listTodo, setListTodo] = useState(todos)

    return (
        <div>
            {
                listTodo?.map((item) => {
                    return (
                        <ItemList
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            isCompleted={item.isCompleted}
                        />
                    )
                })
            }
        </div>
    )
}
