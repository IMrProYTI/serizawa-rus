import React, { useReducer } from "react";
import {
  AiOutlineCamera,
  AiOutlineMinus,
  AiOutlineReload
} from "react-icons/ai";
import {
  RiCheckboxCircleFill,
  RiCloseLine,
  RiFullscreenExitLine,
  RiFullscreenLine,
  RiPushpin2Fill,
  RiPushpin2Line,
  RiVolumeMuteFill,
  RiVolumeUpLine
} from "react-icons/ri";

import UIButton, { Button } from "./button";

const RightButtons = (): JSX.Element => {
  const [isCaptured, toggleCaptured] = useReducer((prev) => !prev, false);
  const [isPinned, togglePinned] = useReducer((prev) => !prev, false);
  const [isMaximized, toggleMaximized] = useReducer((prev) => !prev, false);
  const [isMuted, toggleMuted] = useReducer((prev) => !prev, false);

  const buttons: Button[] = [
    {
      title: "Сделать скриншот",
      children: isCaptured ? <RiCheckboxCircleFill /> : <AiOutlineCamera />,
      onClick: () => {
        window.api.capture();
        toggleCaptured();
        setTimeout(() => toggleCaptured(), 1500);
      }
    },
    {
      title: isMuted ? "Включить звук" : "Заглушить звук",
      children: isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpLine />,
      onClick: () => {
        window.api.toggleMute();
        toggleMuted();
      }
    },
    {
      title: "Перезагрузить",
      children: <AiOutlineReload />,
      onClick: () => {
        window.api.reloadView();
      }
    },
    {
      title: isPinned ? "Открепить" : "Закрепить наверху",
      children: isPinned ? <RiPushpin2Fill /> : <RiPushpin2Line />,
      onClick: async () => {
        window.api.togglePinned();
        togglePinned();
      }
    },
    {
      title: "Свернуть",
      children: <AiOutlineMinus />,
      onClick: () => window.api.minimize()
    },
    {
      title: isMaximized ? "Восстановить" : "Развернуть",
      children: isMaximized ? <RiFullscreenExitLine /> : <RiFullscreenLine />,
      onClick: async () => {
        window.api.toggleMaximize();
        toggleMaximized();
      }
    },
    {
      title: "Закрыть",
      children: <RiCloseLine />,
      onClick: () => window.api.close()
    }
  ];

  return (
    <div className="flex items-center overflow-hidden">
      {buttons.map((e) => (
        <UIButton key={e.title} {...e}>
          {e.children}
        </UIButton>
      ))}
    </div>
  );
};

export default RightButtons;
