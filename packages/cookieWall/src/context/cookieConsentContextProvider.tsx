import React, { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';

const STORAGE_KEY = 'ms_cookie_consent';

type CookieConsent = boolean | undefined;

type CookieConsentContextValue = {
    cookieConsent: CookieConsent;
    acceptCookiesConsent: () => void;
    rejectCookiesConsent: () => void;
    isCookiesConsentSet: () => boolean;
};

const defaultContextValue: CookieConsentContextValue = {
    cookieConsent: undefined,
    acceptCookiesConsent: () => {},
    rejectCookiesConsent: () => {},
    isCookiesConsentSet: () => false,
};

export const CookieConsentContext = createContext<CookieConsentContextValue>(defaultContextValue);

export function CookieConsentContextProvider({ children }: { children: ReactNode }) {
    const [cookieConsent, setCookieConsent] = useState<CookieConsent>(defaultContextValue.cookieConsent);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw === 'true') setCookieConsent(true);
            else if (raw === 'false') setCookieConsent(false);
            else setCookieConsent(undefined);
        } catch {
            setCookieConsent(undefined);
        }
    }, []);

    const acceptCookiesConsent = useCallback(() => {
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
        } catch {
        } 
        setCookieConsent(true);
    }, []);

    const rejectCookiesConsent = useCallback(() => {
        try {
            localStorage.setItem(STORAGE_KEY, 'false');
            localStorage.removeItem(STORAGE_KEY);
        } catch {
        }
        setCookieConsent(false);
    }, []);

    const isCookiesConsentSet = useCallback(() => cookieConsent !== undefined, [cookieConsent]);

    return (
        <CookieConsentContext.Provider
            value={{ cookieConsent, acceptCookiesConsent, rejectCookiesConsent, isCookiesConsentSet }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
}

export function useCookiesConsent() {
    return useContext(CookieConsentContext);
}