import React, { useState, useEffect } from "react"
import Category from "./../Category/index"
import { mockCategories } from "../../../api/db.json"
import { List, Item } from "./syles"
import { useFetchData } from './../../Hooks/useFetchData'
import { useFixedContent } from '../../Hooks/useFixedContent'

const ListOfCategories = () => {
    const API = "https://petgram-server-diego.diegocardenas.now.sh/categories"
   
    const { data, loading } = useFetchData (API)

    const renderList = (fixed) =>{      
        return (
            <List fixed={fixed}>
                { loading && <p>Cargando</p>}
              
                {data.map((cat) => (
                    <Item key={cat.id}>
                        <Category {...cat} path={`/pet/${cat.id}`} />
                    </Item>
                ))}
            </List>
        )
    }    
    
    return (
        <>
            {renderList()}
            {useFixedContent() && renderList(true)}
        </>
    );
};

export default ListOfCategories;
