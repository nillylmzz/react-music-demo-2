import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  }

  return (
    <div className="container">

      <div className="col-xl-4 mx-auto my-5">
        <h1 className="text-secondary">Giriş Yap</h1>
        <button className="btn btn-primary rounded-0" onClick={logGoogleUser}>
          Sign in With Google
        </button>
      </div>
    </div>
  );

}

export default SignIn;