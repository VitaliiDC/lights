import React from 'react';
import {Formik, Form, Field} from 'formik';
import { Button, TextField } from '@mui/material';

const EditForm = props => {
    return (
        <Formik
            initialValues={{value: props.fieldValue}}
            onSubmit={(values, actions) => {
                alert(values.value);
                actions.setSubmitting(false);
            }}
        >
            <Form>
                <Field 
                    name="value"
                    component={() => <TextField
                            className="display"
                            fullWidth
                            multiline
                            rows={6}
                            value={props.fieldValue}
                        />}
                />
                <Button 
                    variant="outlined" 
                    type="submit"
                    className="submitButton"
                    >Зберегти</Button>
            </Form>
        </Formik>
    )
}

export default EditForm;