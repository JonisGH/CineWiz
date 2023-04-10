import React, { useEffect, useState } from "react";

type FadingTypographyProps = {
  textValue: string;
  hide: boolean;
};

const FadingTypographyComponent = (
  props: FadingTypographyProps
): JSX.Element => {
  const { textValue, hide } = props;
  const [firstRender, setFirstRender] = useState(true);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (firstRender === false) {
      setHidden(hide);
      return;
    }
    setFirstRender(false);
    // eslint-disable-next-line
  }, [hide]);

  return (
    <p
      hidden={hidden}
      className="element-fade-in-out"
      style={{
        marginLeft: "-40px",
        fontStyle: "italic",
        color: "white",
        fontSize: "0.9rem",
        fontWeight: "initial",
      }}
    >
      {textValue}
    </p>
  );
};

export default FadingTypographyComponent;
