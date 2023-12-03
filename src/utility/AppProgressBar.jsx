"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function AppProgressBar() {
    return (
        <ProgressBar
            height="4px"
            color="#20B15A"
            options={{ showSpinner: true }}
            shallowRouting
        />
    );
}

