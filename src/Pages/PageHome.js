import React, { useState, useEffect, useRef, useCallback } from "react";
import { CBurgerList } from "../Components/BurgerList.js";

export const PageHome = () => {
    return (
    <>
        <h1>Menu</h1>
        <CBurgerList/>
    </>
    );
}