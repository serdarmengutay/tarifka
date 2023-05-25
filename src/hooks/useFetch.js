import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const { data: foodData } = await axios.get(url)
            setLoading(false)
            setData(foodData)
        } catch (err) {
            setError(err.message)
        }
    };

    
    useEffect(() => {
        fetchData();
    }, [])

    return { data, error, loading }

}

export default useFetch;