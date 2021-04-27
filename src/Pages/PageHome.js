import React, { useState, useEffect, useRef, useCallback } from "react";
import { CPlaylistList } from "../Components/BurgerList.js";

export const PageHome = () => {
    return (
        <>
        <div class="container">
            <div class="row">
        < CPlaylistList/>
        </div>
        </div>
    <div class="d-flex p-2 bd-highlight justify-content-center">
    </div>
    </>
    );
}