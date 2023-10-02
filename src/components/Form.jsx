import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFormat, setTextParagraph } from '../redux/slice/text.slice';

const Form = () => {

    const dispatch = useDispatch();
    const { paragraph, format } = useSelector((state) => state.text);

    return (
        <form className="form-inline gap-3 d-flex">
            <div className="form-group">
                <label>Paragraphs</label>
                <div className="number">
                    <input type="number" value={paragraph} onChange={(e) => dispatch(setTextParagraph(e.target.value))} />
                </div>
            </div>
            <div className="form-group" style={{ marginLeft: "25px" }}>
                <label>Include HTML</label>
                <div className="select">
                    <select className="form-control" defaultValue={format} onChange={(e) => dispatch(setFormat(e.target.value))}>
                        <option value="html">Yes</option>
                        <option value="text">No</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default Form