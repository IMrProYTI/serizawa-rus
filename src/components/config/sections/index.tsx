import React from "react";

import Section, { ConfigSection } from "./section";
import SelectDir from "./selectDir";

type Props = {
  toggleProgress: () => void;
};

const Sections = ({ toggleProgress }: Props): JSX.Element => {
  // ディレクトリを選択
  const handleClickSelectDir = () => {
    window.api.showSelectDirDialog();
  };

  // 項目
  const sections: ConfigSection[] = [
    {
      title: "Кэш приложения",
      btnText: "Очистить кэш",
      btnBg: "bg-red-400",
      btnHoverBg: "bg-red-600",
      onClick: () => {
        toggleProgress();
        window.api.removeCache().then(toggleProgress);
      }
    },
    {
      title: "Управление аккаунтом",
      btnText: "Выйти из аккаунта",
      btnBg: "bg-red-400",
      btnHoverBg: "bg-red-600",
      onClick: () => {
        toggleProgress();
        window.api.removeCookie().then(toggleProgress);
      }
    },
    {
      title: "Обновление приложения",
      btnText: "Проверить наличие обновлений",
      btnBg: "bg-gray-600",
      btnHoverBg: "bg-gray-800",
      onClick: () => {
        toggleProgress();
        window.api.checkUpdate().then(toggleProgress);
      }
    }
  ];

  return (
    <div className="mt-6">
      <SelectDir onClick={handleClickSelectDir} />
      {sections.map((e) => (
        <Section key={e.title} {...e} />
      ))}
    </div>
  );
};

export default Sections;
