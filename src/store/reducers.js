const initialState = {
    password: '',
    strength: 0,
  };
 
  const PasswordStrength = (password) => {

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  console.log(hasSymbols)
    if (password.length === 0) {
      return 0;
    } else if (password.length < 8) {
      return 1;
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return 3;
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      return 2;
    } else {
      return 0;
    }
  };

  const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PASSWORD':
        return { ...state, password: action.payload, strength: PasswordStrength(action.payload) };
      default:
        return state;
    }
  };
  
  export default passwordReducer;