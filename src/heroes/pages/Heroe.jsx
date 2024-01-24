import { Navigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const Heroe = () => {

    const { id } = useParams();

    const hero = getHeroeById(id);

    console.log(hero);

    if(!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div>Heroe</div>
    )
}
