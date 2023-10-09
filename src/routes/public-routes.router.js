// Libraries
import { Navigate } from 'react-router-dom';

// Services
// import { getTokenService } from '../services/authentication.services';

// const useAuth = () => {
//     // const token = getTokenService()
//     // if (token) {
//     //   return true
//     // } else {
//     //   return false
//     // }
//   }
  
  const PublicRoutes = () => {
    // const auth = useAuth()
  
    // return auth ? 
    <Navigate to="/home" />
  }
  
  export default PublicRoutes;
