import { ParentComponent } from "solid-js";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { cn } from "@/libs/cn";

const ThemeProvider: ParentComponent = (props) => {
  return (
    <ColorModeProvider>
      <ColorModeScript/>
      <div class={cn("min-h-screen w-full")}>
        {props.children}
      </div>
    </ColorModeProvider>
  );
};

export default ThemeProvider;