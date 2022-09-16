import './ValueEditor.scss'
import axios from 'axios';

function ValueEditor({traits, setTraits}) {    
    function handleBlur(event) {
        let traitObj = {};
        traitObj[event.target.form.trait.value] = Number(event.target.form.importance.value);

        axios.put('http://localhost:5050/traits', traitObj)
        .then((response) => {
            console.log("For devs:", response);
            setTraits(response.data);
        }).catch((error) => {
            console.log("For devs:", error);
        })
    }

    if (!traits) {
        return
    }

    return (
        <div className='value-editor'>
            <h1 className='value-editor__title'>Company Values Editor</h1>
            <div className='value-editor__subtitle-row'>
                <h2 className='value-editor__subtitle'>Values</h2>
                <h2 className='value-editor__subtitle'>Importance %</h2>
            </div>
            {
                Object.keys(traits).map((trait, i) => {
                    return (
                        <form key={i} className='value-editor__field-row' onBlur={handleBlur}>
                            <div className='value-editor__field-container'>
                                <input className='value-editor__field-input' readOnly id="trait" name="trait" type="text" value={trait}/>
                            </div>
                            <div className='value-editor__field-container'>
                                <input className='value-editor__field-input' id="importance" name="importance" type="text" defaultValue={traits[trait]}  />
                            </div>
                        </form>
                    )
                })
            }
        </div>
    )
}

export default ValueEditor;