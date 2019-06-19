import React, { Component, Fragment } from 'react'
import {Field, Control, Input, Label, Select, Help, Textarea, Button, Radio} from 'rbx'

class ContactForm extends Component {
    render(){
        return (
            <Fragment>
                <form>
                    <Field horizontal>
                        <Field.Label size="normal">
                        <Label>Seus dados</Label>
                        </Field.Label>
                        <Field.Body>
                        <Field>
                            <Control expanded iconLeft>
                            <Input type="text" placeholder="Nome Completo" />
                            </Control>
                        </Field>
                        <Field>
                            <Control expanded iconLeft iconRight>
                            <Input
                                placeholder="Email@exemplo.com"
                                type="email"
                            />
                            </Control>
                        </Field>
                        </Field.Body>
                    </Field>

                    <Field horizontal>
                        <Field.Label size="normal">
                        <Label>Assunto</Label>
                        </Field.Label>
                        <Field.Body>
                        <Field>
                            <Control>
                            <Input
                                placeholder="Assunto da mensagem"
                                type="text"
                            />
                            </Control>
                            {/* <Help color="danger">This field is required</Help> */}
                        </Field>
                        </Field.Body>
                    </Field>

                    <Field horizontal>
                        <Field.Label size="normal">
                        <Label>Mensagem</Label>
                        </Field.Label>
                        <Field.Body>
                        <Field>
                            <Control>
                            <Textarea placeholder="Como podemos ajudá-lo?" />
                            </Control>
                        </Field>
                        </Field.Body>
                    </Field>

                    <Field horizontal>
                        <Field.Label /> {/* Left empty for spacing  */}
                        <Field.Body>
                        <Field>
                            <Control>
                            <Button>Enviar</Button>
                            </Control>
                        </Field>
                        </Field.Body>
                    </Field>
                    </form>
            </Fragment>
        )
    }
}

export default ContactForm