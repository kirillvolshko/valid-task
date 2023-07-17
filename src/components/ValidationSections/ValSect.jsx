import React from 'react'
import './ValSect.css'
import { useSelector } from 'react-redux'
function ValSect() {
    
    let strength = useSelector(state => state.strength)
    
    const renderSections = () => {
        switch (strength) {
          case 0:
            return (
              <>
                <div style={{ color: 'gray' }}>Only letters/digits/symbols - the password is easy</div>
                <div style={{ color: 'gray' }}>Combination of letters-symbols/letters-digits/digits-symbols - the password is medium</div>
                <div style={{ color: 'gray' }}>Has letters, symbols and numbers - the password is strong</div>
              </>
            );
          case 1:
            return (
              <>
                <div style={{ color: 'red' }}>Only letters/digits/symbols - the password is easy</div>
                <div style={{ color: 'gray' }}>Combination of letters-symbols/letters-digits/digits-symbols - the password is medium</div>
                <div style={{ color: 'gray' }}>Has letters, symbols and numbers - the password is strong</div>
              </>
            );
          case 2:
            return (
              <>
                <div style={{ color: 'orange' }}>Only letters/digits/symbols - the password is easy</div>
                <div style={{ color: 'orange' }}>Combination of letters-symbols/letters-digits/digits-symbols - the password is medium</div>
                <div style={{ color: 'gray' }}>Has letters, symbols and numbers - the password is strong</div>
              </>
            );
          case 3:
            return (
              <>
                <div style={{ color: 'green' }}>Only letters/digits/symbols - the password is easy</div>
                <div style={{ color: 'green' }}>Combination of letters-symbols/letters-digits/digits-symbols - the password is medium</div>
                <div style={{ color: 'green' }}>Has letters, symbols and numbers - the password is strong</div>
              </>
            );
          default:
            return null;
        }
      };
    
  return (
    <div>
        <div className="strength-sections">{renderSections()}</div>
    </div>
  )
}

export default ValSect