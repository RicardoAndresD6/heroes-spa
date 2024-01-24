import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";


export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q  = ''} = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const {searchText, onInputChange,onResetForm} = useForm({
        searchText: ''
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if(searchText.trim().length <= 1) return;
        
        let text_formated = searchText.trim().toLowerCase();

        navigate(`/search?q=${text_formated}`);
    };

    return (
        <>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            type="submit"
                            className="btn mt-2 btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary">
                        Search a hero
                    </div>

                    <div className="alert alert-danger">
                        Hero not with <b>{q}</b> found
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }

                </div>
            </div>

            
        </>
    )
}
