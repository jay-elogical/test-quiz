import React, { useEffect, useState } from 'react';

import './test.css'
import axios from 'axios';
import TestHeader from '../../components/TestHeader';
import TestQuestions from '../../components/TestQuestions';
import useExamInfo from '../../hooks/useExamInfo';
// import useQueData from '../../hooks/useQueData';
 

function Test() {

    const [examInfo, setExamInfo] = useExamInfo();
   

    return <div >
           <TestHeader examInfo={examInfo}  />
           <TestQuestions examInfo={examInfo} />
        </div>
    
}

export default Test;
