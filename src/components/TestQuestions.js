
import React, { useState, useEffect } from 'react';
import RadioGroup from './RadioGroup';
import QuestionText from './QuestionText';
import useQueData from '../hooks/useQueData';
import collectAnswers from '../utils/collectAnswers';


function TestQuestions({ examInfo }) {

    const [quesData, setQuesData] = useQueData();


    return (
        <div>
            <form id='quiz-form' >
                {
                    quesData.map(ques => {

                        return <div key={ques.id}>
                            <QuestionText questionText={ques.question_text} />
                            <RadioGroup noa={examInfo.attempts} options={ques.options} ques_id={ques.id} />

                        </div>
                    })
                }
                
            </form>
            <button onClick={collectAnswers}>Submit</button>
        </div>
    )
}


export default TestQuestions;

// onClick={collectAnswers}