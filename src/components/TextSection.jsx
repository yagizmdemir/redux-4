import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchText } from '../redux/slice/text.slice';

const TextSection = () => {
    const dispatch = useDispatch();

    const { items, paragraph, format } = useSelector((state) => state.text);

    useEffect(() => {
        dispatch(fetchText({ paragraph, format }));
    }, [dispatch, format, paragraph]);

    return (
        <p className='output jumbotron mt-4'>
            {items}
        </p>
    )
}

export default React.memo(TextSection)