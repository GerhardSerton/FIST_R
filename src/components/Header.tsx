import { useLocation } from "preact-iso";
import getName from "../logic/nameGenerator";
import { useEffect } from "preact/hooks";
import generateCharacter from "../logic/characterGenerator";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          {getName()}
        </a>
        <a href="/404" class={url == "/404" && "active"}>
          404
        </a>
      </nav>
    </header>
  );
}
