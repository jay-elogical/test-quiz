import { useEffect, useState } from "react";
import axios from "axios";

const useQueData = () => {
    const [quesData, setQuesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/questions_data')
            .then(response => setQuesData(response.data))
    }, []);

    return [quesData, setQuesData];

}

export default useQueData;