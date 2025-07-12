import React from "react";
import "./loader.css";

export interface LoaderProps {
  loading?: boolean;
  type?: string;
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  type = "spinner",
  color,
  children,
  className = "",
}) => {
  const style: React.CSSProperties = color
    ? ({ "--color": color } as React.CSSProperties)
    : {};

  return (
    <div>
      {loading ? (
        <div
          className={className + " " + "ms-loader " + "ms-loader--" + type}
          style={style}
        ></div>
      ) : (
        children
      )}
    </div>
  );
};

export default Loader;
