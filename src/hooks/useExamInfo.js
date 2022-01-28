import { useEffect, useState } from "react";
import axios from "axios";

const useExamInfo = () => {
    
    const [examInfo, setExamInfo] = useState({
        title: "",
        duration: "",
        attempts: 0
    });
    
    useEffect(() => {
        axios.get("http://localhost:3000/exam_info")
            .then(response => setExamInfo(response.data))

    }, []);
    
    return [examInfo, setExamInfo];
}

export default useExamInfo;