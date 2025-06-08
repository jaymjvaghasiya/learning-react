import { useMemo, useState } from "react"

export const useDemoRouter = (initialPath) => {
    const [pathname, setPathname] = useState(initialPath);
    const router = useMemo(()=>{
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path))
        }
    }, [pathname])

    return router;
}