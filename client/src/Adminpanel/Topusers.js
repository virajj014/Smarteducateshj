import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dataTable from 'react-data-table-component'



const Topusers = () => {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {

        //users API
        try {
            const response = await axios.get('https://restcountries.com/v2/all')
            setCountries(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCountries();
    }, [])

    const columns = [{
        name: "Country Name",
        selector: row => row.name
    },
    {
        name: "Country Native Name",
        selector: row => row.nativeName
    },
    {
        name: "Country Capital",
        selector: row => row.capital
    },
    {
        name: 'Country Flag',
        selector: (row) => <img width={50} height={50} src={row.flag} />
    }
    ]

    return (
        <dataTable columns={columns} data={countries} pagination title='Country List' fixedHeader fixedHeaderScrollHeight='600px' selectableRows selectableRowsHighlight highlightOnHover />
    )
}

export default Topusers