import React from "react";

const Footer = (): JSX.Element => {
  const linkClassName = "hover:text-rinze underline cursor-pointer";

  const handleClickPrivacyPolicy = () => {
    window.api.openPrivacyPolicy();
  };

  const handleClickGitHub = () => {
    window.api.openGitHub();
  };

  return (
    <>
      <span className="block mt-8 text-center text-xs text-luca">
        {`Разработано: arrow2nd - v${process.env.VERSION}`}
      </span>
      <span className="block mt-2 text-center text-xs text-luca">
        Перевод на Русский: POTI
      </span>
      <div className="mt-4 text-center text-xs text-luca">
        <span className={linkClassName} onClick={handleClickPrivacyPolicy}>
          Политика конфиденциальности
        </span>
        {" / "}
        <span className={linkClassName} onClick={handleClickGitHub}>
          {"Страница распространения (GitHub)"}
        </span>
      </div>
    </>
  );
};

export default Footer;
