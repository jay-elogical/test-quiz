import React, {useEffect, useState} from 'react';
import { Checkbox, Typography, FormControl, FormControlLabel, RadioGroup, Radio, FormGroup, TextField } from '@mui/material';

import './test.css'
import axios from 'axios';

function Test() {

    const [queData, setQueData] = useState([{options: []}])
    
    useEffect(() => {
        axios('http://localhost:3000/questions_data').
        then(response => setQueData(response.data))
    }, []);

    return <div className='main_container'>
        <div className='test-description'>
            <h2>Test Instructions</h2>
            <p>Test Description</p>
        </div>
        <div className='questions_container'>

            {queData.map(ques => {
                let optionGroup = <FormControl></FormControl>
                if (ques.question_type == 'Single Choice')
                    optionGroup =
                        <FormControl>
                            <RadioGroup>
                                {
                                    ques.options.map(opt => {
                                        return <FormControlLabel value={opt} control={<Radio />} label={opt} />
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                else if (ques.question_type == 'Multi Choice')
                    optionGroup =
                        <FormControl>
                            <FormGroup>
                                {
                                    ques.options.map(opt => {
                                        return <FormControlLabel value={opt} control={<Checkbox />} label={opt} />
                                    })
                                }
                            </FormGroup>
                        </FormControl>
                else 
                optionGroup = <TextField  />


                return (
                    <div key={ques.id} className='question_card'>
                        <Typography>
                            Question {ques.id}: {ques.question_content}
                        </Typography>
                        <div>{optionGroup}</div>
                        <Typography className='question_type'>
                            Type: {ques.question_type}
                        </Typography>
                        <Typography className='question_num_of_attempts' >
                            Number of Attempts: {ques.number_of_attempts}
                        </Typography>

                    </div>
                )
            })}
        
        <button>Submit Test</button>

        </div>
    </div>;
}

export default Test;
