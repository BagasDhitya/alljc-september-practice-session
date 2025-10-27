import React from 'react'

export interface ItemListProps {
    id: number,
    title: string,
    isCompleted: boolean
}

export default function ItemList({ id, title, isCompleted }: ItemListProps) {
    return (
        <div id={String(id)} style={{ padding: 10, border: 1, color: 'brown', display: 'flex', gap: 3 }}>
            <input
                placeholder='type your todo here ...'
                checked={isCompleted}
                type='checkbox'
            />
            <p>{title}</p>
        </div>
    )
}
