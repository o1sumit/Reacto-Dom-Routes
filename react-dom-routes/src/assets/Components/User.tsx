import { FC } from 'react'
import { useParams } from 'react-router-dom'

const User: FC = () => {

    const params = useParams();
    const { namee } = params;



    return (
        <>
            <h1>This is {namee} page</h1>
        </>
    )
}

export default User;