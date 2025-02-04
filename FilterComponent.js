import {useState} from 'react';

function App() {

    const itemList = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

    const [items, setItems] = useState(itemList);
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        const searchValue = e.target.value;
        setSearch(searchValue);

        if (searchValue === "") {
            setItems(itemList);
            return; 
        }

        const filteredItems = itemList.filter(item => 
            item.toLowerCase().includes(searchValue.toLowerCase())
        );

        setItems(filteredItems);
    }

    return (
        <div>
            <input 
            type ="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search items..." />

            <ul>
                {items.length > 0 ? (
                    items.map(item => <li key={item}>{item}</li>)
                ) : (
                    <li>No items found</li>
                )}
            </ul>

        </div>
    );
}