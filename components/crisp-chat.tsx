"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("crisp string");
  }, []);
  return null;
};
