import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../AdminLayout/AdminLayout';
import { useSelector } from 'react-redux';

function Protected() {

    const user = useSelector((state)=> state.adminAuthReducer )
  
    useEffect(() => {
        // Check token here (retrieve from local storage or elsewhere)
         
    }, [user]); // Empty dependency array for one-time check

    return (
        <div>
            {user.isLogged ? <AdminLayout /> : <Navigate to="/admin-login" replace={true} />}
        </div>
    );
}

export default Protected;
