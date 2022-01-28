import React from 'react';
import disableRadioGroup from '../utils/disableRadioGroup';

function RadioGroup({options, ques_id, noa}) {
  // noa --> number of attempts
  let optionsArray = Object.entries(options);
    return (
        <div>
            {
                optionsArray.map((array, index) => {
                    let id = ques_id.toString() + index.toString();
                    let uniqueKey = ques_id.toString() + index.toString();
                    return (
                        <div key={uniqueKey}>
                            <input 
                            type='radio' 
                            name = {ques_id} 
                            id={id} 
                            value={array[0]}
                            // onClick={(e) => disableRadioGroup(e.target.name)}
                            />
                            <label htmlFor={id}>
                                {array[1]}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
  
  }

export default RadioGroup;
