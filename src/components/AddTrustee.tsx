import React from 'react';
import {Link} from '@tpr/core';
import {useHistory} from 'react-router-dom';


const AddTrustee = () =>{ 
    const history =  useHistory(); 
    return(
        <Link onClick={() => {history.push('/trustees/add-trustee')}}>
            + Add trustee
        </Link>
        );
    }

export default AddTrustee;