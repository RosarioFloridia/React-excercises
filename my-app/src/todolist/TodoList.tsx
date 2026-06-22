import { useState } from "react";

type Item = { id: number; name: string }
type Items = Item[]

export const toDoList:Items = []

function ItemList({ item, onRemove }: { item: Item, onRemove: (id: number) => void;}) {
    return (
        <>
            <li>
                {item.name}
                <button type="button" onClick={()=> onRemove(item.id)}>Rimuovi!</button>
            </li>
        </>
    )
}

export function ToDoList({ items }: { items: Items }) {
    const [listItems, setListItems] = useState(items)
    const [itemValue, setItemValue] = useState("")
    const [idItems, setID] = useState(1)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
            setItemValue(event.target.value)
    }

    function handleAdd() {
        

        if(!itemValue.trim()) return;
       

        const newItem: Item = {
            id: idItems,
            name: itemValue
        }

        setListItems([...listItems, newItem])
        setItemValue("")
        setID(prevId => prevId + 1);

    }

    function handleRemove(id: number) {
        setListItems(listItems.filter((item) => item.id !== id));
    }

    function handleReset() {
        setItemValue("")
        setListItems([])
    }

    return (
        <>
            <h1>LIST</h1>
            <form>
                <div>
                    <label htmlFor="add">Aggiungi item</label>
                    <input type="text"  id="add" name="add" value={itemValue}  onChange={handleChange}/>
                </div>
                <button type="button" onClick={handleAdd}>Aggiungi!</button>
                <button type="button" onClick={handleReset}>Reset!</button>
            </form>

            <h2>To-do List</h2>
            <ul>
                {listItems.map(item => (
                    <ItemList key={item.id} item={item} onRemove={handleRemove}/>
                ))}
            </ul>
        </>
    )
}