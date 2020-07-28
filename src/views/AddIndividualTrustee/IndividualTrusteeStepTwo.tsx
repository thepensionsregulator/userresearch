import React from 'react';
import Styles from './Layout.module.scss';
import UserResearchSidebar from '../../components/UserResearchSidebar';
import { ArrowLink } from '@tpr/layout';
import { useHistory } from 'react-router-dom';
import { H1, H3, Hr, H4 } from '@tpr/core';
import { Form, SeparatorY, renderFields, SeparatorX, FieldProps } from '@tpr/forms';

const IndividualTrusteeStepTwo = () => {
    const history = useHistory();

    const submit = () => console.log("Submitting....");

    const TRUSTEE_TYPE_BUTTONS = "trusteeType";
    const PROF_TRUSTEE_BUTTONS = "professionalTrustee";

    const fields: FieldProps[][] = [
        [
        {name: TRUSTEE_TYPE_BUTTONS, type: 'radio', label: , value:},
        {name: TRUSTEE_TYPE_BUTTONS, type: 'radio', label: , value:},
        {name: TRUSTEE_TYPE_BUTTONS, type: 'radio', label: , value:},
        {name: TRUSTEE_TYPE_BUTTONS, type: 'radio', label: , value:},
],[{name: PROF_TRUSTEE_BUTTONS,}]]
    return(
    <div className={Styles.root}>
        <UserResearchSidebar />
        <div className={Styles.main}>
            <ArrowLink pointTo="left" iconSide="left" title="Back" cfg={{mt:3}} onClick={() => history.goBack()}/>
            <H3 cfg={{mt:2}}>Add trustee: Individual</H3>
            <H1 cfg={{mt:2, mb:3}}>Type of trustee</H1>
            <Hr cfg={{mt:4, mb:5}}/>
    <Form onSubmit={submit}>{({ handleSubmit, pristine}) => (<form onSubmit={handleSubmit}>
        <H4 cfg={{mb:2}}>Select the option that best describes the type of trustee:</H4>
    <SeparatorY>{renderFields(fields[0])}</SeparatorY>
    <H4>Is this individual a professional trustee?</H4>
    <SeparatorX>{renderFields(fields[1])}</SeparatorY>
        </form>)}
        </Form>
        </div>
    </div>

)};

export default IndividualTrusteeStepTwo;