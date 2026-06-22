type Item = { id: number; name: string }
type Items = Item[]

export const arrayColors:Items = [
    {id : 1, name: "red"},
    {id : 2, name: "yellow"},
    {id : 3, name: "green"},
    {id : 4, name: "blue"},
]

function Color({ item }: { item: Item }) {
    return <li>{item.name}</li>
}


export function Colors ({ items }: { items: Items }) {

    return (
        <>
            <h1>COLORS</h1>
            <ul>
                {items.map(item => (
                    <Color key={item.id} item={item} />
                ))}
            </ul>
        </>
    )
}