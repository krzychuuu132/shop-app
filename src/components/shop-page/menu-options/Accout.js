import React, { useEffect, useState } from "react";
import "../../sass/menu-options/Accout.scss";

const Accout = () => {
  const [getInfo, useGetInfo] = useState("");

  useEffect(() => {
    fetch("/accout", { method: "GET" })
      .then(res => res.json())
      .then(data => useGetInfo(data.text));
  });

  return <h1 onClick={() => console.log(getInfo)}>Accout</h1>;
};

export default Accout;
