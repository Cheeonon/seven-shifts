import SurveyResults from '../SurveyResults/SurveyResults';
import ValueEditor from '../ValueEditor/ValueEditor';
import './TraitCompatibility.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function TraitCompatibility() {
    const [traits, setTraits] = useState(null);

    useEffect(() => {
        axios
        .get('http://localhost:5050/traits')
        .then((response) => {
            console.log("For devs:", response);
            setTraits(response.data);
        }).catch((error) => {
            console.log("For devs:", error);
        })
    }, []);

    return (
        <div className='trait-compatibility'>
            <ValueEditor traits={traits} setTraits={setTraits} />
            <SurveyResults traits={traits} />
        </div>
    )
}
export default TraitCompatibility;