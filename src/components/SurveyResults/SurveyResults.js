import './SurveyResults.scss'
import axios from 'axios';
import { useState, useEffect } from 'react';

function SurveyResults({traits}) {
    const [applicants, setApplicants] = useState(null);

    useEffect(() => {
        axios
        .get(`http://localhost:5050/applicants`)
        .then((response) => {
            console.log("For devs:", response);
            setApplicants(response.data);
        }).catch (error => {
            console.log("For devs:", error);
        })
    }, [traits]);

    if (!applicants) {
        return
    }

    console.log(applicants)

    return (
        <div className='survey-results'>
            <h1 className='survey-results__title'>Candidates Survey Results</h1>
            <div className='survey-results__subtitle-row'>
                <h2 className='survey-results__subtitle'>Applicant</h2>
                <h2 className='survey-results__subtitle'>Compatibility Score</h2>
            </div>
            <div className='survey-results__candidates'>
                {
                    applicants.map((applicant) => {
                        return (
                        <div className='survey-results__field-row'>
                            <div className='survey-results__field-container'>
                                <p className='survey-results__field'>{applicant.name}</p>
                            </div>
                            <div className='survey-results__field-container'>
                                <p className='survey-results__field'>{applicant.score}</p>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default SurveyResults;