import React from 'react';
import '../styles/CALL2A.scss'
import Form from '../components/Form'

const CALL2A = ({ call, linkURL, writtenLink }) => (
    <div class="call-action">
        <span>{call} <a href={linkURL} download>{writtenLink}</a></span>
        <Form/>
    </div>
)

export default CALL2A


