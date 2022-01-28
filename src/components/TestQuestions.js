import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RadioGroup from './RadioGroup';
import QuestionText from './QuestionText';
import useQueData from '../hooks/useQueData';

function TestQuestions({examInfo}) {

   const  [quesData, setQuesData] = useQueData();

    return (
        <div>
            {
                quesData.map(ques => {
                    
                    return <div key={ques.id}>
                        <QuestionText questionText={ques.question_text} />
                        <RadioGroup noa={examInfo.attempts} options={ques.options} ques_id={ques.id} />
                    </div>
                })
            }

        </div>
    )
}


export default TestQuestions;
