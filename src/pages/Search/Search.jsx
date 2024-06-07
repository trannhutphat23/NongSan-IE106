import React, { useContext, useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import _ from 'lodash';
import RecommentSelect from "../Store/RecommentSelect";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

const Search = () => {
    const { items } = useContext(AppContext);
    const params = useParams();
    const [keywords, setKeywords] = useState([]);

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    useEffect(() => {
        const searchQuery = params.search.toLowerCase();
        const queryWords = searchQuery.split(' ').map(word => removeAccents(word));
        setKeywords(queryWords);
    }, [params.search])

    return (
        <div className="relative w-full h-auto flex flex-col items-center py-5 mb-20 ">
            <div className="w-11/12 mt-5">
                <p className="text-xl">Tìm kiếm của: <span className="font-bold">"{params.search}"</span></p>
                <div className="grid grid-cols-4  mt-5 gap-5">
                    <div className="col-span-3 grid grid-cols-4 gap-5">
                        {items.map((value, index) => {
                            for (let i = 0; i <= keywords.length; i++) {
                                if (removeAccents(value.name.toLowerCase()).includes(keywords[i])) {
                                    return (
                                        <Item
                                            key={index}
                                            itemColor={"green-800"}
                                            value={value}
                                        />
                                    )
                                }
                            }
                        })}
                    </div>
                    
                    <div className="col-span-1">
                        <RecommentSelect />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;