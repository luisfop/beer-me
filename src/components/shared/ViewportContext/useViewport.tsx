import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState
} from "react";

interface Viewport {
  width: number;
}

const ViewportContext = createContext<Viewport>({
  width: window.innerWidth
});

export const ViewportProvider: FC = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export function useViewport() {
  return useContext<Viewport>(ViewportContext);
}
