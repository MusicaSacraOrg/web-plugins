export function useBem(base: string) {
    // ToDo Will return scrambled classname
    const bem = (
        name?: string | Record<string, boolean>,
        ...names: Array<string | Record<string, boolean>>
    ) => {
        const classnames: string[] = [];

        const addClass = (classname: string) => {
            if (classname && !classnames.includes(classname)) {
                classnames.push(classname);
            }
        };

        const handleObject = (
            obj: Record<string, boolean>,
            prefixBase = true
        ) => {
            for (const [key, value] of Object.entries(obj)) {
                if (value) {
                    if (key === base) {
                        addClass(base);
                    } else {
                        addClass(prefixBase ? `${base}__${key}` : key);
                    }
                }
            }
        };

        if (name === base) {
            classnames.push(base);
        } else {
            if (typeof name === 'string' && name !== '') {
                addClass(`${base}__${name}`);
            }

            if (typeof name === 'object') {
                handleObject(name);
            }

            classnames.push(base);
        }

        for (const classname of names) {
            if (classname === base) {
                addClass(base);
            } else {
                if (typeof classname === 'string' && classname !== '') {
                    addClass(classname);
                }

                if (typeof classname === 'object') {
                    handleObject(classname, false);
                }

                addClass(base);
            }
        }

        return classnames.join(' ');
    };

    // ToDo Looks unnecesery, but later will return unscrambled className
    const element = (element?: string | Record<string, boolean>) => {
        if (typeof element === 'string' && element !== '') {
            return `${base}__${element}`;
        }

        if (typeof element === 'object') {
            return Object.entries(element)
                .filter(([, value]) => value)
                .map(([key]) => `${base}__${key}`)
                .join(' ');
        }

        return base;
    };

    const modifier = (modifier: string | Record<string, boolean>) => {
        if (typeof modifier === 'string' && modifier !== '') {
            return `${base}--${modifier}`;
        }

        if (typeof modifier === 'object') {
            return Object.entries(modifier)
                .filter(([, value]) => value)
                .map(([key]) => `${base}--${key}`)
                .join(' ');
        }

        return '';
    };

    return {
        bem,
        element,
        modifier,
        base,
    };
}
