// Product.js
import * as React from 'react';
import { UserProvider } from '../Context/CartContext';
import { useParams } from 'react-router-dom'; // Import useParams hook
import ItemForAllItems from '../components/ItemForAllItems';
import { getDatabase, ref, child, get } from 'firebase/database';

const AllItems = () => {
    const {ItemtId} = useParams()
    const dbRef = ref(getDatabase());
    const itemsRef = child(dbRef, 'itemss');

    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        get(itemsRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItems(Object.values(snapshot.val()));
            } else {
                console.log('No data available');
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
 

    return (
        <>
            {items.map((item) => (
                // Only render the item that matches the id
                item.id == ItemtId && (
                    <div key={ItemtId}>
                        {/* <NavLink to='/Product'> */}
                        <ItemForAllItems {...item} />
                        {/* </NavLink> */}
                    </div>
                )
            ))}
        </>
    );
}
export default AllItems;
