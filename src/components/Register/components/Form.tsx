"use client";

import "../../../styles/components/_form.scss";

export default function Form() {
  return (
    <div className="form__container">
      <form className="form" action="">
        <div className="form__input__container">
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Endereço de email"
          />
        </div>
        <div className="form__input__container__checkbox">
          <input
            type="checkbox"
            id="terms"
            className="form__checkbox"
            required
          />
          <label htmlFor="terms" className="form__checkbox__label">
            Ao me inscrever, concordo com os <span>termos de uso</span> e a <span>política de privacidade</span>.
          </label>
        </div>
        <div className="form__input__container__button">
          <button
            type="submit"
            className="form__button"
            onClick={(e) => e.preventDefault()}
          >
            <span>Inscrever-se</span>
          </button>
        </div>
      </form>
    </div>
  );
}
