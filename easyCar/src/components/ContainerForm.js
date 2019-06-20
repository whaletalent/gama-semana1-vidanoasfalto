import React, { Component } from 'react'
import {Card, Column} from 'rbx'
import Form from './Form'

export default class ContainerForm extends Component {
    render(){
        return(
            <Column.Group centered>
                <Column  size='three-fifths'>
                    <Card id="containerForm">
                        <Form/>
                    </Card>
                </Column>
            </Column.Group>
        )
    }
}