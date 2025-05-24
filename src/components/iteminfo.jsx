import React from "react";
import { useParams } from "react-router-dom";

const ItemInfo = ({ items }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {id} = useParams();
    const item = items.find((item) => item.id === id);
    return (
        <div>
            <h1>Item Info</h1>
            <h3>{item.name}</h3>
            <h2>{item.price}</h2>
            <h3>Search Param{searchParams.get("q")}</h3>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    );
};

export default ItemInfo;