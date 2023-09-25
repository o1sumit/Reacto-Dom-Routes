import { FC } from "react";
import { useSearchParams } from 'react-router-dom'

const FilterComponent: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');



    return (
        <>
            <h1>i am filter data page</h1>
            <p>It's {name}</p>
            <br />
            <button onClick={() => setSearchParams({ name: "Rayan" })} >Set Search</button>
        </>
    )
}

export default FilterComponent;