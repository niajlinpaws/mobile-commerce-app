import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
import AuthReducer from './AuthReducer';
import SignUpReducer from './SignUpReducer';
import ForgotReducer from './ForgotPassReducer';
import VerificationReducer from './VerificationCodeReducer';
import ContactUsReducer from './ContactUsReducers';
import ChangePasswordReducer from './ChangePasswordReducers';
import ResetPasswordReducers from './ResetPasswordReducers';
import EditProfile from './EditProfileReducer';
import Catalog from './CatalogReducer';
import StaticPage from './StaticPageReducer';
import Home from './HomeReducer';
import ProductDetail from './ProductReducer';
import Comments from './CommentReducer';


export default combineReducers({
    auth: AuthReducer,
    signUp: SignUpReducer,
    forgotpassword: ForgotReducer,
    verification: VerificationReducer,
    contactus: ContactUsReducer,
    changepassword: ChangePasswordReducer,
    resetpassword: ResetPasswordReducers,
    editprofile: EditProfile,
    staticpage: StaticPage,
    home: Home,
    catalog:Catalog,
    productdetail: ProductDetail,
    comment: Comments,
    form: formReducer
});