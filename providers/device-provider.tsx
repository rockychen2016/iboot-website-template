'use client'
import { randomString } from "@/utils/string";
import { createContext, useContext, useEffect, useState } from "react";

const DeviceIdProvider = createContext('');
export const useDeviceId = (): string => {
    return useContext(DeviceIdProvider);
}

export const _DEVICE_ID_KEY = 'DeviceId'
export default function DeviceProvider({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [deviceId, setDeviceId] = useState('');
    useEffect(() => {
        let id = localStorage.getItem(_DEVICE_ID_KEY);
        if (!id || id.length === 0) {
            id = randomString(20);
            localStorage.setItem(_DEVICE_ID_KEY, id);
        }
        setDeviceId(id);
    }, [])
    return (
        <DeviceIdProvider.Provider value={deviceId}>
            {children}
        </DeviceIdProvider.Provider>
    );
}