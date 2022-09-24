import React from "react";
import { useEffect } from "react";

export const fetchUsers = async () => {
  const url =
    "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
  const responseData = await fetch(url);
  const data = await responseData.json();
  return data;
};
