import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import useExamInfo from '../hooks/useExamInfo'


function TestHeader({examInfo}) {

    // const [examInfo, setExamInfo] = useExamInfo();
    const [examMarks, setExamMarks] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/questions_data')
        .then(response => {
            let quesData = response.data;
            let totalMarksArray = [];
            quesData.map(ques => {
                let answers = ques.answers;
                for (const key in answers)
                totalMarksArray.push(answers[key]);
            })
            setExamMarks(totalMarksArray.reduce((result, value) => result + value));
        })
    });
    
 return (

        <div>
            <h2>{examInfo.title}</h2>
            <p>Duration: {examInfo.duration}</p>
            <p>Number of Attempts: {examInfo.attempts}</p>
            <p>Total Marks: {examMarks}</p>
        </div>
    );
}

export default TestHeader;
